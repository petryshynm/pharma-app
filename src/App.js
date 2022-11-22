import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Approach } from './components/Approach';
import { Clients } from './components/Clients';

import './styles/style.scss'


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <div className="divider"></div>
      <Approach />
      <div className="divider divider_large"></div>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
