/* @flow */

import React from 'react';

export default class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = { author: '', text: '' };
  }

  handleAuthorChange(e: any) {
    this.setState({ author: e.target.value });
  }

  handleTextChange(e: any) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({ author, text });
    this.setState({ author: '', text: '' });
  }

  render(): ReactElement {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange.bind(this)}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
