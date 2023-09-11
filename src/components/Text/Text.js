export default function Text({ size, children }) {
  const checkSize = () => {
    switch (size) {
      case "6xl":
        return 40;
      case "5xl":
        return 36;
      case "4xl":
        return 32;
      case "3xl":
        return 30;
      case "2xl":
        return 28;
      case "xl":
        return 24;
      case "sm":
        return 20;
      default:
        return 20;
    }
  };
  return (
    <div>
      <p style={{ fontSize: `${checkSize()}px` }}>{children}</p>
    </div>
  );
}
