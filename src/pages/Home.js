import '../css/Home.css';

function Home() {
  return (
      <header>
        <h1 className="logo">Que Jogo É?</h1>

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