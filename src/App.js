import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import Card from "./components/Card/Card";
import Heading from "./components/Heading/Heading";
import Text from "./components/Text/Text";
import Image from "./components/Image/Image";
import Avatar from "./components/Avatar/Avatar";
import AlertComponent from "./components/Alert/AlertComponent";
import BadgeComponent from "./components/Badge/BadgeComponent";
import ButtonComponent from "./components/Button/ButtonComponent";

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
        <Route path="/heading" element={<Heading />} />
        <Route path="/image" element={<Image />} />
        <Route path="/text" element={<Text />} />
      </Routes>
      {/* <Link>
     </Link> */}
    </div>
  );
}

export default App;
