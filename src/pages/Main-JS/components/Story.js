function Story(props) {
  let lis = props.onEvent;
  return (
    <>
      <div>
        <ul>{lis}</ul>
      </div>
    </>
  );
}

export default Story;
