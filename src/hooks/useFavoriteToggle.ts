'use client';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'favorite_list';

const useFavoriteToggle = () => {
  const [favoriteList, setFavoriteList] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];

    const savedFavoriteList = localStorage.getItem(STORAGE_KEY);
    return savedFavoriteList ? JSON.parse(savedFavoriteList) : [];
  });

  const isFavorite = (uuid: string) => favoriteList.includes(uuid);

  // 좋아요 토글 (이미 찜한 상품이면 제거, 찜하지 않은 상품이면 추가)
  const onToggleFavorite = (uuid: string) => {
    setFavoriteList((prev) => (prev.includes(uuid) ? prev.filter((item) => item !== uuid) : [...prev, uuid]));
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteList));
  }, [favoriteList]);

  return { favoriteList, onToggleFavorite, isFavorite };
};

export default useFavoriteToggle;
