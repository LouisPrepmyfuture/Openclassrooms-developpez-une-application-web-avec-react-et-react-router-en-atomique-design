import Title from '../../atoms/title';
import styled from 'styled-components'


const BannerStyle = styled.div`
  ${({ background }) =>
    background !== undefined &&
    `background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${background});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;`}

		max-height: 223px;
		max-width: 1240px;
		height:223px;
		border-radius: 25px;
		display:flex;
		justify-content:center;
		margin: 0 auto;
		h1{
			font-size:48px;
			color:white;
			font-weight: 500;
		}
		@media (max-width: 683px) {
			align-items:center;
			justify-content:start;
			height:111px;
			h1{
				font-size: 24px;
				padding:0px 16px;
			}
		}
`

function Banner({title,background, lvl,className}) {
  return (
    <BannerStyle className={className} background={background}>
			{title ? <Title lvl={lvl}  children={title}/> : null}
    </BannerStyle>
  );
}

export default Banner;
