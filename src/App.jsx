import './App.css';
import Header from './components/Header/header';
import Supplies from './components/Main/Supplies/supplies';
import Benefits from './components/Main/Benefits/benefits';
import Manufacturers from './components/Main/Manufacturers/manufacturers';
import WorkScheme from './components/Main/WorkScheme/workScheme';
import Faq from './components/Main/Faq/faq';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="page">
      <Header />
      <div className="banner">
        <Supplies />
      </div>
      <Benefits />
      <Manufacturers />
      <WorkScheme />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
