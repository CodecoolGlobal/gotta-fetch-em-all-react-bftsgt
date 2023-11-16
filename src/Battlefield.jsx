import ChoosePlayer from "./ChoosePlayer";
import Encounter from "./Encounter";


const Battlefield = () => {
  const pokemon = localStorage.getItem('PlayerPoke')
const opponent = localStorage.getItem('Opponent')
  console.log(JSON.parse(pokemon))
  console.log(JSON.parse(opponent))
  return (
    <div className="battlefield">
      <p>battlefield here</p>
    </div>
  );
}

export default Battlefield;

