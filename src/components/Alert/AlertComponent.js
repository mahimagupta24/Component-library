import Header from "../Header";
import SideBar from "../sidebar";
import Alert from "./Alert";
import "./Alert.css";

export default function AlertComponent() {
  return (
    <div>
      <Header />

      <div className="documentation-main">
        <div>
          <SideBar />
        </div>
        <div className="documentation">
          <h1 className="documentation-heading">Alerts</h1>
          <div>
            <p className="documentation-text">
              Alert messages can be used to notify the user about something
              special: danger, success, information or warning.
            </p>
            <Alert status="success"></Alert>
            <Alert status="warning"></Alert>
            <Alert status="error"></Alert>
            <Alert status="info"></Alert>

            <h4 className="documentation-sub-heading">
              How To Use Alert Component
            </h4>
            <pre >
              <div className="code-block">
                {`          <Alert status="success"/>
          <Alert status="warning"/>
          <Alert status="error"/>
          <Alert status="info"/>
              
`}
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
