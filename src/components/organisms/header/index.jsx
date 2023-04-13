import styled from 'styled-components'
import Image from '../../atoms/image'
import logo from '../../../assets/img/logo/logo-kasa-color.png'
import { Link } from 'react-router-dom' 

const StyledLink = styled(Link)`
	background: #F7F7F7;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
		    <StyledLink><Image url={logo} alt="logo" /></StyledLink>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/a-propos">A propos</StyledLink>
    </NavContainer>
  );
}

export default Header;
