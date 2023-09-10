import "./Badge.css";

export default function BadgeAvatar({ src, size, children }) {
  return (
    <div className="image">
      <img
        src={src}
        height={`${size}px`}
        width={`${size}px`}
        style={{ borderRadius: "60%" }}
      />
      {children}
    </div>
  );
}
