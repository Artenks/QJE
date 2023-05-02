import '../css/GameEmoji.css';
import { sendGame, init } from '../scripts/autocomplete.js';
import {ChoiceQuestion} from '../scripts/game.js';


function GameEmoji() {
  init();
  ChoiceQuestion("../emojiQuestions.json");
  return (
    <header className='blur-image'>

      <div className="container-info">
        <h1>Que jogo é <span>"📄🙏"</span></h1>
      </div>
      <div className="container-grid">

        <div className="container-search">
          <div className="search-box">
            <div className="row">
              <input type="text" id="input-box" placeholder="Preencha este campo..." autoComplete="off" spellCheck="false" />
              <button className="search-button hide" onClick={sendGame}>
                <i className="fa-solid fa-paper-plane fa-bounce"></i>
              </button>
            </div>
            <div className="result-box">
              <ul id="result-items"></ul>
            </div>
          </div>

        </div>

      </div>

    </header>
  );
}

export default GameEmoji