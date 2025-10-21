export interface ButtonProps {
  onClick?: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
