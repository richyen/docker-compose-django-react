import styled from 'styled-components';

// Styled Components
export const HeaderContainer = styled.div`
  padding: 5px 5% 20px 5%;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  padding-top: 15;
  height: 65;
`;

export const LogoContainer = styled.div`
  width: 150px;
  padding: 0;
  margin: 0;
  display: block;
`;

export const StyledLogo = styled.img`
  width: 100%;
`;

export const SecondaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavContainer = styled.div`
  min-width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 10px;
`;

export const NavLink = styled.span`
  padding: 0 15px;

  &:before {
    transition: all 0.5s;
  }

  &:hover {
    color: #555;
  }
`;
