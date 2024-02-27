import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Pickoftheweek from './components/Pickoftheweek';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (   
    <>
<Appbar/>  
<Banner/>  
<Menu/>
<Pickoftheweek/>
<Contact/>
<Footer/>
</>
);
}

export default App;
