import styled from 'styled-components';

export const NavigationWrap = styled.div`
  .back {
    display: none;
    position: absolute;
    left: 0;
    top: 8rem;
    width: 100%;
    height: 20rem;
    background: ${(props) => props.theme.colors.white};
  }
`;
export const Navigation = styled.ol`
  ul {
    /* display: flex; */
    display: none;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: calc(8rem + 2rem);
  }
`;
