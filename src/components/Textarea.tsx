import {useRef} from 'react';
import {FaAsterisk} from 'react-icons/fa';

function updateValidity(
  inputRef: React.RefObject<HTMLTextAreaElement | null>,
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

export function Textarea({
  value,
  onChange,
  errorMessage,
  onBlur,
  id,
  label,
  rows = 3,
  required = false,
}: {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  onBlur?: (value: string) => void;
  id: string;
  label: string;
  rows?: number;
  pattern?: string;
  required?: boolean;
}) {
  const textboxRef = useRef<HTMLTextAreaElement | null>(null);

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
      <textarea
        id={id}
        name={id}
        onBlur={(e) => {
          updateValidity(textboxRef, label);
          onBlur?.(e.target.value);
        }}
        onChange={(e) => onChange(e.target.value)}
        ref={textboxRef}
        required={required}
        rows={rows}
        value={value}
      />
    </label>
  );
}
