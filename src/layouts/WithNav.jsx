import { Outlet } from 'react-router-dom';

import { BottomNav } from '../shared/ui/BottomNav';
import { MobileFirstContainer } from '../shared/ui/MobileFirstContainer';

export const LayoutWithNav = () => {
  return (
    <MobileFirstContainer hasNav>
      <main className="flex-grow">
        <Outlet />
      </main>
      <BottomNav />
    </MobileFirstContainer>
  );
};
