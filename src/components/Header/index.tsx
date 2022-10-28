import { HEADER_FONT_SIZE } from '../../utils/constants';
import './style.css';

interface IHeader {
  title: string;
  fontSize?: number;
}

export const Header: React.FC<IHeader> = (props: IHeader) => {
  const style: React.CSSProperties = {
    fontSize: props.fontSize ?? HEADER_FONT_SIZE,
  };

  return (
    <div className="header" style={style}>
      {props.title}
    </div>
  );
};
