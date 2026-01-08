import reviewData from '@/src/server/data/unit-review.json';
import type { UnitReviewProduct, UnitReview } from '@/src/types';

import { ReviewItem, StyledText } from '@/src/components';
import { ReviewIcon } from '@/src/assets';

const ReviewList = () => {
  const { title, products } = reviewData as UnitReview;

  return (
    <section className="mb-12 bg-[#F4F4FF] py-6 px-4 flex flex-col gap-4 items-start">
      <div className="flex gap-1 items-center">
        <ReviewIcon />
        {title.map((ele) => (
          <StyledText key={ele.text} textData={ele} />
        ))}
      </div>

      <div
        className="w-full overflow-x-auto scrollbar-hide"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <div className="flex gap-1.5 w-max">
          {products.map((item) => (
            <ReviewItem key={item.uuid} reviewItem={item as UnitReviewProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
