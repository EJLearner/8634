import {FaAsterisk} from 'react-icons/fa';

export function Textarea({
  value,
  onChange,
  errorMessage,
  onBlur = () => {},
  id,
  label,
  rows = 3,
  required = false,
  pattern,
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
        onChange={(e) => onChange(e.target.value)}
        name={id}
        rows={rows}
        required={required}
        onBlur={(e) => onBlur(e.target.value)}
        value={value}
      />
    </label>
  );
}
