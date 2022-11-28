import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Approach } from './components/Approach';
// import { Clients } from './components/Clients';
import { Services } from './components/Services';
import { Suppliers } from './components/Suppliers';
import { Contacts } from './components/Contacts';

import './styles/style.scss'


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Approach />
      <div className="divider"></div>
      <About />
      <div className="divider divider_large"></div>
      <Services />
      <div className="divider"></div>
      <Suppliers />
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
