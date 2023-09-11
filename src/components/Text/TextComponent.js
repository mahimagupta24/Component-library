
import Header from "../Header";
import SideBar from "../sidebar";

export default function TextComponent() {
  return (
    <div>
      <Header />

      <div className="documentation-main">
        <div>
          <SideBar />
        </div>
        <div className="documentation">
          <h1 className="documentation-heading">Text</h1>
          <div>
            <p className="documentation-text">
              Text is used to render text and paragraphs within an interface.
            </p>

            
            <h4 className="documentation-sub-heading">
              How To Use Text Component
            </h4>
            <pre>
              <div className="new-code-block">
                {`          
  
        
`}
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
