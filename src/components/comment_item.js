/* @flow */

import React from 'react';

export default class CommentItem extends React.Component {
  render(): ReactElement {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}
