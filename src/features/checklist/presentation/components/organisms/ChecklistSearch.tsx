import Search from '@/shared/presentation/components/Inputs/Search';
import { useContext } from 'react';
import { ChecklistContext } from '../../contexts/ChecklistContext';

export default function ChecklistSearch() {
  const { setKeyword, keyword } = useContext(ChecklistContext);

  return (
    <Search onSubmit={(keyword) => setKeyword(keyword)} keyword={keyword} />
  );
}
