import { ReactNode } from 'react';
import AlertIcon from './Icons/AlertIcon';

type Props = {
  children: ReactNode;
};
export default function Alert(props: Props) {
  return (
    <div
      className="flex space-x-1 p-4 mb-4 text-sm text-danger bg-danger/10"
      role="alert"
    >
      <AlertIcon color="danger" />
      <div>{props.children}</div>
    </div>
  );
}
