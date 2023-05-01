import '../css/GameEmoji.css';
import {sendGame} from '../scripts/autocomplete.js'

function GameEmoji() {
  return (
    <header>
      <div className="container-info">
        <h1>Que jogo é <span>"📄🙏"</span></h1>
      </div>

      <div className="container-grid">

        <div className="container-search">
          <div className="search-box">
            <div className="row">
              <input type="text" id="input-box" placeholder="Preencha este campo..." autoComplete="off" spellCheck="false"/>
                <button className="search-button hide" onClick={sendGame}>
                <i className="fa-solid fa-paper-plane fa-bounce"></i>
              </button>
            </div>
            <div className="result-box"></div>
          </div>


        </div>

        <div className="container-result">
          <img className="game-image hide popup" src="" alt="logo do jogo"/>
        </div>

      </div>
      <script src="../src/scripts/autocomplete.js"></script>
    </header>
  );
}

export default GameEmoji