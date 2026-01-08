const SectionTitle = ({ title, className }: { title: string; className?: string }) => {
  return <h1 className={`text-lg font-extrabold text-gray-700 pl-1 ${className}`}>{title}</h1>;
};

export default SectionTitle;
