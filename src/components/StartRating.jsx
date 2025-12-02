import "../styles/star.css";
const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, index) => {
        if (index < fullStars) {
          return (
            <span key={index} className="star filled">
              ★
            </span>
          );
        } else if (index === fullStars && halfStar) {
          return (
            <span key={index} className="star half">
              ★
            </span>
          );
        }
        return (
          <span key={index} className="star">
            ★
          </span>
        );
      })}
    </div>
  );
};

export default RatingStars;
