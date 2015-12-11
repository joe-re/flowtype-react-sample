import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/comment_box';

window.React = React;

ReactDOM.render(<CommentBox />, document.getElementById('content'));
