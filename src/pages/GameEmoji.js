import '../css/GameEmoji.css';
import { sendGame } from '../scripts/autocomplete.js'

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

        <div className="container-result">
          <div className='container-image hide popup'>
            <img className="game-image" src="" alt="banner de jogo" />
            <div className='blur-image'></div>
          </div>
          <div className='image-background'></div>

        </div>
      </div>
    </header>
  );
}

export default GameEmoji