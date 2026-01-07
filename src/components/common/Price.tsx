interface PriceProps {
  discountRate?: number;
  salePrice: number;
}

const Price = ({ discountRate, salePrice }: PriceProps) => {
  return (
    <div className="flex items-baseline gap-1 min-w-0">
      {discountRate && <span className="font-bold text-[#ff4b50] shrink-0">{discountRate}%</span>}
      <span className="font-bold text-gray-900 truncate min-w-0 ">
        {salePrice.toLocaleString('ko-KR')}
        <span className="text-xs pl-px font-normal">원</span>
      </span>
    </div>
  );
};

export default Price;
