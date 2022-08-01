import { useState } from "react";

function Feed(props) {
  const [comments, setComment] = useState([]);
  const [input, setInput] = useState("");
  const [users, setUsers] = useState(["Wecode Bootcamp "]);
  const [like, setLike] = useState(false);

  const handleComment = (event) => {
    setInput(event.target.value);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    setComment((prevState) => {
      return [...prevState, input];
    });
    setInput("");
  };

  const deleteLi = (event) => {
    const div = event.target.parentElement;
    const li = div.parentElement;
    li.remove();
  };
  return (
    <div className="feed">
      <article>
        <div className="article-head">
          <h2>
            <img src="img/운명 트로트 2.jpg" alt="profile image" />
            <p>HYUKSKEE</p>
          </h2>
          <i className="fas fa-thin fa-ellipsis"></i>
        </div>
        <div className="article-content">
          <img src="img/야나두.gif" alt="article image" />
          <div className="article-btn-img">
            <div className="left-side">
              <img src="img/heart.png" alt="heart iamge" />
              <img src="img/chat.png" alt="comment iamge" />
              <img src="img/export.png" alt="share iamge" />
            </div>
            <img src="img/tag.png" alt="book mark image" />
          </div>
        </div>
        <div className="article-comment">
          <ul id="comment-list">
            {comments.map((comment, idx) => {
              return (
                <li id={idx} key={idx} className="new-li">
                  <span>
                    {users}
                    {comment}
                  </span>
                  <div>
                    <button id="delete-button" onClick={deleteLi}>
                      X
                    </button>
                    <button
                      id={`like${idx}`}
                      className="like-button"
                      onClick={() => {
                        setLike(!like);
                      }}
                    >
                      {like == true ? "🧡" : "🤍"}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="comment-input-wrap">
            <form action="#" method="get">
              <input
                id="comment-input"
                type="text"
                value={input}
                onChange={handleComment}
                placeholder="댓글달기"
              />
              <button type="submit" id="upload-button" onClick={handleUpload}>
                게시
              </button>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Feed;
