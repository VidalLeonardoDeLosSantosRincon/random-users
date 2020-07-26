import React from 'react';

//assets
import '../assets/css/components/App.css';

//component
import Header from "./global/Header";
import Content from "./global/Content";
import Footer from "./global/Footer";

const App = ({children}) => {
  return (
    <div className="App">
        <Header/>
        <Content body={children}/>
        <Footer/>
    </div>
  );
}

export default App;
