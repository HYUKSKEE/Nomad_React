function LikeBtn() {
  return (
    <button
      id={`like${idx}`}
      className="like-button"
      onClick={() => {
        setLike(!like);
      }}
    >
      {like == true ? "🧡" : "🤍"}
    </button>
  );
}
