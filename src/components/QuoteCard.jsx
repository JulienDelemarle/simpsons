import React from "react";

function QuoteCard({character}) {

  return (

      <div className='QuoteCard'>

        <img src={character.image} alt="" />

        <h3>{character.quote}</h3>

        <p>{character.character}</p>

        <p> {character.characterDirection}</p>

      </div>

    )

  ;

}


export default QuoteCard;