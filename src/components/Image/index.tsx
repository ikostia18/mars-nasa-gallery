import { IMAGE_WIDTH } from '../../utils/constants';
import './style.css';

interface IImage {
  src: string;
  width?: number;
  alt?: string;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Image: React.FC<IImage> = (props: IImage) => {
  const style: React.CSSProperties = {
    ...props.style,
    maxHeight: 150,
    width: props.width ?? IMAGE_WIDTH,
  };

  return (
    <div className={`image ${props.className ? props.className : ''}`}>
      <img src={props.src} style={style} alt={props.alt ?? 'mars-image'} />
      {props.description && (
        <div className="description">{props.description}</div>
      )}
    </div>
  );
};
