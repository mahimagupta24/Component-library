import Header from "../Header";
import SideBar from "../sidebar";
import "./Avatar.css";
import ImageAvatar from "./ImageAvatar";

export default function Avatar() {
  return (
    <div>
      <Header />
      <div className="documentation-main">
        <div>
          <SideBar />
        </div>
        <div className="documentation">
          <h1 className="documentation-heading">Avatars</h1>
          <div>
            <p className="documentation-text">
              Avatar is a way to add images that can be used generally as
              profile pictures.
            </p>
            <div className="avatar">
              <ImageAvatar
                size="2xs"
                src="https://tse1.mm.bing.net/th?id=OIP.TMzkc9cw2vD4tChiihDaWwDhEs&pid=Api&P=0&h=180"
                name="user"
              />
              <ImageAvatar
                size="sm"
                src="https://tse3.mm.bing.net/th?id=OIP.xXHQ5dk4qJH74WMGNezDjwHaHa&pid=Api&P=0&h=180"
                name="user"
              />
              <ImageAvatar
                size="lg"
                src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg"
                name="user"
              />
            </div>
            <h4 className="documentation-sub-heading">
              How To Use Avatar Component
            </h4>
            <pre>
              <div className="code-block">
                {`
<ImageAvatar size="2xs"src="https://tse1.mm.bing.net/th?id=OIP.TMzkc9cw2vD4tChiihDaWwDhEs&pid=Api&P=0&h=180"name="user"/>

<ImageAvatar size="sm"src="https://tse3.mm.bing.net/th?id=OIP.xXHQ5dk4qJH74WMGNezDjwHaHa&pid=Api&P=0&h=180"name="user"/>

<ImageAvatar size="lg"src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg"name="user"/>
`}
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
