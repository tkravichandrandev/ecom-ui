const ButtonWithTrack = (Comp) => {
  return (props) => {
    const handleClick = () => {
      console.log("Its clicked in tracking button", props);
    };

    return (
      <div onClick={handleClick}>
        <Comp {...props} />
      </div>
    );
  };
};

export default ButtonWithTrack;
