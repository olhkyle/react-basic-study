import React from 'react';

// React Component!
// Follow <-> following
function FollowButton() {
    const [following, setFollowing] = React.useState(false);


    // jsx가 아닌 javscript 문법으로 작성한 것 -> JSX 코드 형식으로 변경 해보자!
    // return React.createElement(
    //     "div",
    //     {onclick: () => setFollowing(!following)},
    //     following ? "Following" : "Follow"
    // );

    return(
        <div onclick={() => setFollowing(!following)}>
            {following ? "Following" : "Follow"}
        </div>
    )
  }

  export default FollowButton;