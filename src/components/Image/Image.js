export default function Image({ src, name }) {
  const checkImage = () => {
    switch (name) {
      case "round-image":
        return 50;
      case "responsive-image":
        return 0;
      default:
        return 100;
    }
  };
  return (
    <div>
      <img src={src} name={name} style={{ borderRadius: `${checkImage()}%`,height:"200px",width:"200px" }} />
    </div>
  );
}
