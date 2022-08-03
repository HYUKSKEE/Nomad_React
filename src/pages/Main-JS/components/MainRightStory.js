function MainRightStory(props) {
  let lis = props.onEvent;
  return (
    <>
      <div className="Main-Right-story">
        <ul>{lis}</ul>
      </div>
    </>
  );
}

export default MainRightStory;
