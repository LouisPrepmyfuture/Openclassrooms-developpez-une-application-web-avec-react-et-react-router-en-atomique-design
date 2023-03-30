import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'



const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/a-propos">A propos</StyledLink>
    </NavContainer>
  );
}

export default Header;
