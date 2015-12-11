/* @flow */

import React from 'react';
import CommentForm from './comment_form';
import CommentList from './comment_list';
import type { Comment } from '../types';

let count: number = 0;

export default class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = { comments: [] };
  }

  handleCommentSubmit(comment: Comment) {
    comment.id = ++count;
    this.setState({ comments: this.state.comments.concat(comment) });
  }

  render():ReactElement {
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
};
