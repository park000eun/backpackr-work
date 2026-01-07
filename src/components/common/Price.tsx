interface PriceProps {
  discountRate?: number;
  salePrice: number;
}

const Price = ({ discountRate, salePrice }: PriceProps) => {
  return (
    <div className="flex items-baseline gap-1">
      {discountRate && <span className="font-bold text-[#ff4b50]">{discountRate}%</span>}
      <div>
        <span className="font-bold text-gray-900">{salePrice.toLocaleString()}</span>
        <span className="text-xs pl-px">원</span>
      </div>
    </div>
  );
};

export default Price;
