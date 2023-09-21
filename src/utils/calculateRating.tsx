import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export function calculateRating(rating: number) {
  const starsQuantity = rating;
  const stars = [];
  let isHalf = false;

  for (let i = 1; i <= 5; i++) {
    if (i <= starsQuantity || starsQuantity > 4.7) {
      stars.push(<BsStarFill />);
    } else if (i >= Math.floor(starsQuantity) && !Number.isInteger(starsQuantity) && !isHalf) {
      stars.push(<BsStarHalf />);
      isHalf = true;
    } else if (i >= Math.ceil(starsQuantity)) {
      stars.push(<BsStar />);
    }
  }

  return stars;
}
