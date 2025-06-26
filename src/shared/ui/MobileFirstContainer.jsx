import styled from 'styled-components';

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  ${({ hasNav }) => hasNav && 'display: flex; flex-direction: column;'}
`;

export const MobileFirstContainer = ({ children, hasNav = false }) => {
  return (
    <OuterWrapper>
      <InnerWrapper hasNav={hasNav}>{children}</InnerWrapper>
    </OuterWrapper>
  );
};
