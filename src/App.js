import './App.css';
import CritoOne from './components/Crito1Section/CritoOne';
import CritoTwo from './components/Crito2Section/CritoTwo';
import CritoThree from './components/Crito3Section/CritoThree';
import CritoFour from './components/Crito4Section/CritoFour';
import CritoFive from './components/Crito5Section/CritoFive';
import CritoSix from './components/Crito6Section/CritoSix';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <CritoOne />
      <CritoTwo />
      <CritoThree />
      <CritoFour />
      <CritoFive />
      <CritoSix />
    </div>
  );
}

export default App;
