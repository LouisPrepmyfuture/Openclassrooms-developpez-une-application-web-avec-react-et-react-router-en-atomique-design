import styled from 'styled-components'
import logo from '../../../assets/img/logo/logo-kasa-white.png'
import Image from '../../atoms/image'


const FooterStyle = styled.footer
`
	background-color:#000; 
	text-align: center;
	padding:29px 0;
	font-size:24px;
	font-weight:500;
`

const LogoStyle = styled(Image)
`
margin-top:70px;
`

const Footer = ({ title, children, className }) => {

	return (
		<FooterStyle className={className} >
			<LogoStyle url={logo} alt="logo" />
			<p>© 2020 Kasa. All rights reserved</p>
		</FooterStyle>
	)
}



export default Footer