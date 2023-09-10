import Header from "../Header";
import SideBar from "../sidebar";
import "./Alert.css";

export default function Alert() {
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
            
            <div className="success-alert">
              {" "}
              <i class="fas fa-check"></i> Green often indicates something successful or positive.
            </div>
            <div class="warning-alert"> 
        <i class="fas fa-exclamation-triangle"></i> Yellow often indicates a warning that might need attention.
    </div>
            <div class="error-alert"> 
        <i class="fas fa-times-circle"></i> Red often indicates a dangerous or negative situation.
    </div>
   
            <div class="info-alert"> 
        <i class="fas fa-info-circle"></i> Blue often indicates a neutral informative change or action.
    </div>
    <h4 className="documentation-sub-heading">How To Use Alert Component</h4>
            <pre>
                <div className="code-block">
              {`<div class="success-alert"> Green often indicates something successful or positive.
     <i class="fas fa-check"></i> 
</div>

<div class="warning-alert"> 
        <i class="fas fa-exclamation-triangle"></i> Yellow often indicates a warning that might need attention.
    </div>

<div class="error-alert"> 
       <i class="fas fa-times-circle"></i> Red often indicates a dangerous or negative situation.
</div>
<div class="info-alert"> 
        <i class="fas fa-info-circle"></i> Blue often indicates a neutral informative change or action.
</div>
`}
           </div>
            </pre>
          </div>
        </div>
      </div>
      </div>
  );
}
