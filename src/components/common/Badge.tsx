interface BadgeProps {
  label: string;
  style?: React.CSSProperties;
  variant?: 'promotion' | 'review' | 'service';
}
const Badge = ({ label, style, variant = 'service' }: BadgeProps) => {
  const variants = {
    review: 'text-gray-600 bg-gray-100 rounded-lg',
    service: 'font-bold rounded-xs',
    promotion: 'py-1 px-1.5 rounded-xs',
  };

  return (
    <span
      className={`inline-block leading-[1.6] text-[10px] px-1 shrink-0 whitespace-nowrap ${variants[variant]}`}
      style={style}
    >
      {label}
    </span>
  );
};

export default Badge;
