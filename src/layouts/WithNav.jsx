import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { BottomNav } from '../shared/ui/BottomNav';
import { MobileFirstContainer } from '../shared/ui/MobileFirstContainer';

const Main = styled.main`
  flex-grow: 1;
`;

export const LayoutWithNav = () => {
  return (
    <MobileFirstContainer hasNav>
      <Main>
        <Outlet />
      </Main>
      <BottomNav />
    </MobileFirstContainer>
  );
};
