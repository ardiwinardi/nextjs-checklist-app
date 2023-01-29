import BaseIcon, { BaseIconProps } from './BaseIcon';

type Props = Omit<BaseIconProps, 'children'>;

export default function CloseIcon(props: Props) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </BaseIcon>
  );
}
