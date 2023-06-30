import Header from "../organisms/header"
import Footer from "../organisms/footer"
import Accordion from "../molecules/accordion"
import aPropos from "../../data/apropos.json"
import Banner from "../molecules/banner"
import ImgBanner from "../../assets/img/banner/banner-apropos.png"

function Apropos() {
  return (
		<>
		<main className='container'>
			<Header />
			<section>
				<Banner background={ImgBanner} />
			</section>
			<div>
			{
          aPropos.map(({title, content, id}) => (
						<div key={id} className="mb-3">
							<Accordion className="mx-auto" title={title} children={content}/>
						</div>
          ))
        }
			</div>
		</main>
	<Footer />
	</>
	)
}

export default Apropos
