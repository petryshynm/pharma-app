import './ProgressBar.scss'

export const ProgressBar = ({value, label}) => {
  return (
    <div
        className="progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
    >
        {label && <div className="progress__label">{label}</div> }
        <div className="progress__bg">
            <div className="progress__bar" data-value={`${value}%`} style={{ width: `${value}%` }}></div>
        </div>
    </div>
  );
};