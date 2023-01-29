import { createContext, ReactElement, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

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

  useEffect(() => {
    if (isOnline) {
      toast.dismiss('error-connection');
    } else {
      toast.error('Not connected to the internet', {
        autoClose: false,
        closeButton: false,
        closeOnClick: false,
        toastId: 'error-connection',
      });
    }
  }, [isOnline]);

  return (
    <InternetConnectionContext.Provider value={{ isOnline }}>
      {props.children}
    </InternetConnectionContext.Provider>
  );
};
