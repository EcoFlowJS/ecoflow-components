import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  useState,
} from "react";

interface props {
  text: string | JSX.Element;
  textColor?: string;
  backgroundColor?: string;
  hoverbackgroundColor?: string;
  rounded?: boolean;
  roundFully?: boolean;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  iconColor?: string;
  props?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

export default function Button(Props: props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  let {
    text,
    textColor,
    backgroundColor,
    hoverbackgroundColor,
    rounded = true,
    roundFully = false,
    iconBefore,
    iconAfter,
    iconColor,
    props,
  } = Props;

  let style: CSSProperties = {};
  textColor ? (style.color = textColor) : null;
  backgroundColor ? (style.backgroundColor = backgroundColor) : null;
  hoverbackgroundColor
    ? isHover
      ? (style.backgroundColor = hoverbackgroundColor)
      : (style.backgroundColor = backgroundColor)
    : null;

  return (
    <button
      type="button"
      className={`${!textColor ? "ecolib-text-white" : ""} ${
        !backgroundColor ? "ecolib-bg-primary-300" : ""
      } ${!hoverbackgroundColor ? "hover:ecolib-bg-primary-400" : ""} ${
        rounded ? "ecolib-rounded-lg" : ""
      } ${
        roundFully ? "ecolib-rounded-full" : ""
      } ecolib-font-medium ecolib-text-sm ecolib-px-5 ecolib-py-2.5 ecolib-me-2 ecolib-mb-2  ecolib-focus:outline-none`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {iconBefore ? (
        <span
          className="ecolib-me-2 ecolib--ms-1"
          style={iconColor ? { color: iconColor } : {}}
        >
          iconBefore
        </span>
      ) : null}
      {text}
      {iconAfter ? (
        <span
          className="ecolib-me-2 ecolib-ms-2"
          style={iconColor ? { color: iconColor } : {}}
        >
          iconAfter
        </span>
      ) : null}
    </button>
  );
}
