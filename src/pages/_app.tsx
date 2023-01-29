import ErrorBoundary from '@/shared/presentation/components/Layouts/ErrorBoundary';
import { InternetConnectionProvider } from '@/shared/presentation/contexts/InternetConnectionContext';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ErrorBoundary>
      <InternetConnectionProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </InternetConnectionProvider>
    </ErrorBoundary>
  );
}
