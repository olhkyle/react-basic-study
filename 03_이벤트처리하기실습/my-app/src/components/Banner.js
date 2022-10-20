import React, {useState} from "react";

const Banner = () => {
    const [visible, setVisible] = useState(true);
    // const draw = () => {
    //     return alert(`10% 할인 쿠폰에 당첨 되었습니다.`)
    // }

    const getCoupon = () => {
        return alert(`10% 할인 쿠폰에 당첨 되었습니다.`)
    }

    // const closeBanner = (e) => {
    //     e.stopPropagation();
    //     const divEl = document.querySelector('div');
    //     divEl.style.visibility = 'hidden';
    // }

    const closeBanner = (e) => {
        // 버튼은 div 태그안에 속해 있기 때문에, event 버블링에 의해 모두 이벤트 핸들러가 onClick이기 때문에, getCoupon도 실행될 것
        // 하지만, 의문은 왜 e.stopPropagation을 안쓰면, getCoupon이 먼저 실행되고, closeBanner가 나중에 실행되는지?
        // setVisible는 비동기로 처리되기 때문에, getCoupon이 먼저 실행된다.
        e.stopPropagation()
        setVisible(false);
    }

        
    return (
        visible && <div
            style={{
            backgroundColor: "orange",
            fontWeight: "bold",
            height: "50px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            }}
            onClick={getCoupon}
        >
          이 곳을 클릭해서 쿠폰을 받아가세요.
          <button onClick={closeBanner}>닫기</button>
        </div>
  );
};

export default Banner;