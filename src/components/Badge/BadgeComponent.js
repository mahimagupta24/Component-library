import Header from "../Header";
import SideBar from "../sidebar";
import BadgeAvatar from "./BadgeAvatar";
import "./Badge.css";
import BadgeIcon from "./BadgeIcon";

export default function BadgeComponent() {
  return (
    <div>
      <Header />
      <div className="documentation-main">
        <div>
          <SideBar />
        </div>
        <div className="documentation">
          <h1 className="documentation-heading">Badge</h1>
          <div>
            <p className="documentation-text">
              Badges can be used for an additional marker for avatar, icon or
              any other component
            </p>
            <h3>Avatar Badges</h3>
            <div className="badge-avatar">
              <BadgeAvatar
                src="https://tse1.mm.bing.net/th?id=OIP.TMzkc9cw2vD4tChiihDaWwDhEs&pid=Api&P=0&h=180"
                size="80"
              >
                <span className="badge-left">5</span>
              </BadgeAvatar>
              <BadgeAvatar
                src="https://tse3.mm.bing.net/th?id=OIP.xXHQ5dk4qJH74WMGNezDjwHaHa&pid=Api&P=0&h=180"
                size="80"
              >
                <span className="badge-left">8</span>
              </BadgeAvatar>
              <BadgeAvatar
                src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg"
                size="80"
              >
                <span className="badge-left">9</span>
              </BadgeAvatar>
            </div>
            <h3>Icon Badges</h3>
            <div className="badge-icon">
                <BadgeIcon icon=" fas fa-bell"><span className="badge-right">4</span></BadgeIcon>
                <BadgeIcon icon=" fas fa-home"><span className="badge-right">8</span></BadgeIcon>
                <BadgeIcon icon=" fas fa-heart"><span className="badge-right">7</span></BadgeIcon>
            </div>
            <h4 className="documentation-sub-heading">
              How To Use Badge Component
            </h4>
            <pre>
              <div className="code-block">
                {`
   <BadgeAvatar src="https://tse1.mm.bing.net/th?id=OIP.TMzkc9cw2vD4tChiihDaWwDhEs&pid=Api&P=0&h=180" size="80">
      <span className="badge">5</span>
   </BadgeAvatar>
        
   <BadgeAvatar src="https://tse3.mm.bing.net/th?id=OIP.xXHQ5dk4qJH74WMGNezDjwHaHa&pid=Api&P=0&h=180" size="80">
      <span className="badge">8</span>
   </BadgeAvatar>
                  
   <BadgeAvatar src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg" size="80">
      <span className="badge">9</span>
   </BadgeAvatar>

   <BadgeIcon icon=" fas fa-bell"><span className="badge-right">4</span></BadgeIcon>
   
   <BadgeIcon icon=" fas fa-home"><span className="badge-right">8</span></BadgeIcon>
                
   <BadgeIcon icon=" fas fa-heart"><span className="badge-right">7</span></BadgeIcon>            
                `}
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
