import { Checklist } from '@/features/checklist/domain/checklist.entity';
import Button from '@/shared/presentation/components/Button';
import TrashIcon from '@/shared/presentation/components/Icons/TrashIcon';
import Checkbox from '@/shared/presentation/components/Inputs/Checkbox';
import Spinner from '@/shared/presentation/components/Spinner';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { useContext, useEffect } from 'react';
import { ChecklistContext } from '../../contexts/ChecklistContext';
import {
  useDeleteChecklist,
  useUpdateChecklist,
} from '../../controllers/checklist.controller';

const ChecklistForm = dynamic(() => import('./ChecklistForm'), {
  ssr: false,
});

type Props = {
  item: Checklist;
  selectedItem: Checklist | null;
  setSelectedItem: (item: Checklist) => void;
  isEditing: boolean;
};
export default function ChecklistItem(props: Props) {
  const { setIsEditItem } = useContext(ChecklistContext);

  const updateController = useUpdateChecklist();
  const deleteController = useDeleteChecklist();

  const handleSelectItem = (item: Checklist) => {
    props.setSelectedItem(item);
    setIsEditItem(true);
  };

  const handleUpdate = (item: Checklist) => {
    updateController.mutate(item);
  };

  // trigger close the form when update succeed
  useEffect(() => {
    if (updateController.isSuccess) {
      setIsEditItem(false);
    }
  }, [setIsEditItem, updateController.isSuccess]);

  const isLoading = updateController.isLoading || deleteController.isLoading;

  return (
    <li
      className={classNames(
        'flex justify-between items-center py-2 px-1 group hover:bg-gray-200 rounded-md transition-all duration-200',
        { 'bg-gray-200': isLoading }
      )}
    >
      <div
        className={classNames('flex items-center w-full', {
          '!items-start space-x-2': props.isEditing,
        })}
      >
        <div
          className={classNames('mt-1', {
            'mt-0.5': props.isEditing,
          })}
        >
          <Checkbox
            name="check"
            checked={props.item.isDone}
            onClick={() =>
              updateController.mutate({
                ...props.item,
                isDone: !props.item.isDone,
              })
            }
            readOnly
          />
        </div>

        {!props.isEditing && (
          <span
            className={classNames(
              'flex ml-4 text-sm font-medium text-gray-600 cursor-pointer',
              {
                'line-through italic !text-gray-400': props.item.isDone,
              }
            )}
            onClick={() => handleSelectItem(props.item)}
          >
            {props.item.name}{' '}
            {isLoading && (
              <div className="text-gray-400 italic flex ml-3 !no-underline">
                <Spinner size="xs" />
                &nbsp; Loading
              </div>
            )}
          </span>
        )}

        {props.isEditing && (
          <div className="w-full -mt-1">
            <ChecklistForm
              item={props.item}
              handleClose={() => setIsEditItem(false)}
              handleSubmit={handleUpdate}
              isLoading={updateController.isLoading}
            />
          </div>
        )}
      </div>

      {!props.isEditing && (
        <div className="group-hover:opacity-100 lg:opacity-0">
          <Button
            color="transparent"
            onClick={() => deleteController.mutate(props.item)}
          >
            <TrashIcon color="danger" />
          </Button>
        </div>
      )}
    </li>
  );
}
