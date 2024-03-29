import "./CircleLoading.style.less";

interface CircleLoadingProps {
  color?: string;
}

export default function (props: CircleLoadingProps) {
  const { color } = props;

  return (
    <div className="spinner-wrapper">
      <span
        className="spinner-text"
        style={{ color: `${color ? color : "rebeccapurple"}` }}
      >
        Loading
      </span>
      <span
        className="spinner"
        style={{ border: `24px solid ${color ? color : "rebeccapurple"}` }}
      ></span>
    </div>
  );
}
