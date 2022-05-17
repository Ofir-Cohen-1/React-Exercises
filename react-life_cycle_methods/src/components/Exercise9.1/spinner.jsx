import "./style4.css";

export const Spinner1 = () => {
  return (
    <div className="bouncing-dots">
      <div className="dot-1 bounce dot-bounce"></div>
      <div className="dot-2 bounce dot-bounce"></div>
      <div className="dot-3 bounce dot-bounce"></div>
    </div>
  );
};

export const Spinner2 = () => {
  return <div className="spinner-tail"></div>;
};

export const Spinner3 = () => {
  return <div className="full-spinner"></div>;
};
