import Header from "../Header";
import SideBar from "../sidebar";
import Image from "./Image";
import"./Image.css"

export default function ImageComponent() {
  return (
    <div>
      <Header />
      <div className="documentation-main">
        <div>
          <SideBar />
        </div>
        <div className="documentation">
          <h1 className="documentation-heading">Images</h1>
          <div>
            <p className="documentation-text">
              Images are used for visual information
            </p>
            <div className="image-main">
              <Image
                src="https://tse3.mm.bing.net/th?id=OIP.xXHQ5dk4qJH74WMGNezDjwHaHa&pid=Api&P=0&h=180"
                name="round-image"
              />
               <Image src="http://eskipaper.com/images/scenery-6.jpg"
                name="responsive-image"
              />
            </div>
            <h4 className="documentation-sub-heading">
              How To Use Image Component
            </h4>
            <pre>
              <div className="new-code-block">
                {`
 <Image src="https://tse3.mm.bing.net/th?id=OIP.xXHQ5dk4qJH74WMGNezDjwHaHa&pid=Api&P=0&h=180"
 name="round-image"
/>
 
<Image src="http://eskipaper.com/images/scenery-6.jpg" name="responsive-image"/>
`}
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
