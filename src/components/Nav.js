import React, { useState } from 'react'
// Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'

import search from '../img/search.svg'
import { fadeIn } from '../animations'

// Redux and Routes
import { useDispatch } from 'react-redux'

import { fetchSearch } from '../actions/gamesAction'

const Nav = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState('')

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput('')
  }
  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' })
  }
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo>
        <img onClick={clearSearched} src={search} alt="logo" />
        <h1>Game Looker</h1>
        <form className="search">
          <input value={textInput} onChange={inputHandler} type="text" />
          <button onClick={submitSearch}>Search</button>
        </form>
      </Logo>
    </StyledNav>
  )
}

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  @media (max-width: 750px) {
    padding: 1rem 2rem;
  }
  input {
    width: 50%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    outline: none;
    @media (max-width: 450px) {
      width: 100%;
    }
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #5555fa;
    border-radius: 5px;
    margin-left: 1rem;
    color: #fff;
    transition: all 1s;
    &:hover {
      background: #fff;
      color: #5555fa;
    }
    @media (max-width: 450px) {
      margin-top: 1rem;
      margin: 1rem 0;
    }
  }
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export default Nav
