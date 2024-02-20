import { useCallback } from 'react';
import useResponsive from './useResponsive';

export default function useGetVertical() {
  const { isMobile } = useResponsive();

  const getVertical = useCallback(
    (vertical: number | string) => {
      return isMobile ? Number(vertical) / 2 : vertical;
    },
    [isMobile],
  );

  return {
    getVertical,
  };
}
