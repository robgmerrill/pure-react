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
        <Avatar hash={this.props.tweet.gravatar}/>
        <div className="content">
          <NameWithHandle/><Time/>
          <Message text={this.props.tweet.message}/>
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

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
};

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
    var hash = this.props.hash;
    // the hash passed from parent to child will be attached to the end of this URL
    // then be passed to the return statement of the component
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
      <img src={url}
        style={avatarStyle}
        alt="avatar" />
    )
  }
}

// function Message() {
//   return(
//     <div className="message">
//       {this.props.text}
//     </div>
//   );
// }

// WHY?? DO STATELESS FUNCTIONAL COMPONENTS NOT WORK HERE?
var Message = React.createClass({
  render: function() {
    return (
      <div className="message">
        {this.props.text}
        </div> );
} });

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


// the attribut of "tweet" is passed to our component. It is an object. So now we can access
// all the property values of that object with tweet.message or tweet.avatar and so on.
// pain point. Learning that Stateless functional components don't handle props...
ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById('root'));
