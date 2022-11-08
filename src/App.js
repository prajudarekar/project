import React from "react";
import { ReactDOM } from "react";
import {BrowserRouter as Router,Link,Routes , Route} from "react-router-dom";
import About from "./Componnet/About";
import Contact from "./Componnet/Contact";
import NavLink from "./NormalCompo/NavLink";
function App(){

  return(
    <div>
<Router>
  <NavLink/>
 
<Routes>
<Route path="" element={App}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>

</Router>
    </div>
  )
}

export default App;