import "./newFeatures.scss";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="new-features">
    <div className="new-features__img-cont">
      <img src={imgUrl} alt="icon" className="new-features__img" />
    </div>
    <h1 className="">{title}</h1>
    <p className="new-features__subtitle">{subtitle}</p>
  </div>
);

export default NewFeatures;
