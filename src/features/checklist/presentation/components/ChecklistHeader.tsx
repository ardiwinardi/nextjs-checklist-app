import Button from '@/shared/presentation/components/Button';
import ChecklistIcon from '@/shared/presentation/components/Icons/ChecklistIcon';
import Progress from '@/shared/presentation/components/Progress';
import { useContext, useMemo } from 'react';
import { ChecklistContext } from '../contexts/ChecklistContext';
import { useGetAllChecklist } from '../controllers/checklist.controller';
import ChecklistSearch from './organisms/ChecklistSearch';

export default function ChecklistHeader() {
  const { isHideCheckedItem, setIsHideCheckedItem } =
    useContext(ChecklistContext);

  const getAllController = useGetAllChecklist();

  const totalItems = getAllController.data?.length ?? 0;
  const totalCheckedItems =
    getAllController.data?.filter((item) => item.isDone === true).length ?? 0;

  const percent = useMemo(() => {
    if (totalItems === 0) return 0;
    const percent = Math.round((totalCheckedItems / totalItems) * 100);
    return percent;
  }, [totalItems, totalCheckedItems]);

  return (
    <header className="flex flex-col items-center space-y-3">
      <section className="flex justify-between items-center w-full">
        <div className="flex px-1 space-x-3">
          <ChecklistIcon size="2x" />
          <h1 className="font-semibold">My Checklist</h1>
        </div>
        <div className="flex space-x-2 items-center">
          <ChecklistSearch />
          {totalCheckedItems > 0 && (
            <div className="w-max">
              <Button onClick={() => setIsHideCheckedItem(!isHideCheckedItem)}>
                {isHideCheckedItem
                  ? `Show checked items (${totalCheckedItems})`
                  : 'Hide checked items'}
              </Button>
            </div>
          )}
        </div>
      </section>
      <Progress percent={percent} />
    </header>
  );
}
