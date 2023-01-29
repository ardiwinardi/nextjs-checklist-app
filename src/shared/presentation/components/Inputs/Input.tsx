import { LegacyRef } from 'react';

type Props = {
  inputRef?: LegacyRef<HTMLInputElement>;
  name: string;
  onBlur?: () => void;
  value?: string;
  type?: 'text' | 'number' | 'date' | 'password' | 'checked';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

export default function Input(props: Props) {
  return (
    <input
      name={props.name}
      ref={props.inputRef}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      required={props.required}
      readOnly={props.readOnly}
      onBlur={props.onBlur}
      className="bg-white disabled:bg-gray-200 border focus:outline-primary text-gray-900 text-sm rounded-md w-full p-2"
    />
  );
}
