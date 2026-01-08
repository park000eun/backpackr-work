import { TEXT_STYLES, type TextStyleType, type TextObject } from '@/src/types';

interface StyledTextProps {
  textData: TextObject;
  className?: string;
}

const StyledText = ({ className, textData }: StyledTextProps) => {
  const { size, colorWeb, bgColorWeb, types, text } = textData;
  return (
    <span
      className={className}
      style={{
        fontSize: `${size}px`,
        color: colorWeb,
        backgroundColor: bgColorWeb || undefined,
        ...TEXT_STYLES[types[0] as TextStyleType],
      }}
    >
      {text}
    </span>
  );
};

export default StyledText;
