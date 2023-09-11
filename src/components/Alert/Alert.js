import "./Alert.css";

export default function Alert({ status }) {
  const checkStatus = () => {
    switch (status) {
      case "success":
        return {
          backgroundColor: "#C6FFC1",
          icon: "fas fa-check",
          message: "Green often indicates something successful or positive.",
        };
      case "warning":
        return {
          backgroundColor: "#FEEFB3",
          icon: "fas fa-exclamation-triangle",
          message: "Yellow often indicates a warning that might need attention",
        };
      case "info":
        return {
          backgroundColor: "#BBEEFF ",
          icon: "fas fa-info-circle",
          message:
            "Blue often indicates a neutral informative change or action.",
        };
      case "error":
        return {
          backgroundColor: "#FFBABA",
          icon: "fas fa-times-circle",
          message: " Red often indicates a dangerous or negative situation",
        };
      default:
        return {
          backgroundColor: "transparent",
          icon: "",
          message: "",
        };
    }
  };

  const { backgroundColor: bgColor, icon, message } = checkStatus();

  return (
    <div className="alert" style={{ backgroundColor: bgColor }}>
      {icon && (
        <div>
          <i className={icon}></i> {message}
        </div>
      )}
    </div>
  );
}
