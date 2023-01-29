import Button from '@/shared/presentation/components/Button';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { Checklist } from '../../domain/checklist.entity';
import { ChecklistContext } from '../contexts/ChecklistContext';
import { useCreateChecklist } from '../controllers/checklist.controller';

const ChecklistForm = dynamic(() => import('./organisms/ChecklistForm'), {
  ssr: false,
});

export default function ChecklistFooter() {
  const { isEditItem } = useContext(ChecklistContext);

  const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
  const createController = useCreateChecklist();

  const handleCreate = (item: Checklist) => {
    createController.mutate(item);
  };

  useEffect(() => {
    if (createController.isSuccess) {
      setShowCreateForm(false);
    }
  }, [createController.isSuccess]);

  const isShowForm = showCreateForm && !isEditItem;
  const isAddNew = !showCreateForm && !isEditItem;

  return (
    <footer className="flex flex-col space-y-3 pl-8">
      {isShowForm && (
        <ChecklistForm
          handleClose={() => setShowCreateForm(false)}
          handleSubmit={handleCreate}
          isLoading={createController.isLoading}
        />
      )}

      {isAddNew && (
        <div>
          <Button onClick={() => setShowCreateForm(true)}>Add an Item</Button>
        </div>
      )}
    </footer>
  );
}
