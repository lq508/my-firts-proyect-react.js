import logo from './logo.svg';
import './App.css';
import Games from "./componentes/Games";


function App() {
  return (
    <div className="App">

    <div className="principal-container">
    <h1> These  are my favority games  </h1>
      <Games
      name="Halo"
      type="shooter, action"
      description="This game is very important in the history of shooter games, because it allows the player to enter a world in conflict, where humanity must fight for its survival"
      image="halo.jpg"
      />
      <Games
      name="Word of Warcraft"
      type="mmorpg"
      description="This game is very important in the history of shooter games, because it allows the player to enter a world in conflict, where humanity must fight for its survival"
      image="wow.jpeg"
      />
      <Games
      name="Monster Hunter"
      type="action, rpg"
      description="This game is very important in the history of shooter games, because it allows the player to enter a world in conflict, where humanity must fight for its survival"
      image="monster_hunter.png"
      />
    </div>


    </div>
  );
}

export default App;
