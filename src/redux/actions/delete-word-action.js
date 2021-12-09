import { DELETE_WORD } from "../types";
import axios from "axios";

const delItem = (word) => {
  return {
    type: DELETE_WORD,
    payload: word,
  };
};

function deleteWord(url) {
  return (dispatch) => {
    axios.delete(url).then(({ data }) => dispatch(delItem(data)));
  };
}

export default deleteWord;
