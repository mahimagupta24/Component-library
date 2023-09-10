import "./Button.css"

export default function Button({children,bgColor}){
    return<div>
        <button className="button-main" style={{backgroundColor:`${bgColor}`}}>{children}</button>
    </div>
}