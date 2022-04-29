import React from 'react';
import "../css/Games.css"

/*
This game is very important in the history of shooter games, because it allows the player to enter a world in conflict, where humanity must fight for its survival

*/

function Games(props){
  return(
    <div className="container-games">
      <img className="image-game"
      src={require(`../images/${props.image}`)}
      alt="Photo of the game"
      />
      <div className="container-text-games">
          <p className="name-game"> <strong>{props.name}</strong>  </p>
          <p className="tipe-game"> Type:{props.type} </p>
          <p className="text-game"> {props.description}   </p>

      </div>

    </div>

  );


}


export default Games;
