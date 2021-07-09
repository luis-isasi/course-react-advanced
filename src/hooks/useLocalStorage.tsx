import { useState } from 'react';

const useLocalStorage = (idLiked: string) => {
  const [liked, setLiked] = useState<boolean>((): boolean => {
    try {
      if (window.localStorage.getItem(idLiked) === null) return false;
      return JSON.parse(window.localStorage.getItem(idLiked));
    } catch (error) {
      console.log(error);
    }
  });

  const setLocalStorage = () => {
    try {
      setLiked(!liked);
      window.localStorage.setItem(idLiked, JSON.stringify(!liked));
    } catch (error) {
      console.log(error);
    }
  };

  return { liked, setLocalStorage };
};

export default useLocalStorage;
