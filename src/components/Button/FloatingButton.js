export default function FloatingButton({children,icon}){
    return <div>
       <button className="floating-btn" >
       <i className={icon}></i>
       {children}
       </button>
    </div>
}