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

const Game = ({ name, image, release, id, imagePrev }) => {
  const stringPathId = id.toString()
  // Load Detail Handler

  const dispatch = useDispatch()

  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetail(id))
  }

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
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
