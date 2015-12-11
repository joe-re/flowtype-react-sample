/* @flow */

import React from 'react';
import CommentForm from './comment_form';
import CommentList from './comment_list';

export default class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  handleCommentSubmit(comment) {
    this.setState({ data: this.state.data.concat(comment) });
  }

  render():ReactElement {
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
        <CommentList data={this.state.data} />
      </div>
    );
  }
};
