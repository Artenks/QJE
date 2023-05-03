import '../css/GameList.css';
import { init } from '../scripts/GenerateList';

function Home() {
  init();
  return (
      <header>

        <div className='container-list'></div>

      </header>
  );
}

export default Home