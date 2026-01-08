const ArtistName = ({ artistName }: { artistName: string }) => {
  return <span className="w-full text-start text-xs text-gray-400 truncate min-w-0 line-clamp-1">{artistName}</span>;
};

export default ArtistName;
