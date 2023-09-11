export default function Heading({ size,children }) {
  const checkSize = () => {
    switch (size) {
      case "h1":
        return 40;
      case "h2":
        return 36;
      case "h3":
        return 32;
      case "h4":
        return 24;
      case "h5":
        return 20;
      case "h6":
        return 18;
      default:
        return 12;
    }
  };
  return <div>
    <h4 style={{fontSize:`${checkSize()}px`}}>
        {children}
    </h4>
  </div>;
}
