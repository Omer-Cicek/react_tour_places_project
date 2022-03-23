import './App.css';
import Header from './components/header/Header';
import Cards from './components/cards/Card';
import Navbar from './components/navbar/Navbar';
import data from './helper/data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards data={data} />
    </div>
  );
}

export default App;
