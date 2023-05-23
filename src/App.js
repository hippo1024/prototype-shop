// App.js


import Footer from "./components/Footer";
import Header from "./components/Header";
import Orders from "./components/Orders";
import Prototypes from "./components/Prototypes";
import AppStateProvider from "./providers/AppStateProvider";

import { BrowserRouter, Routes, Link } from 'react-router-dom';
import home from './components/Home';
import chkout from './components/Checkout';


function App() {
  return (
  
<AppStateProvider>
      <BrowserRouter>
   
    <Routes path="/" exact component={home} />
    <Routes path="/checkout" exact component={chkout} />
    <Routes path="/Prototypes" exact component={Prototypes} />
    </BrowserRouter>
    
    <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    

      
    </AppStateProvider>

  );
}

export default App;

