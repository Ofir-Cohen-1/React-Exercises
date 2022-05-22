const CustomBtn = (props) => {
    console.log(props);
  return (
    <>
      <button onClick={() => props.callBackFunc()}>{props.text}</button>
    </>
  );
};

export default CustomBtn;
