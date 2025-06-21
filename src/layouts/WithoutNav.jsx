import { Outlet } from 'react-router-dom';

import { MobileFirstContainer } from '../shared/ui/MobileFirstContainer';

export const LayoutWithoutNav = () => {
  return (
    <MobileFirstContainer>
      <Outlet />
    </MobileFirstContainer>
  );
};
