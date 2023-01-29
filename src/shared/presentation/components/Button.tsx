import classNames from 'classnames';
import { ReactNode } from 'react';
import { themeColor } from '../interfaces/theme.interface';
import Spinner from './Spinner';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
  isLoading?: boolean;
  color?: themeColor | 'transparent';
};

export default function Button(props: Props) {
  const { color = 'secondary', isLoading = false } = props;

  return (
    <button
      type={props.type ?? 'button'}
      className={classNames('px-3 py-2 rounded text-sm flex', {
        'bg-primary hover:bg-primary/70 active:bg-primary/70 text-white':
          color === 'primary',
        'bg-secondary hover:bg-secondary/70 active:bg-secondary/70':
          color === 'secondary',
        'bg-warning hover:bg-warning/70 active:bg-warning/70':
          color === 'warning',
        'bg-danger hover:bg-danger/70 active:bg-danger/70': color === 'danger',
        'bg-info hover:bg-info/70 active:bg-info/70': color === 'info',
        '!p-1 hover:bg-white active:bg-white': color === 'transparent',
      })}
      onClick={props.onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Spinner size="xs" /> &nbsp;Loading
        </>
      ) : (
        props.children
      )}
    </button>
  );
}
