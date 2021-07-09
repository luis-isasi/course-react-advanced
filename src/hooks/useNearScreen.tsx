import { useState, useEffect, useRef } from 'react';

const useNearScreen = () => {
  const [show, setShow] = useState<boolean>(false);
  const element = useRef(null);

  useEffect(() => {
    //al usar intersectionObserver siempre debemos de aseguarnos que el navegador no lo soporte
    //para recien importar de manera dinamica nuestro polyfill
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        console.log('isIntersecting: ', isIntersecting);
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });

    // console.log(element.current);
  }, [element]);

  return { show, element };
};

export default useNearScreen;
