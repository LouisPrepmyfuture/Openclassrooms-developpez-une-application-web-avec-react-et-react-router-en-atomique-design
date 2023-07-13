import styled from 'styled-components'
import Image from '../../atoms/image'
import logo from '../../../assets/img/logo/logo-kasa-color.png'
import { NavLink } from 'react-router-dom'

const NavContainer = styled.nav`
 padding: 30px 0px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 max-width: 1240px;
 margin: 0 auto;
 @media (max-width: 683px) {
  padding-top: 0px;
 }
`
const ContentLink = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 > * {
  &:last-child {
   margin-left: 57px;
   @media (max-width: 683px) {
    margin-left: 20px;
   }
  }
 }
`
const StyledLink = styled(NavLink)`
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 24px;
 font-weight: 500;
 @media (max-width: 683px) {
  font-size: 12px;
  text-transform: uppercase;
  .mobile {
   width: 145px;
   height: 47px;
   border-radius: 0;
  }
 }
`

function Header({ classCss }) {
 return (
  <NavContainer className={classCss}>
   <StyledLink>
    <Image classCss="mobile" theme="logo" url={logo} alt="logo" />
   </StyledLink>
   <ContentLink id="sidebar" className="flexCenterCenter">
    <StyledLink to="/">Accueil</StyledLink>
    <StyledLink to="/a-propos">A propos</StyledLink>
   </ContentLink>
  </NavContainer>
 )
}

export default Header
