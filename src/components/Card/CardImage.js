export default function CardImage({children,imgSrc,position="vertical",imgWidth,imgHeight}){
    return<div className={`${position}-card`}>
        <img src={imgSrc} alt="name"height={`${imgHeight}px`} width={`${imgWidth}px`}/>
        {children}
    </div>
}