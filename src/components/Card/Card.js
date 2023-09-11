export default function Card({ children, variant = "horizontal"}) {
  return (
    <div className={`${variant}-card`}> 
      {children}
    </div>
  );
}
