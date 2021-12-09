import { ADD_TEXT } from "../types";

const addTextAction = (text) => {
  return {
    type: ADD_TEXT,
    payload: text,
  };
};

export default addTextAction;
