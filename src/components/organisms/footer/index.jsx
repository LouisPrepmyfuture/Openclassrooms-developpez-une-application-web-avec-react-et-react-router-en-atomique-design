import styled from 'styled-components'
import logo from '../../../assets/img/logo/logo-kasa-white.png'
import Image from '../../atoms/image'

const FooterStyle = styled.footer`
	background-color: rgb(0, 0, 0);
	text-align: center;
	color: white;
	padding: 29px 0px;
	font-size: 24px;
	font-weight: 500;
	width: 100%;
	height: 209px;
	@media (max-width: 683px) {
		font-size: 12px;
	}
`

const LogoStyle = styled(Image)`
 margin-top: 70px;
`

const Footer = ({ title, children, className }) => {
 return (
  <FooterStyle className={className}>
   <LogoStyle theme="logo" url={logo} alt="logo" />
   <p>© 2020 Kasa. All rights reserved</p>
  </FooterStyle>
 )
}

export default Footer
