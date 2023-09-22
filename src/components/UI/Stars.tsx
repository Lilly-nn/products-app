import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function Stars({ stars }: { stars: string[] }) {
  return stars.map((star) =>
    star === 'filled' ? (
      <BsStarFill key={star + Math.random()} />
    ) : star === 'half' ? (
      <BsStarHalf key={star + Math.random()} />
    ) : (
      <BsStar key={star + Math.random()} />
    )
  );
}
