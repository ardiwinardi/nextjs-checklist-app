import Button from '@/shared/presentation/components/Button';
import CloseIcon from '@/shared/presentation/components/Icons/CloseIcon';
import Textarea from '@/shared/presentation/components/Inputs/Textarea';
import { SyntheticEvent, useEffect, useRef } from 'react';
import { Checklist } from '../../../domain/checklist.entity';

type Props = {
  isLoading: boolean;
  handleClose: () => void;
  handleSubmit: (item: Checklist) => void;
  item?: Checklist;
};
export default function ChecklistForm(props: Props) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
    };

    let payload: Checklist = {
      id: '',
      name: target.name.value,
      isDone: false,
      createdAt: new Date(),
    };

    if (props.item) {
      payload = {
        id: props.item.id,
        isDone: props.item.isDone,
        createdAt: props.item.createdAt,
        name: target.name.value,
      };
    }

    props.handleSubmit(payload);
  };

  // trigger focus on opening
  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  // set default value
  useEffect(() => {
    if (props.item && inputRef.current)
      inputRef.current.value = props.item.name;
  }, [inputRef, props.item]);

  return (
    <form onSubmit={handleSubmit} className="space-y-1 w-full flex-col">
      <Textarea
        name="name"
        inputRef={inputRef}
        placeholder="Add an item"
        required
        disabled={props.isLoading}
      />
      <div className="flex items-center space-x-2">
        <Button color="primary" type="submit" isLoading={props.isLoading}>
          {props.item ? 'Save' : 'Add'}
        </Button>
        <Button color="transparent" onClick={props.handleClose}>
          <CloseIcon />
        </Button>
      </div>
    </form>
  );
}
