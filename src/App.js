import './App.css';
import NavBar from './components/Navbar'
import MarketingDigital from './components/MarketingDigital'
import Posters from './components/Posters'
import Featured_products_component from './components/Featured_products_component'
import Reviews_Section from './components/Reviews_Section'
function App() {
  return (
  <main className="App ">
      <NavBar />
      <MarketingDigital />
      <Posters />
      <Featured_products_component />
      <Reviews_Section/>
      
  </main>

  );
}

export default App;
