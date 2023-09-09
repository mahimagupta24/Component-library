import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Components from "./pages/Components";
import Alert from "./components/Alert/Alert";
import Avatar from "./components/Avatar/Avatar";
import Badge from "./components/Badge/Badge";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Heading from "./components/Heading/Heading";
import Text from "./components/Text/Text";
import Image from "./components/Image/Image";

function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/components"element={<Components/>}/>
      <Route path="/alert"element={<Alert/>}/>
      <Route path="/avatar"element={<Avatar/>}/>
      <Route path="/badge"element={<Badge/>}/>
      <Route path="/button"element={<Button/>}/>
      <Route path="/card"element={<Card/>}/>
      <Route path="/heading"element={<Heading/>}/>
      <Route path="/image"element={<Image/>}/>
      <Route path="/text"element={<Text/>}/>
     </Routes>
     {/* <Link>
     </Link> */}
    </div>
  );
}

export default App;
