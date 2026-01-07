import Image from 'next/image';

import reviewData from '@/src/server/data/unit-review.json';
import type { TextStyleType, UnitReviewProduct } from '@/src/types';
import { TEXT_STYLES } from '@/src/types';
import ReviewItem from './ReviewItem';
import ShortcutItem from '../shortcut/ShortcutItem';

const ReviewList = () => {
  const { title, products } = reviewData;

  return (
    <section className="mb-12 bg-[#F4F4FF] py-6 px-4 flex flex-col gap-4 items-start">
      <div className="flex gap-1 items-center">
        {title.map((ele) => (
          <span
            key={ele.text}
            style={{
              fontSize: `${ele.size}px`,
              color: ele.colorWeb,
              backgroundColor: ele.bgColorWeb || undefined,
              ...TEXT_STYLES[ele.types[0] as TextStyleType],
            }}
          >
            {ele.text}
          </span>
        ))}
      </div>

      <div
        className="w-full overflow-x-auto scrollbar-hide"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <div className="flex gap-1.5 w-max">
          {products.map((item: UnitReviewProduct) => (
            <ReviewItem key={item.uuid} reviewItem={item as UnitReviewProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
