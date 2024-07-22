import Discussion from "./Discussion";
import Kudos from "./Kudos";
function DisplayScreen({ displayScreen, code }) {
  return (
    <div>
      {displayScreen ? <Kudos code={code} /> : <Discussion code={code} />}
    </div>
  );
}

export default DisplayScreen;
