import React, { lazy, Suspense } from 'react';

interface Props {
  fallback: React.ReactNode | null;
}

const loadable = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  { fallback = null }: Props = { fallback: null },
) => {
  const LazyComponent = lazy(importFunc);
  const lazyFn = (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
  return lazyFn;
};

export default loadable;
