import { SAVE_WORDS } from "../types";
import axios from "axios";

function save(words) {
  return {
    type: SAVE_WORDS,
    // payload: localStorage.setItem("wordslist", JSON.stringify(words)),
    payload: words,
  };
}

// export default function saveWords() {
//   return (dispatch, getState) => {
//     const word = getState().textParserReducer;
//     dispatch(save(word));
//   };
// }

export default function saveWords(url) {
  return (dispatch, getState) => {
    const words = getState().textParserReducer;
    axios.post(url, words).then(({ data }) => dispatch(save(data)));
  };
}
