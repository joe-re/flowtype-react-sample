import React from 'react';
import CommentItem from './comment_item';

export default class CommentList extends React.Component{
  render() {
    const commentNodes = this.props.comments.map((comment) => {
      return (
        <CommentItem author={comment.author} key={comment.id}>
          {comment.text}
        </CommentItem>
      );
    });
    return (
      <div className="commentList">{commentNodes}</div>
    );
  }
}
