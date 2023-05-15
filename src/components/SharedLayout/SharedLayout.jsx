import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={null}>
        SharedLayout
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
