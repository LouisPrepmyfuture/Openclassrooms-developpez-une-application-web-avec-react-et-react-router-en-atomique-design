import { React } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Header from '../organisms/header'
import datas from '../../data/data.json'
import Title from '../atoms/title'
import Avatar from '../molecules/avatar'
import Label from '../atoms/label'
import RatingStars from '../atoms/ratingStar'
import Tag from '../atoms/tag'
import Accordion from '../molecules/collapse'
import Footer from '../organisms/footer'
import styled from 'styled-components'
import Carousel from '../organisms/gallery'

const TagStyle = styled(Tag)`
 margin-right: 20px;
`
const ContentTag = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`
const AccordionLog = styled(Accordion)``

const Wrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-column-gap: 5%;
 grid-row-gap: 26px;
 padding-bottom: 50px;
 @media (max-width: 904px) {
  grid-template-columns: 1fr;
  .center {
   display: flex;
   justify-content: center;
   width: 100%;
   margin: 0 auto;
  }
 }
`
const BoxAvatare = styled.div`
 justify-self: end;
 display: flex;
 flex-direction: column;
 @media (max-width: 904px) {
  flex-direction: row-reverse;
  justify-self: start;
  align-items: center;
	width: 100%;
	justify-content: end;
 }
`

function Logement() {
 const { id } = useParams()
 const [logement] = datas.filter((data) => data.id === id)

 if (logement === undefined) {
  return <Navigate to="/erreur-logement" />
 }

 return (
  <>
   <main className="container">
    <Header />
    <div>
     <Carousel pictures={logement.pictures} />
    </div>
    <Wrapper>
     <div>
      <Title children={logement.title} />
      <Label children={logement.location} />
      <ContentTag>
       {logement.tags.map((tag) => (
        <TagStyle key={tag} children={tag} />
       ))}
      </ContentTag>
     </div>
     <BoxAvatare>
      <Avatar
       url={logement.host.picture}
       alt={logement.host.name}
       children={logement.host.name}
      />
      <RatingStars rating={parseInt(logement.rating)} />
     </BoxAvatare>
     <div className="center">
      <AccordionLog
       size="small"
       title="Description"
       children={logement.description}
       open
      />
     </div>
     <div className="center">
      <AccordionLog
       size="small"
       title="Équipement"
       children={logement.equipments}
       open
      />
     </div>
    </Wrapper>
   </main>
   <Footer />
  </>
 )
}

export default Logement
