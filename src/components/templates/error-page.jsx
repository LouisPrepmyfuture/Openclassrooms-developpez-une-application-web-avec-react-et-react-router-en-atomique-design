import { useRouteError } from "react-router-dom";
import Footer from "../organisms/footer";
export default function ErrorPage() {
  const error = useRouteError();


  return (
		<>
    <main id="error-page">

			<svg width="582" height="210" viewBox="0 0 582 210" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M187.043 163.664H154.211V206H108.707V163.664H0.131125V132.272L95.1711 4.39999H144.131L56.0031 125.648H110.147V87.92H154.211V125.648H187.043V163.664ZM287.398 209.456C270.694 209.456 255.814 205.328 242.758 197.072C229.702 188.816 219.43 176.912 211.942 161.36C204.646 145.616 200.998 126.896 200.998 105.2C200.998 83.504 204.646 64.88 211.942 49.328C219.43 33.584 229.702 21.584 242.758 13.328C255.814 5.07199 270.694 0.943996 287.398 0.943996C304.102 0.943996 318.982 5.07199 332.038 13.328C345.094 21.584 355.27 33.584 362.566 49.328C370.054 64.88 373.798 83.504 373.798 105.2C373.798 126.896 370.054 145.616 362.566 161.36C355.27 176.912 345.094 188.816 332.038 197.072C318.982 205.328 304.102 209.456 287.398 209.456ZM287.398 170C299.686 170 309.286 164.72 316.198 154.16C323.302 143.6 326.854 127.28 326.854 105.2C326.854 83.12 323.302 66.8 316.198 56.24C309.286 45.68 299.686 40.4 287.398 40.4C275.302 40.4 265.702 45.68 258.598 56.24C251.686 66.8 248.23 83.12 248.23 105.2C248.23 127.28 251.686 143.6 258.598 154.16C265.702 164.72 275.302 170 287.398 170ZM581.074 163.664H548.242V206H502.738V163.664H394.162V132.272L489.202 4.39999H538.162L450.034 125.648H504.178V87.92H548.242V125.648H581.074V163.664Z" fill="#FF6060"/>
			</svg>

      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </main>
		<Footer />
	</>
  );

}