import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Services from './Components/Pages/Services';
import Marketing from './Components/Pages/Marketing';
import ContactUs from './Components/Pages/ContactUs';
import Product from './Components/Pages/Product';
import SignUp from './Components/Pages/SignUp';
import Consulting from './Components/Pages/Consulting';
import CricketPage from './Components/Pages/CricketPage';
import Footer from './Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className='adjuster'/>
      <Switch>
        <Route exact path="/" component={CricketPage}/>
          
        <Route path="/services">
          <Services/>
          <Product/>
          <ContactUs/>
        </Route>
        <Route path="/products">
          <Product/>
          <ContactUs/>
        </Route>
        <Route path="/contact-us">
          <ContactUs/>
        </Route>
        <Route path="/sign-up">
          <SignUp/>
        </Route>
        <Route path="/marketing">
          <Marketing/>
        </Route>
        <Route path="/consulting">
          <Consulting/>
        </Route>
      </Switch>  
    </Router> 
    <Footer/>
    </> 
  );
}

export default App;

