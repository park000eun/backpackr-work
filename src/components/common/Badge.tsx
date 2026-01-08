import Image from 'next/image';

interface BadgeProps {
  label: string;
  style?: React.CSSProperties;
  variant?: 'promotion' | 'review' | 'service';
  image?: string | null;
}
const Badge = ({ label, style, variant = 'service', image = null }: BadgeProps) => {
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
      <div className="flex items-center">
        {image && <Image src={image} alt={label} width={12} height={12} />}
        {label}
      </div>
    </span>
  );
};

export default Badge;
