import Discussion from "./Discussion";
function DisplayScreen({ displayScreen, code }) {
  return (
    <div>{displayScreen ? <h1>kudos</h1> : <Discussion code={code} />}</div>
  );
}

export default DisplayScreen;
