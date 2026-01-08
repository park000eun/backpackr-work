'use client';
import { Suspense, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from '@/src/page/Home';
import { Loading } from '@/src/components';

const App = () => {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { retry: false } } }));

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
