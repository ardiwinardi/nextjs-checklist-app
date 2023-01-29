import { createContext, ReactElement, useEffect, useState } from 'react';

type InternetConnectionContextValueProps = {
  isOnline: boolean;
};

export const InternetConnectionContext =
  createContext<InternetConnectionContextValueProps>({ isOnline: true });

type InternetConnectionProviderProps = {
  children: ReactElement;
};
export const InternetConnectionProvider = (
  props: InternetConnectionProviderProps
) => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  const checkInternetConnection = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    checkInternetConnection();

    window.addEventListener('offline', checkInternetConnection);
    window.addEventListener('online', checkInternetConnection);

    return () => {
      window.removeEventListener('offline', checkInternetConnection);
      window.removeEventListener('online', checkInternetConnection);
    };
  }, []);
  return (
    <InternetConnectionContext.Provider value={{ isOnline }}>
      {props.children}
    </InternetConnectionContext.Provider>
  );
};
