const ProductName = ({ name, size = 'lg' }: { name: string; size?: 'sm' | 'lg' }) => {
  return (
    <>
      {size === 'sm' ? (
        <span className="text-sm text-gray-600 line-clamp-2 my-1 text-start">{name}</span>
      ) : (
        <h3 className="line-clamp-2">{name}</h3>
      )}
    </>
  );
};

export default ProductName;
