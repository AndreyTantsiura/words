import TopPanel from "../TopPanel/TopPanel";
import LeftPanel from "../LeftPanel/LeftPanel";
import React, { Component } from "react";
import { connect } from "react-redux";
import addTextAction from "../../redux/actions/add-text-action";
import exactWordsCollection from "../../redux/actions/text-parser-action";
import WordsList from "../WordsList";

export class NewPost extends Component {
  render() {
    return (
      <div>
        <TopPanel />
        <div className="admin-page">
          <LeftPanel />
          <div className="content">
            <textarea
              name=""
              cols="30"
              rows="10"
              onChange={(e) => this.props.addText(e.target.value)}
            ></textarea>
            <button
              className="prse-btn"
              onClick={this.props.exactWordsCollection}
            >
              Parse
            </button>
            <WordsList wordsList={this.props.words} />
          </div>
        </div>
      </div>
    );
  }
}

const getStateToProps = (state) => {
  return {
    text: state.addTextreducer,
    words: state.textParserReducer,
  };
};

const getDispatchToProps = (dispatch) => {
  return {
    addText: (e) => dispatch(addTextAction(e)),
    exactWordsCollection: () => dispatch(exactWordsCollection()),
  };
};

export default connect(getStateToProps, getDispatchToProps)(NewPost);
