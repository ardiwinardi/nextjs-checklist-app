import { LegacyRef } from 'react';

type Props = {
  inputRef?: LegacyRef<HTMLInputElement>;
  name: string;
  onClick?: () => void;
  value?: string;
  type?: 'text' | 'number' | 'date' | 'password' | 'checked';
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

export default function Checkbox(props: Props) {
  return (
    <input
      type="checkbox"
      checked={props.checked}
      className="w-4 h-4 text-primary cursor-pointer"
      onClick={props.onClick}
      name={props.name}
      ref={props.inputRef}
      value={props.value}
      required={props.required}
      readOnly={props.readOnly}
    />
  );
}
