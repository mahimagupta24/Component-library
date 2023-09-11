export default function AlignmentText({ alignedText, children }) {
  const textToBeAligned = () => {
    switch (alignedText) {
      case "left":
        return {
          textAlign: "left",
        };
      case "right":
        return {
          textAlign: "right",
        };
      case "center":
        return {
          textAlign: "center",
        };
      default:
        return {
          textAlign: "left",
        };
    }
  };
  return (
    <div className="aligned-text">
      <p style={{ textAlign: textToBeAligned() }}>{children}</p>
    </div>
  );
}
