import Menu from './Components/Menu';
import { Footer, PaymentForm, OurStores, ContactInfo } from './Components/Footer';
import { BannerWelcome } from './Components/Banner';
import Routes from './Routes';

import { BrowserRouter } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header>
          <Menu />
        </header>

        <main>
          <Container fluid>
            <BannerWelcome />
            <Routes />
          </Container>
        </main>

        <footer>
          <PaymentForm />
          <OurStores />
          <ContactInfo />
          <Footer />
        </footer>

      </div>
    </BrowserRouter>

  );
}

export default App;
	