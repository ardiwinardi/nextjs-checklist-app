import Button from '@/shared/presentation/components/Button';
import CloseIcon from '@/shared/presentation/components/Icons/CloseIcon';
import FilterIcon from '@/shared/presentation/components/Icons/FilterIcon';
import SearchIcon from '@/shared/presentation/components/Icons/SearchIcon';
import Input from '@/shared/presentation/components/Inputs/Input';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';

type Props = {
  keyword: string;
  onSubmit: (keyword: string) => void;
};

export default function Search(props: Props) {
  const [isShowSearch, setShowSearch] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      keyword: { value: string };
    };
    props.onSubmit(target.keyword.value);
  };

  useEffect(() => {
    if (isShowSearch) {
      inputRef.current?.focus();
    }
  }, [isShowSearch]);

  const handleClear = () => {
    setShowSearch(false);
    props.onSubmit('');
  };

  const handleBlur = () => {
    if (!props.keyword) handleClear();
  };
  return (
    <div className="flex items-center justify-end h-5">
      {isShowSearch && (
        <form className="relative w-full" onSubmit={handleSubmit}>
          <Input
            name="keyword"
            inputRef={inputRef}
            type="text"
            onBlur={handleBlur}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-1">
            {props.keyword ? (
              <>
                <FilterIcon color="danger" size="1x" />
                <Button color="transparent" onClick={() => handleClear()}>
                  <CloseIcon size="2x" />
                </Button>
              </>
            ) : (
              <SearchIcon size="2x" />
            )}
          </div>
        </form>
      )}

      {!isShowSearch && (
        <Button color="transparent" onClick={() => setShowSearch(true)}>
          <SearchIcon size="2x" />
        </Button>
      )}
    </div>
  );
}
