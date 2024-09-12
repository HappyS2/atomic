import styled from 'styled-components';

export const HeaderContainer = styled.header`
  z-index: 10;
  position: relative;
  height: 8rem;
  background-color: ${(props) => props.theme.colors.white};
`;

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  padding: 0 5%;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray500};
  .wrapper {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .logo {
    width: 100%;
    max-width: 5.6rem;
    object-fit: contain;
  }
  .menuGroup {
    display: flex;
    align-items: center;
    gap: 6rem;
  }
  ol {
    display: flex;
    gap: 6rem;
  }
`;
