// import { GET_NEWS, NEWS_SUCCESS, NEWS_FAILURE } from "../actions.types";

// const apiURL =
//   "https://newsapi.org/v2/top-headlines?country=in&apiKey=3be751f1162f420c8ac627d6a72a10a6";

// export const getNews = async (dispatch) => {
//   dispatch({
//     type: GET_NEWS,
//   });
//   try {
//     let response = await fetch(apiURL);
//     let data = await response.json();
//     console.log(data);
//     dispatch({
//       type: NEWS_SUCCESS,
//       payload: data,
//     });
//   } catch (e) {
//     dispatch({
//       type: NEWS_FAILURE,
//       payload: e.message,
//     });
//     console.log(e);
//   }
// };
