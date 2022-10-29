import { useState } from 'react';
import './style.css';

interface ITooltip {
  content: string;
  delay?: number;
  children?: React.ReactNode;
}

export const Tooltip: React.FC<ITooltip> = (props: ITooltip) => {
  const [active, setActive] = useState(false);
  const [isOverflown, setIsOverflown] = useState(false);

  let timeout: NodeJS.Timeout;

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const isOverflownValidation = (e: any) => {
    setIsOverflown(e.target.scrollHeight > e.target.offsetHeight);
  };

  const HandleOnMouseEnter = (e: any) => {
    isOverflownValidation(e);
    showTip();
  };

  return (
    <>
      <div
        className="tooltip-Wrapper"
        onMouseEnter={HandleOnMouseEnter}
        onMouseLeave={hideTip}
      >
        {props.children}
        {isOverflown && active && (
          <div className="tooltip-Tip">{props.content}</div>
        )}
      </div>
    </>
  );
};
