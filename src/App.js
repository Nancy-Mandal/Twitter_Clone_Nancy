import React from 'react'
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from './Widgets';
import Post from './Post'

function App() {
  return ( //jsx
    <div className="app"> 
                    <div onClick={() => console.log("div")}>

</div>
      <Sidebar />
      {/*Feed section*/}
      <Feed />
      {/*widgets*/}

      
      <Widgets />
      
    </div>
  );
}

export default App;
