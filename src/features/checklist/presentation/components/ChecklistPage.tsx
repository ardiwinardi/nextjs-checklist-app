import ChecklistContextProvider from '../contexts/ChecklistContext';
import ChecklistFooter from './ChecklistFooter';
import ChecklistHeader from './ChecklistHeader';
import ChecklistItems from './ChecklistItems';

export default function ChecklistPage() {
  return (
    <ChecklistContextProvider>
      <section className="bg-[#f4f5f7] px-4 p-5 rounded-md mt-5 space-y-2">
        <ChecklistHeader />
        <ChecklistItems />
        <ChecklistFooter />
      </section>
    </ChecklistContextProvider>
  );
}
