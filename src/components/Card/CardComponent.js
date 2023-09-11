import Header from "../Header";
import SideBar from "../sidebar";
import Card from "./Card";
import "./Card.css";
import CardImage from "./CardImage";

export default function CardComponent() {
  return (
    <div>
      <Header />
      <div className="documentation-main">
        <div>
          <SideBar />
        </div>
        <div className="documentation">
          <h1 className="documentation-heading">Card</h1>
          <div>
            <p className="documentation-text">
              Card is a flexible component used to group and display content in
              a clear and concise format
            </p>
            <div className="badge-main">
              <Card variant={"horizontal"}>
                <div className="badge-card-main">
                  <h1 className="badge-card-heading">Title</h1>
                  <p>This is a card with dismiss button</p>
                  <i className="fas fa-times"></i>
                </div>
              </Card>
              <Card variant={"horizontal"}>
                <div className="badge-card-main">
                  <h1 className="badge-card-heading">Title</h1>
                  <p>This is a card with badge</p>
                  <span className="badge">New</span>
                </div>
              </Card>
              <Card variant={"horizontal"}>
                <div className="text-card">
                  <p>This is a card with text only</p>
                </div>
              </Card>
            </div>
            <pre>
              <div className="code-block">
                {`
 <Card variant={"horizontal"}>
 <div className="badge-card-main">
   <h1 className="badge-card-heading">Title</h1>
   <p>This is the card with dismiss button</p>
   <i className="fas fa-times"></i>
 </div>
</Card>
 
 <Card variant={"horizontal"}>
 <div className="badge-card-main">
   <h1 className="badge-card-heading">Title</h1>
   <p>This is the card with badge</p>
   <span className="badge">New</span>
 </div>
</Card>

<Card variant={"horizontal"}>
 <div className="text-card">
 <p>This is a card with text only</p>
 </div>   
</Card>
`}
              </div>
            </pre>
            <h4 className="documentation-sub-heading">
              Vertical card with overlay text
            </h4>
            <div className="card-image">
              <CardImage
                imgSrc="https://cms.qz.com/wp-content/uploads/2014/10/exterior_4.jpg?quality=75&strip=all&w=450&h=644&crop=1"
                imgHeight="400px"
                imgWidth="300px"
              >
                <h1 className="image-text-heading">Overlay text</h1>
              </CardImage>
            </div>
            <pre>
              <div className="code-block">
                {`
    <CardImage imgSrc="https://cms.qz.com/wp-content/uploads/2014/10/exterior_4.jpg?quality=75&strip=all&w=450&h=644&crop=1"
       imgHeight="400px" imgWidth="300px">
       <h1 className="image-text-heading">Overlay text</h1>
    </CardImage>
                `}
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
