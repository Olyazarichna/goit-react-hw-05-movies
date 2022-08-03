import css from './Button.module.css';
import { useNavigate } from 'react-router-dom';

export const Button = () => {
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button onClick={goBack} className={css.btn}>
        Go Back
      </button>
    </>
  );
};
export default Button;
