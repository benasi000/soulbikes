import { useEffect } from 'react';
import { useFetcher, useLocation } from 'react-router-dom';

export default function AutoScrollTop(){
  const {pathname} = useLocation();

  useEffect(()=> {
    window.scrollTo(0,0);
  }, [pathname]
  );
  return null;
}