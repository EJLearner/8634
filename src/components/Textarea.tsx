import {useRef} from 'react';
import {FaAsterisk} from 'react-icons/fa';
import {updateValidity} from '../utils/genUtils';

export function Textarea({
  value,
  onChange,
  errorMessage,
  onBlur: onBlurProp,
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
          if (textboxRef?.current) {
            updateValidity(textboxRef.current, label);
          }
          onBlurProp?.(e.target.value);
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
