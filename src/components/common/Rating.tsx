import Image from 'next/image';
import starIcon from '@/src/assets/icon/review-star.svg';

interface RatingProps {
  rate: number;
  count: number;
}

const Rating = ({ rate, count }: RatingProps) => {
  return (
    <div className="flex items-center gap-0.5 mt-2">
      <Image src={starIcon} alt="star" width={14} height={14} className="block" />
      <span className="text-xs font-bold text-gray-500">{rate}</span>
      <span className="text-xs text-gray-400">({count})</span>
    </div>
  );
};

export default Rating;
