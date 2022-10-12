import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* Created By: Templificaton || Satyam Mishra. */}
      {/* You can use this template for Course Selling site. This is best template for Course Selling websites but also 
      you can use this template for anything.
      This template can be sold for $50 - $100 but we are providing this template for free! */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
