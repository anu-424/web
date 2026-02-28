import { useState } from "react";
import "./Forum.css";

function Forum() {
  const currentUser = "You"; // later comes from login/backend

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "WordNerd",
      text: "Just completed this crossword!",
      likes: 0,
      likedBy: [],
      comments: []
    }
  ]);

  const [newPostText, setNewPostText] = useState("");
  const [showModal, setShowModal] = useState(false);

  // LIKE / UNLIKE
  function likePost(id) {
    setPosts(
      posts.map((p) => {
        if (p.id !== id) return p;

        const alreadyLiked = p.likedBy.includes(currentUser);

        return {
          ...p,
          likedBy: alreadyLiked
            ? p.likedBy.filter((u) => u !== currentUser)
            : [...p.likedBy, currentUser],
          likes: alreadyLiked ? p.likes - 1 : p.likes + 1
        };
      })
    );
  }

  // ADD COMMENT
  function addComment(id, commentText) {
    if (commentText === "") return;

    setPosts(
      posts.map((p) =>
        p.id === id
          ? {
              ...p,
              comments: [
                ...p.comments,
                { user: currentUser, text: commentText }
              ]
            }
          : p
      )
    );
  }

  // ADD NEW POST
  function addNewPost() {
    if (newPostText === "") return;

    setPosts([
      {
        id: Date.now(),
        user: currentUser,
        text: newPostText,
        likes: 0,
        likedBy: [],
        comments: []
      },
      ...posts
    ]);

    setNewPostText("");
    setShowModal(false);
  }

  return (
    <div className="forum-container">
      {/* HEADER */}
      <div className="header">
        <h1>The Linguistics Society</h1>
      </div>

      {/* NAVBAR */}
      <div className="navbar">
        <button>Home</button>
        <button>Games</button>
        <button>Essay</button>
        <button>About</button>
      </div>

      {/* TITLE */}
      <div className="forum-title">
        <h2>COMMUNITY BOARD</h2>
        <button className="new-post" onClick={() => setShowModal(true)}>
          + New Post
        </button>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal">
          <div className="modal-box">
            <h3>Create Post</h3>
            <textarea
              placeholder="Write something..."
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
            />
            <button onClick={addNewPost}>Post</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* POSTS */}
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.user}</h3>
          <p>{post.text}</p>

          <button onClick={() => likePost(post.id)}>
            {post.likedBy.includes(currentUser) ? "💔 Unlike" : "❤️ Like"} (
            {post.likes})
          </button>

          <CommentBox onAdd={(c) => addComment(post.id, c)} />

          {post.comments.map((c, i) => (
            <div key={i} className="comment">
              <strong>{c.user}</strong>
              <p>💬 {c.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// COMMENT INPUT COMPONENT
function CommentBox({ onAdd }) {
  const [comment, setComment] = useState("");

  function submit() {
    if (comment === "") return;
    onAdd(comment);
    setComment("");
  }

  return (
    <div className="comment-box">
      <input
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submit}>Comment</button>
    </div>
  );
}

export default Forum;