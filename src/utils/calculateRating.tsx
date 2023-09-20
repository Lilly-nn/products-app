import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export function calculateRating(rating: number) {
  const starsQuantity = rating;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= starsQuantity) stars.push(<BsStarFill />);
    if (i === Math.floor(starsQuantity) && starsQuantity % 1 !== 0) {
      stars.push(<BsStarHalf />);
    }
    if (i > Math.ceil(starsQuantity)) stars.push(<BsStar />);
  }

  return stars;
}
