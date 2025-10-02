import {useRef} from 'react';
import {FaAsterisk} from 'react-icons/fa';
import {updateValidity} from '../utils/genUtils';

export function Textbox({
  value,
  onChange,
  errorMessage,
  onBlur: onBlurProp,
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
  const inputRef = useRef<HTMLInputElement | null>(null);

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
        name={id}
        onBlur={(e) => {
          if (inputRef?.current) {
            updateValidity(inputRef.current, label);
          }

          onBlurProp?.(e.target.value);
        }}
        onChange={(e) => onChange(e.target.value)}
        pattern={pattern}
        ref={inputRef}
        required={required}
        type={type}
        value={value}
      />
    </label>
  );
}
