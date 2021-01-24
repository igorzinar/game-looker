import React from 'react'

// Styling and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Redux
import { useSelector } from 'react-redux'

const GameDetail = () => {
  // Data
  const { game, screen } = useSelector((state) => state.detail)
  console.log(game.platforms)
  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="medea">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screen.results.map((screen) => (
            <img src={screen.image} key={screen.id} alt="image" />
          ))}
        </div>
      </Detail>
    </CardShadow>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f24d;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: #fae2e2;
  }
`

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #000;

  img {
    width: 100%;
  }
`
export default GameDetail
