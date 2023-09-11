import Header from "../Header";
import SideBar from "../sidebar";
import Heading from "./Heading";

export default function HeadingComponent() {
  return (
    <div>
      <Header />

      <div className="documentation-main">
        <div>
          <SideBar />
        </div>
        <div className="documentation">
          <h1 className="documentation-heading">Heading</h1>
          <div>
            <p className="documentation-text">
              Heading is used to render symantic HTML heading elements.
            </p>

            <Heading size="h1">This is h1 heading</Heading>
            <Heading size="h2">This is h2 heading</Heading>
            <Heading size="h3">This is h3 heading</Heading>
            <Heading size="h4">This is h4 heading</Heading>
            <Heading size="h5">This is h5 heading</Heading>
            <Heading size="h6">This is h6 heading</Heading>
            <h4 className="documentation-sub-heading">
              How To Use Heading Component
            </h4>
            <pre>
              <div className="new-code-block">
                {`          
   <Heading size="h1">This is h1 heading</Heading>
   <Heading size="h2">This is h2 heading</Heading>
   <Heading size="h3">This is h3 heading</Heading>
   <Heading size="h4">This is h4 heading</Heading>
   <Heading size="h5">This is h5 heading</Heading>
   <Heading size="h6">This is h6 heading</Heading>
        
`}
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
