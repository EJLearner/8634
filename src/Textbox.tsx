import {useRef} from 'react';
import {FaAsterisk} from 'react-icons/fa';

function updateValidity(
  inputRef: React.RefObject<HTMLInputElement> | null,
  label: string,
) {
  if (inputRef?.current) {
    const validityState = inputRef.current.validity;

    console.log({validityState});

    if (validityState.valueMissing) {
      inputRef.current.setCustomValidity('This field is required.');
    } else if (validityState.patternMismatch) {
      inputRef.current.setCustomValidity(`Please enter a valid ${label}`);
    } else {
      inputRef.current.setCustomValidity('');
    }

    inputRef.current.reportValidity();
  }
}

export function Textbox({
  value,
  onChange,
  errorMessage,
  onBlur: onBlurProp = () => {},
  id,
  label,
  pattern,
  type = 'text',
  required,
}: {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  onBlur?: (value: string) => void;
  id: string;
  label: string;
  pattern?: string;
  type?: string;
  required?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label htmlFor={id}>
      {label}
      {required && (
        <>
          {' '}
          <FaAsterisk className="required-asterisk" />
        </>
      )}
      {errorMessage && (
        <div className="error-message" id={`${id}-error`} role="alert">
          {errorMessage}
        </div>
      )}
      <input
        id={id}
        onChange={(e) => onChange(e.target.value)}
        name={id}
        onBlur={(e) => {
          updateValidity(inputRef, label);
          onBlurProp?.(e.target.value);
        }}
        pattern={pattern}
        required={required}
        type={type}
        ref={inputRef}
        value={value}
      />
    </label>
  );
}
