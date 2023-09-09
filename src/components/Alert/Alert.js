import Header from "../Header";
import SideBar from "../sidebar";
import "./Alert.css"
export default function Alert(){
    return <div>
        <Header/>
        
            <div className="alert-main">
            <div>
        <SideBar/>
        </div>
        <div className="documentation">
            <h1 className="documentation-heading">Alerts</h1>
            <div>
            <p className="documentation-text">Alert messages can be used to notify the user about something special: danger, success, information or warning.</p>
            </div>
        </div>
    </div>
    </div>
}