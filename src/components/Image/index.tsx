import { IMAGE_WIDTH } from '../../utils/constants';
import './style.css';

interface IImage {
  src: string;
  width?: string;
  alt?: string;
  description?: string;
}

export const Image: React.FC<IImage> = (props: IImage) => {
  const style: React.CSSProperties = {
    width: props.width ?? IMAGE_WIDTH,
  };

  return (
    <div className="image">
      <img src={props.src} style={style} alt={props.alt ?? 'mars-image'} />
      {props.description && (
        <div className="description">{props.description}</div>
      )}
    </div>
  );
};
