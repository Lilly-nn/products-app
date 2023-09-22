export function calculateRating(rating: number) {
  const starsQuantity = rating;
  const stars = [];
  let isHalf = false;

  for (let i = 1; i <= 5; i++) {
    if (i <= starsQuantity || starsQuantity > 4.7) {
      stars.push('filled');
    } else if (i >= Math.floor(starsQuantity) && !Number.isInteger(starsQuantity) && !isHalf) {
      stars.push('half');
      isHalf = true;
    } else if (i >= Math.ceil(starsQuantity)) {
      stars.push('not-filled');
    }
  }

  return stars;
}
