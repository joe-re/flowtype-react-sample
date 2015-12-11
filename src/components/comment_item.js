/* @flow */

import React from 'react';
import type { Comment } from '../types';

export default class CommentItem extends React.Component {
  props: {
    comment: Comment
  };

  render(): ReactElement {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.comment.author}
        </h2>
        {this.props.comment.text}
      </div>
    );
  }
}
