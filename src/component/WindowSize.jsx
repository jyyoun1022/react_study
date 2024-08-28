import { useState, useEffect } from "react";

function useWindowSize() {
  // 상태로 너비와 높이를 관리
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  setUsers(
    
    users.filter(
      (item) => 
        item.id !== id)
      );


  useEffect(() => {
    // 창 크기가 변경될 때마다 상태 업데이트
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 클린업: 컴포넌트가 언마운트되거나 효과가 다시 실행되기 전 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 빈 배열로 한 번만 실행

  return windowSize; // 현재 창 크기를 반환
}

export default useWindowSize;
