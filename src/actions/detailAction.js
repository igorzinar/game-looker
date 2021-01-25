import axios from 'axios'
import { gameDetailsURL, gameScreenshotURL, storeGamesURL } from '../api'

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  })
  const detailData = await axios.get(gameDetailsURL(id))
  const screenShotData = await axios.get(gameScreenshotURL(id))
  const storesData = await axios.get(storeGamesURL(id))
  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
      stores: storesData.data.results,
    },
  })
}
