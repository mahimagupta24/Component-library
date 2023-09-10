export default  function BadgeIcon({icon,children}){
    return<div>
     <i className={icon}></i>
     {children}
    </div>
}