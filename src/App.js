import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Components from "./pages/Components";

function App() {
  return (
    <div className="App">
     <h1>NEOG'S COMPONENT LIBRARY</h1>
     <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/components"element={<Components/>}/>
     </Routes>
     {/* <Link>
     </Link> */}
    </div>
  );
}

export default App;
