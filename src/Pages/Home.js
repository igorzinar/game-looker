import React, { useEffect } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

// Components
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'

// Styling and Animation
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { fadeIn } from '../animations'
import { useLocation } from 'react-router-dom'

const Home = () => {
  // Get the current location
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]

  // FETCH GAMES
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  // Get data from redux state
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  )

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  // onClick={dispatch(loadDetail(game.id))}
                  name={game.name}
                  image={game.background_image}
                  release={game.released}
                  id={game.id}
                  key={game.id}
                  platforms={game}
                />
              ))}
            </Games>
          </div>
        ) : (
          ''
        )}
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              image={game.background_image}
              release={game.released}
              id={game.id}
              key={game.id}
              platforms={game}
            />
          ))}
        </Games>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              // onClick={dispatch(loadDetail(game.id))}
              name={game.name}
              image={game.background_image}
              release={game.released}
              id={game.id}
              key={game.id}
              platforms={game}
            />
          ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              image={game.background_image}
              release={game.released}
              id={game.id}
              key={game.id}
              platforms={game}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem 2rem;
  h2 {
    padding: 5rem 0rem;
    color: #c7c7c7;
  }
  @media (max-width: 750px) {
    text-align: center;
    padding: 0rem 2rem 1rem;
  }
  @media (max-width: 350px) {
    text-align: center;
    h2 {
      font-size: 2rem;
    }
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 3rem;
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`
export default Home
