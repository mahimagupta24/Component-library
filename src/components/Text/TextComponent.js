
import Header from "../Header";
import SideBar from "../sidebar";
import Text from "./Text";

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
           <Text size="6xl">This is a component library</Text>
           <Text size="5xl">This is a component library</Text>
           <Text size="4xl">This is a component library</Text>
           <Text size="3xl">This is a component library</Text>
           <Text size="2xl">This is a component library</Text>
           <Text size="xl">This is a component library</Text>
           <Text size="sm">This is a component library</Text>
            <h4 className="documentation-sub-heading">
              How To Use Text Component
            </h4>
            <pre>
              <div className="new-code-block">
                {`          
   <Text size="6xl">This is a component library</Text>
   <Text size="5xl">This is a component library</Text>
   <Text size="4xl">This is a component library</Text>
   <Text size="3xl">This is a component library</Text>
   <Text size="2xl">This is a component library</Text>
   <Text size="xl">This is a component library</Text>
   <Text size="sm">This is a component library</Text>
        
`}
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
