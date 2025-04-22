const Loader = () => {
  const circleCommonClasses = "h-2.5 w-2.5 bg-current   rounded-full";
const delaySecond = {
    animationDelay: '200ms'
}
const delayThird = {
    animationDelay: '400ms'
}
  return (
    <div className="flex gap-4 justify-center items-center min-h-96">
        <span>Loading</span>
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div
          className={`${circleCommonClasses} mr-1 animate-bounce`}
          style={delaySecond}
        ></div>
        <div
          className={`${circleCommonClasses} animate-bounce `}
          style={delayThird}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
