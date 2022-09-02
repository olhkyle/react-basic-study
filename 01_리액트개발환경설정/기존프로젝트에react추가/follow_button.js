// React Component!
// Follow <-> following
function FollowButton() {
    const [following, setFollowing] = React.useState(false);
    return React.createElement(
        "div",
        {onclick: () => setFollowing(!following)},
        following ? "Following" : "Follow"
    );
  }
  const domContainer = document.querySelector('#follow_button_container');
  ReactDOM.render(React.createElement(FollowButton), domContainer);
