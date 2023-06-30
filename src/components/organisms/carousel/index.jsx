import React, { useState } from 'react'
import Button from '../../atoms/button'
import Image from '../../atoms/image'
import styled from 'styled-components'
import { TbChevronLeft, TbChevronRight} from "react-icons/tb";

const FigureStyle = styled.figure`
	height: 100%;
	display: flex;
	border-radius: 10px;
	margin: 0 auto;
`
const CarouselStyle = styled.div`
 width: 100%;
 height: 350px;
 margin: 0 0 32px;
 position: relative;
 overflow: hidden;
`
const NbImgStyle = styled.span`
	bottom: 20px;
	left: 50%;
	font-size: 18px;
	transform: translateX(-50%);
	position: absolute;
	z-index: 9999;
	color: white;
`
const BtnStyle =  styled(Button)`
	top: 50%;
	font-size: 170px;
	font-weight: bolder;
	z-index: 999;
	position: absolute;
	transform: translateY(-50%);
	${({ position }) => (position === "left" ? 'left: 10px' : 'right: 10px' )};
`
const ArrowLeft = styled(TbChevronLeft)`
	width: 140px;
	display: inline-block;
`
const ArrowRight = styled(TbChevronRight)`
	width: 140px;
	display: inline-block;
`

export default function Carousel({ pictures }) {
 const [idImage, setIdImage] = useState(0)

 const styleImage = {
  transition: `transform 1s ease-in-out`,
  transform: `translateX(-${idImage * 100}%)`,
 }

 function switchImage(position, target) {
	 if (target.getAttribute('id') === 'previous') {
   setIdImage(position - 1)
   position === 0 ? setIdImage(pictures.length - 1) : setIdImage(position - 1)
  } else {
   setIdImage(position + 1)
   position === pictures.length - 1 ? setIdImage(0) : setIdImage(position + 1)
  }
 }

 return (
  <CarouselStyle>

		{pictures.length > 1 && (
			<BtnStyle position={"left"} id="previous" theme="round"
				onClick={(event) => switchImage(idImage, event.target.parentElement)}>
				<ArrowLeft/>
			</BtnStyle>
		)}

   <FigureStyle style={styleImage} >
    {pictures.map((image, index) => (
     <Image key={index} url={image} alt={'image du logement'} size="full"/>
    ))}
   </FigureStyle>

	 <NbImgStyle>{idImage + 1} / {pictures.length}</NbImgStyle> 
	 
	 {pictures.length > 1 && (
		<BtnStyle  id="next" theme="round"  onClick={(event) => 
			switchImage(idImage, event.target.parentElement)}>
    	<ArrowRight/>
   	</BtnStyle>
	 )}
  </CarouselStyle>
 )
}
