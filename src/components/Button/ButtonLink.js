export default function LinkButton({children,btnLink}){
    return<div>
<a className="btn-main"href={btnLink}>{children}</a>
    </div>
}