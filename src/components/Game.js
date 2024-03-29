import React from 'react'

// Styling and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { smallImage } from '../util'
import { popup } from '../animations'

// Redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'

const Game = ({ name, image, release, id, imagePrev, platforms }) => {
  const stringPathId = id.toString()
  // Load Detail Handler

  const dispatch = useDispatch()

  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetail(id))
  }

  // const platformName = platforms.map((data) => data.platform.name)
  // const iconsPlatform = platformName.map((icon) => icon)
  // console.log(iconsPlatform)
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>

        <p>Release date: {release}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  )
}
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 15px 5px 20px rgba(255, 255, 255, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  h3 {
    color: #c7c7c7;
  }
  @media (max-width: 450px) {
    text-align: center;
    p {
      font-size: 1rem;
    }
  }
`

export default Game
