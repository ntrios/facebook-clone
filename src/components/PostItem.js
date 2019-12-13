import React from 'react';

function PostItem(post) {
  return (
    <div class="postItem">
      <div class="postHeader">
        <img src={post.author.avatar} />
        <div>
         <h2>{post.author.name}</h2>
         <p>{post.date}</p>
        </div>
      </div>
      <p>{post.content}</p>
      {/* <div class="postComments">
        <img src=""/>
        <div>
          <p><strong>Person</strong> comments</p>
        </div>
        
      </div> */}
    </div>

  );
}

export default PostItem;