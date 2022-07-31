import React, { useState } from "react";
import "./main.css";

function Main() {
  const [comment, setComment] = useState("");

  const handleComment = (event) => {
    setComment(event.target.value);
    console.log(comment);
  };

  const LiComment = (props) => {
    return <li>{props.comment}</li>;
  };

  const UploadLi = (event) => {
    event.preventDefault();
    return <LiComment />;
  };
  return (
    <div className="wrap">
      <nav className="nav-bar">
        <div className="nav-h1">
          <h1>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
              westagram
            </a>
          </h1>
        </div>
        <div className="nav-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="검색" />
        </div>
        <div className="nav-icons">
          <i className="fas fa-thin fa-compass">
            <a href="#"></a>
          </i>
          <i className="fas fa-thin fa-heart">
            <a href="#"></a>
          </i>
          <i className="fas fa-light fa-user">
            <a href="#"></a>
          </i>
        </div>
      </nav>
      <main className="main-container">
        <div className="otherAndStory-wrap">
          <div className="main-other-story">
            <ul>
              <li>
                <img src="img/1.png" alt="1's story" /> name1
              </li>
              <li>
                <img src="img/2.jpg" alt="2's story" /> name2
              </li>
              <li>
                <img src="img/3.png" alt="3's story" /> name3
              </li>
              <li>
                <img src="img/4.jfif" alt="4's story" /> name4
              </li>
              <li>
                <img src="img/5.png" alt="5's story" /> name5
              </li>
              <li>
                <img src="img/6.jpg" alt="6's story" /> name6
              </li>
            </ul>
          </div>
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
                  <UploadLi />
                </ul>
                <div className="comment-input-wrap">
                  <form action="#" method="get">
                    <input
                      id="comment-input"
                      type="text"
                      value={comment}
                      onChange={handleComment}
                      placeholder="댓글달기"
                    />
                    <button type="submit" id="upload-button" onClick={UploadLi}>
                      게시
                    </button>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="main-right-wrap">
          <div className="main-right">
            <div className="right-profile">
              <h2>
                <img src="img/운명 트로트 2.jpg" alt="" />
              </h2>
              <div>
                <h3>
                  <strong>HYUKSKEE</strong>
                </h3>
                <p>HYUKSKEE'S account</p>
              </div>
            </div>
            <div className="story">
              <ul>
                <li>
                  <img src="img/1.png" alt="1's story" /> name1
                </li>
                <li>
                  <img src="img/2.jpg" alt="2's story" /> name2
                </li>
                <li>
                  <img src="img/3.png" alt="3's story" /> name3
                </li>
                <li>
                  <img src="img/4.jfif" alt="4's story" /> name4
                </li>
                <li>
                  <img src="img/5.png" alt="5's story" /> name5
                </li>
                <li>
                  <img src="img/6.jpg" alt="6's story" /> name6
                </li>
              </ul>
            </div>
            <div className="recommend-story">
              <ul>
                <li>
                  <img src="img/1.png" alt="1's story" /> name1
                </li>
                <li>
                  <img src="img/2.jpg" alt="2's story" /> name2
                </li>
                <li>
                  <img src="img/3.png" alt="3's story" /> name3
                </li>
                <li>
                  <img src="img/4.jfif" alt="4's story" /> name4
                </li>
                <li>
                  <img src="img/5.png" alt="5's story" /> name5
                </li>
                <li>
                  <img src="img/6.jpg" alt="6's story" /> name6
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
