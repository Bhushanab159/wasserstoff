import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Design from './Design/Design';
import WorldMap from './Components/WorldMap/WorldMap';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />

      <Design />
      <WorldMap />

    </div>
  );
}

export default App;
