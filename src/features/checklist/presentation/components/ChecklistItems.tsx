import { useContext, useEffect, useState } from 'react';
import { Checklist } from '../../domain/checklist.entity';
import { ChecklistContext } from '../contexts/ChecklistContext';
import { useGetAllChecklist } from '../controllers/checklist.controller';
import ChecklistItem from './organisms/ChecklistItem';

export default function ChecklistItems() {
  const { isHideCheckedItem, isEditItem, keyword } =
    useContext(ChecklistContext);
  const [items, setItems] = useState<Checklist[]>([]);
  const [selectedItem, setSelectedItem] = useState<Checklist | null>(null);

  const getAllController = useGetAllChecklist();

  // set items and filtering
  useEffect(() => {
    if (getAllController.isSuccess) {
      let items = getAllController.data;

      if (isHideCheckedItem) {
        items = items.filter((item) => item.isDone == false);
      }
      if (keyword) {
        items = items.filter((item) =>
          item.name.toLowerCase().includes(keyword.toLowerCase())
        );
      }
      setItems(items);
    }
  }, [
    getAllController.isSuccess,
    getAllController.data,
    isHideCheckedItem,
    keyword,
  ]);

  return (
    <main className="px-1">
      <ul aria-label="checklist">
        {items.map((item) => {
          const isEditing = isEditItem && item.id === selectedItem?.id;

          return (
            <ChecklistItem
              key={item.id}
              isEditing={isEditing}
              item={item}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          );
        })}
      </ul>
    </main>
  );
}
