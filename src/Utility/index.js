import { useMediaQuery } from "react-responsive";

const useScreenSize = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isLargeScreen = useMediaQuery({ minWidth: 992 });

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  };
};

export default useScreenSize;
