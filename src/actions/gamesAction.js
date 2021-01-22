import axios from 'axios'
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api'

// Action Creator

export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS

  const popularData = await axios.get(popularGamesURL())
  const upcomingData = await axios.get(upcomingGamesURL())
  const newGameData = await axios.get(newGamesURL())

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      newGames: newGameData.data.results,
      upcoming: upcomingData.data.results,
    },
  })
}
