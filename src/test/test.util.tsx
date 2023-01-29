import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import ErrorBoundary from '../shared/presentation/components/Layouts/ErrorBoundary';
import { InternetConnectionProvider } from '../shared/presentation/contexts/InternetConnectionContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export const testWrapper = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary>
    <InternetConnectionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </InternetConnectionProvider>
  </ErrorBoundary>
);
