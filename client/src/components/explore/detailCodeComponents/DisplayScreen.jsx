import Discussion from "./Discussion";
function DisplayScreen({ displayScreen }) {
  return <div>{displayScreen ? <h1>kudos</h1> : <Discussion />}</div>;
}

export default DisplayScreen;
