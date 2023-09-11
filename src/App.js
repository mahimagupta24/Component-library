import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import Card from "./components/Card/Card";
import Avatar from "./components/Avatar/Avatar";
import AlertComponent from "./components/Alert/AlertComponent";
import BadgeComponent from "./components/Badge/BadgeComponent";
import ButtonComponent from "./components/Button/ButtonComponent";
import HeadingComponent from "./components/Heading/HeadingComponent";
import TextComponent from "./components/Text/TextComponent";
import ImageComponent from "./components/Image/ImageComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/alert" element={<AlertComponent />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/badge" element={<BadgeComponent />} />
        <Route path="/button" element={<ButtonComponent />} />
        <Route path="/card" element={<Card />} />
        <Route path="/heading" element={<HeadingComponent />} />
        <Route path="/image" element={<ImageComponent/>} />
        <Route path="/text" element={<TextComponent />} />
      </Routes>
      {/* <Link>
     </Link> */}
    </div>
  );
}

export default App;
