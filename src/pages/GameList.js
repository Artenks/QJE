import "../css/GameList.css";
import { init, takeLimitedGames } from "../scripts/GenerateList";

function Home() {
  init();
  return (
    <header>
      <div className="title-count">
        <h1></h1>
      </div>
      <div className="container-list"></div>
      <button onClick={takeLimitedGames} className="button-continue">
        +
      </button>
    </header>
  );
}

export default Home;
