import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.gray800};
  padding: 5.4rem 0 4rem;
`;
export const FooterNavContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 0 22rem;
`;
export const FooterNav = styled.ol``;
export const FooterMenuTab = styled.div``;
export const FooterLegal = styled.div``;
export const FooterAddress = styled.div`
  display: flex;
  gap: 3rem;
`;
export const FooterLicenses = styled.div`
  display: flex;
  gap: 3rem;
  margin: 0 0 1rem;
  button {
    &:hover {
      color: ${(props) => props.theme.colors.txt100};
    }
  }
`;
export const Reserved = styled.div``;
