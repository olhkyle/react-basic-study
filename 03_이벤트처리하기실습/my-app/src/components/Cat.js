import React, { forwardRef, useEffect, useState } from "react";

const Cat = forwardRef((props, ref) => {
    const [loaded, setLoaded] = useState(false);
    console.log("자식 컴포넌트 Cat");
    console.log(ref);
    // 컴포넌트가 첫 mount 된 직후에 작동하도록
    
    useEffect(() => {
    console.log('useEffect in cat');
    console.log(ref);
    }, [])
    return (
      <div>
        <img
          src="https://static01.nyt.com/images/2016/03/30/universal/ko/well_cat-korean/well_cat-superJumbo-v2.jpg?quality=90&auto=webp"
          alt="cat"
          ref={loaded ? ref : undefined}
          style={{ width: "150px" }}
          onLoad={() => {
            alert('onload')
            setLoaded(true)}
          }
        ></img>
      </div>
    );
  });

export default Cat;