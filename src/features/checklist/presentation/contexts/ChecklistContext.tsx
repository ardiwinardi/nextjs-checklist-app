import { createContext, useCallback, useReducer } from 'react';

interface ChecklistAction {
  type: 'HIDE_CHECKED_ITEM' | 'ADD_ITEM' | 'EDIT_ITEM' | 'KEYWORD';
  payload: boolean | string;
}

interface ChecklistState {
  isHideCheckedItem: boolean;
  isAddItem: boolean;
  isEditItem: boolean;
  keyword: string;
}

function checklistReducer(
  state: ChecklistState,
  action: ChecklistAction
): ChecklistState {
  const { type, payload } = action;
  switch (type) {
    case 'HIDE_CHECKED_ITEM':
      return {
        ...state,
        isHideCheckedItem: payload as boolean,
      };
    case 'ADD_ITEM':
      return {
        ...state,
        isAddItem: payload as boolean,
      };
    case 'EDIT_ITEM':
      return {
        ...state,
        isEditItem: payload as boolean,
      };
    case 'KEYWORD':
      return {
        ...state,
        keyword: payload as string,
      };
    default:
      return state;
  }
}

type ChecklistContextValueProps = ChecklistState & {
  setIsHideCheckedItem: (value: boolean) => void;
  setIsAddItem: (value: boolean) => void;
  setIsEditItem: (value: boolean) => void;
  setKeyword: (value: string) => void;
};

const defaultState: ChecklistState = {
  isHideCheckedItem: false,
  isAddItem: false,
  isEditItem: false,
  keyword: '',
};

export const ChecklistContext = createContext<ChecklistContextValueProps>({
  ...defaultState,
  setIsHideCheckedItem: () => false,
  setIsAddItem: () => false,
  setIsEditItem: () => false,
  setKeyword: () => false,
});

type ChecklistContextProviderProps = {
  children: React.ReactElement;
};

export default function ChecklistContextProvider(
  props: ChecklistContextProviderProps
) {
  const [state, dispatch] = useReducer(checklistReducer, defaultState);
  const { isHideCheckedItem, isAddItem, isEditItem, keyword } = state;

  const setIsHideCheckedItem = useCallback(
    (value: boolean) => dispatch({ type: 'HIDE_CHECKED_ITEM', payload: value }),
    []
  );

  const setIsAddItem = useCallback(
    (value: boolean) => dispatch({ type: 'ADD_ITEM', payload: value }),
    []
  );
  const setIsEditItem = useCallback(
    (value: boolean) => dispatch({ type: 'EDIT_ITEM', payload: value }),
    []
  );
  const setKeyword = useCallback(
    (value: string) => dispatch({ type: 'KEYWORD', payload: value }),
    []
  );

  return (
    <ChecklistContext.Provider
      value={{
        isHideCheckedItem,
        isAddItem,
        isEditItem,
        keyword,
        setIsHideCheckedItem,
        setIsAddItem,
        setIsEditItem,
        setKeyword,
      }}
    >
      {props.children}
    </ChecklistContext.Provider>
  );
}
