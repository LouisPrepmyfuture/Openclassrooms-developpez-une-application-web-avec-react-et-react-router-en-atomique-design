import styled from 'styled-components'
import Image from '../../atoms/image'
import logo from '../../../assets/img/logo/logo-kasa-color.png'
import { NavLink } from 'react-router-dom'


const NavContainer = styled.nav`
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ContentLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    &:last-child {
      margin-left: 57px;
    }
  }
`
const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <StyledLink>
        <Image url={logo} alt="logo" />
      </StyledLink>
      <ContentLink id="sidebar" className="flexCenterCenter">
        <StyledLink to="/" >Accueil</StyledLink>
        <StyledLink to="/a-propos">A propos</StyledLink>
      </ContentLink>
    </NavContainer>
  )
}

export default Header
