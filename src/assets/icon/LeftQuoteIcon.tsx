const LeftQuoteIcon = ({ size = 16, className, fill = '#999', ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={`shrink-0 ${className}`}
      {...props}
    >
      <path
        fill={fill}
        d="M11.15 4 10 6q.825 0 1.412.588Q12 7.175 12 8t-.588 1.412A1.93 1.93 0 0 1 10 10q-.825 0-1.412-.588A1.93 1.93 0 0 1 8 8q0-.288.069-.531T8.275 7L10 4zm-5 0L5 6q.824 0 1.412.588Q7 7.175 7 8t-.588 1.412A1.93 1.93 0 0 1 5 10q-.824 0-1.412-.588A1.93 1.93 0 0 1 3 8q0-.288.069-.531.068-.244.206-.469L5 4z"
      />
    </svg>
  );
};

export default LeftQuoteIcon;
