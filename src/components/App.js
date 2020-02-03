import React from 'react';

//assets
import '../assets/css/components/App.css';

//component
import Header from "./global/Header";
import Content from "./global/Content";

const App = ({children}) => {
  return (
    <div className="App">
        <Header/>
        <Content body={children}/>
    </div>
  );
}

export default App;
