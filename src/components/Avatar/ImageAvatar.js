import "./Avatar.css";

export default function ImageAvatar ({ src, size, name })  {
  const findSize = () => {
    const picSize = size.toLowerCase();
    switch (picSize) {
      case "2xs":
        return 60;

      case "sm":
        return 80;

      case "lg":
        return 100;

      default:
        return 60;
    }
  };
  return (
    <img
      className="image-avatar"
      src={src}
      width={`${findSize(size)}px`}
      height={`${findSize(size)}px`}
      alt={name}
    />
  );
};

