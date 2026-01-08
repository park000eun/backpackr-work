import Image from 'next/image';
import useFavoriteToggle from '@/src/hooks/useFavoriteToggle';

import FavoriteOnIcon from '@/src/assets/icon/favorite-on.png';
import FavoriteOffIcon from '@/src/assets/icon/favorite-off.png';

const FavoriteToggle = ({ uuid }: { uuid: string }) => {
  const { isFavorite, onToggleFavorite } = useFavoriteToggle();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggleFavorite(uuid);
      }}
      className="absolute top-2 right-2 z-10"
    >
      {isFavorite(uuid) ? (
        <Image src={FavoriteOnIcon} alt={'favorite-on'} width={26} height={26} />
      ) : (
        <Image src={FavoriteOffIcon} alt={'favorite-off'} width={26} height={26} />
      )}
    </button>
  );
};

export default FavoriteToggle;
