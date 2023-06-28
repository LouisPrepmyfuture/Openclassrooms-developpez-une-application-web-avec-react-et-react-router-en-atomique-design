import Title from '../../atoms/title';
import styled from 'styled-components'


const BannerStyle = styled.div`
  ${({ background }) =>
    background !== undefined &&
    `background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${background});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;`}
		${({ title }) =>
		title !== undefined &&`
		`}
		
		max-height: 223px;
		max-width: 1240px;
		height:223px;
		border-radius: 25px;
		display:flex;
		align-items:center;
		justify-content:center;
		margin: 0 auto;
		font-size:48px;
		color:white;
`

function Banner({title,background, lvl,className}) {
  return (
    <BannerStyle className={className} background={background}>
			{title ? <Title lvl={lvl}  children={title}/> : null}
    </BannerStyle>
  );
}

export default Banner;
