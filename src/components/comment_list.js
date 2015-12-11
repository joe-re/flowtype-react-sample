/* @flow */

import React from 'react';
import CommentItem from './comment_item';
import type { Comment } from '../types';

type Props = {
  comments: Array<Comment>
}

export default class CommentList extends React.Component{
  props: Props;

  render(): ReactElement {
    const commentNodes = this.props.comments.map((comment) => {
      return (
        <CommentItem comment={comment} key={comment.id} />
      );
    });
    return (
      <div className="commentList">{commentNodes}</div>
    );
  }
}
