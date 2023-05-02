import '../css/Home.css';
import { changeClick } from '../scripts/dayOrNight';

function Home() {
  return (
      <header>
        <h1 className="logo">Que Jogo É?</h1>

        <div onClick={changeClick} className='container-theme'>
          <i className="fas fa-moon"></i>
        </div>

        <div className="game-modes">
          <ul>
            <li>Titulo Criptografado</li>
            <span>~ Advinhe o nome do jogo por meio de emojis 😎</span>
            <a href="/emoji">Jogar</a>
          </ul>
        </div>
      </header>
  );
}

export default Home