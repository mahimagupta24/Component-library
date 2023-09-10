export default function IconButton({icon,children}){
    return<div>
     <button className="icon-button-main">
        <i className={icon}></i>
        {children}
        </button>
    </div>
}