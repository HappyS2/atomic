import styled from 'styled-components';

export const NavigationFooterWrap = styled.ol`
  display: flex;
  gap: 10rem;
  button {
    color: ${(props) => props.theme.colors.txt100};
    font-size: 1.6rem;
  }

  > li {
    > button {
      margin: 0 0 2rem;
      color: ${(props) => props.theme.colors.txt200};
    }
  }

  ul {
    li {
      margin: 0 0 2rem;
    }
  }
`;
