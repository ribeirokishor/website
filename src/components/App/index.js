import MetaTags from 'react-meta-tags';
import './style.scss';
import Header from '../Header';
import Nav from '../Nav';
import About from '../About';
import Experience from '../Experience';
import Contact from '../Contact';
import Footer from '../Footer';
import { siteMetadata } from '../../config.json';

function App() {
  return (
    <main>
      <MetaTags>
        <title>{ siteMetadata.title }</title>
        <meta name="description" content={ siteMetadata.description } />
        <meta property="og:title" content={ siteMetadata.title } />
        <meta property="og:image" content={ siteMetadata.siteUrl + siteMetadata.image } />
      </MetaTags>
      <Nav />
      <Header id="home" />
      <About id="about" />
      <Experience id="jobs" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}

export default App;
