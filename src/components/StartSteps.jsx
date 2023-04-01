import "./startSteps.scss";

const StartSteps = ({ number, text }) => (
  <div className="start-steps">
    <div className="start-steps__num-cont">
      <p className="start-steps__num">{number}</p>
    </div>
    <p className="start-steps__ideas">{text}</p>
  </div>
);

export default StartSteps;
