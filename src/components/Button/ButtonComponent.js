import Header from "../Header";
import SideBar from "../sidebar";
import Button from "./Button";
import "./Button.css";
import IconButton from "./ButtonIcon";
import LinkButton from "./ButtonLink";
import FloatingButton from "./FloatingButton";

export default function ButtonComponent() {
  return (
    <div>
      <Header />
      <div className="documentation-main">
        <div>
          <SideBar />
        </div>
        <div className="documentation">
          <h1 className="documentation-heading">Buttons</h1>
          <div>
            <p className="documentation-text">
              A button allows users to trigger actions or events when clicked.
            </p>
            <div className="buttons">
              <Button bgColor="#52A14F">Primary Button</Button>
              <Button bgColor="white">Outline Button</Button>
            </div>
            <pre>
              <div className="new-code-block">
                {`
    <Button bgColor="#52A14F">Primary Button</Button>
    
    <Button bgColor="white">Outline Button</Button>
`}
              </div>
            </pre>
            <hr />

            <h3>Link Button</h3>
            <div className="link-btn">
              <LinkButton btnLink="#">Link Button</LinkButton>
              <LinkButton btnLink="@">Link Button</LinkButton>
            </div>
            <pre>
              <div className="new-code-block">
                {`
    <LinkButton btnLink="#">Link Button</LinkButton>
    
    <LinkButton btnLink="@">Link Button</LinkButton>
`}
              </div>
            </pre>
            <h3>Icon Buttons</h3>
            <div className="buttons">
             <IconButton icon="fas fa-search"/> 
             <IconButton icon = "fas fa-shopping-cart"/>
             <IconButton icon = "fas fa-trash"/>
            </div>
            <pre>
              <div className="new-code-block">
                {`
     <IconButton icon="fas fa-search"/> 
     
     <IconButton icon = "fas fa-shopping-cart"/>
     
     <IconButton icon = "fas fa-trash"/>
`}
              </div>
            </pre>
            <h3>Floating Buttons</h3>
            <div className="buttons">
             <FloatingButton icon ="fas fa-plus"/>
             <FloatingButton icon= "fas fa-edit"/>
            </div>
            <pre>
              <div className="new-code-block">
                {`
   <FloatingButton icon ="fas fa-plus"/>
  
   <FloatingButton icon= "fas fa-edit"/>
`}
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
