import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Stateless Functional Component
// function Tweet () {
//   return (
//     <div className="tweet">
//       Tweet
//     </div>
//   );
// }

// Class Component
// Top down container
class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <Avatar/>
        <div className="content">
          <NameWithHandle/><Time/>
          <Message/>
          <div className="buttons">
            <ReplyButton/>
            <RetweetButton/>
            <LikeButton/>
            <MoreOptionsButton/>
          </div>
      </div>
      </div>
    );
  }
}

// class syntax for create
// must include render
// must include return
// must have closing tags
class Avatar extends React.Component {
  render() {
    // CSS styling in component
    var avatarStyle = {
      width: 48,
      height: 48,
      borderRadius: 5,
      marginRight: 10
    }
    return (
      <img src="https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo.jpg"
        style={avatarStyle}
        alt="avatar" />
    )
  }
}

function Message() {
  return(
    <div className="message">
      This is less than 140 characters.
    </div>
  );
}

class NameWithHandle extends React.Component {
  render() {
    return(
      <span className="name-with-handle">
        <span className="name">Your Name</span>
        <span className="handle">@yourhandles</span>
      </span>
    )
  }
}

function Time() {
  return(
    <span className="time">3h ago</span>
  );
}

class ReplyButton extends React.Component {
  render() {
    return(
      <i className="fa fa-reply reply-button"/>
    );
  }
}

class RetweetButton extends React.Component {
  render() {
    return(
      <i className="fa fa-retweet retweet-button"/>
    );
  }
}

class LikeButton extends React.Component {
  render() {
    return(
      <i className="fa fa-heart like-button"/>
    );
  }
}

class MoreOptionsButton extends React.Component {
  render() {
    return(
      <i className="fa fa-ellipsis-h more-options-button"/>
    );
  }
}



ReactDOM.render(<Tweet />, document.getElementById('root'));
