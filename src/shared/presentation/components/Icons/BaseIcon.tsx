import classNames from 'classnames';
import { ReactElement } from 'react';
import { themeColor } from '../../interfaces/theme.interface';

export type BaseIconProps = {
  color?: themeColor;
  size?: '1x' | '2x' | '3x' | '4x' | '5x';
  children: ReactElement;
};

export default function BaseIcon(props: BaseIconProps) {
  const { color = 'primary', size = '1x' } = props;
  return (
    <svg
      className={classNames('inline', {
        'text-primary': color === 'primary',
        'text-secondary': color === 'secondary',
        'text-success': color === 'success',
        'text-danger': color === 'danger',
        'text-warning': color === 'warning',
        'text-info': color === 'info',
        'w-5 h-5': size === '1x',
        'w-6 h-6': size === '2x',
        'w-7 h-7': size === '3x',
        'w-8 h-8': size === '4x',
        'w-9 h-9': size === '5x',
      })}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      {props.children}
    </svg>
  );
}
