import React from 'react';

function PostHeader({ author, date }) {
  return (   
    <div className="postHeader">
      <img className="avatar" src={author.avatar} />
      
      <div>
        <h2>{author.name}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="postComments">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name} </span>
            {comment.content}
          </p>
        </div>
      ))}
    </div> 
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="postItem">
      <PostHeader author={author} date={date} />
      <p>{content}</p>
      <div className="separator"></div>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;