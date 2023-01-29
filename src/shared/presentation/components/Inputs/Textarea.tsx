import { LegacyRef } from 'react';

type Props = {
  inputRef?: LegacyRef<HTMLTextAreaElement>;
  name: string;
  onBlur?: () => void;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

export default function Textarea(props: Props) {
  return (
    <textarea
      name={props.name}
      ref={props.inputRef}
      value={props.value}
      placeholder={props.placeholder}
      required={props.required}
      disabled={props.disabled}
      readOnly={props.readOnly}
      onBlur={props.onBlur}
      className="bg-white disabled:bg-gray-200 border focus:outline-primary text-gray-900 text-sm rounded-md w-full p-2"
    />
  );
}
