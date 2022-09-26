import "./button.scss";

const Button = ({ onClick, children, className }) => {
  return (
    <button className={className} type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
