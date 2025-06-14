import React from "react";
import "../styles/postcard.scss"; // Make sure this path matches your folder structure
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString();

  return (
    <div className="post-card">
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
        <div className="post-meta">
          <span className="post-author">By {post.author?.username || "Unknown"}</span>
          <br />
          <span className="post-author">By {post.author?.email || "Unknown"}</span>
          <span className="post-date"> | {formattedDate}</span>
        </div>
      </div>
      <p className="post-excerpt">
        {post.content ? post.content.substring(0, 100) + "..." : "No content available"}
      </p>
      <Link to={`/posts/${post._id}`} className="read-more">
        Read More →
      </Link>
    </div>
  );
};

export default PostCard;
