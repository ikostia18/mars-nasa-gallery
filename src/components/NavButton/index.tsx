import { Link } from 'react-router-dom';
import { BUTTON_FONT_SIZE } from '../../utils/constants';
import './style.css';

interface INavButton {
  title: string;
  to: string;
  fontSize?: number;
}

export const NavButton: React.FC<INavButton> = (props: INavButton) => {
  const style: React.CSSProperties = {
    fontSize: props.fontSize ?? BUTTON_FONT_SIZE,
  };

  return (
    <>
      <Link className="button" style={style} to={props.to}>
        {props.title}
      </Link>
    </>
  );
};
