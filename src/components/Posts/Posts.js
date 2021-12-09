import TopPanel from "../TopPanel/TopPanel";
import LeftPanel from "../LeftPanel/LeftPanel";
import React, { Component } from "react";
import { connect } from "react-redux";
import gettoWordsCollection from "../../redux/actions/get-to-words-action";
import PostItem from "./PostItem";

export class Posts extends Component {
  componentDidMount() {
    const url = "http://localhost:4004/words";
    this.props.gettoWordsCollection(url);
  }

  render() {
    const { words } = this.props;
    return (
      <div>
        <TopPanel />
        <div className="admin-page">
          <LeftPanel />
          <div className="content">
            {words.map((word, index) => (
              <PostItem key={index} word={word} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const getStateToprops = (state) => {
  return {
    words: state.getToWordsReducer,
  };
};

const getDispatchToProps = (dispatch) => {
  return {
    gettoWordsCollection: (url) => dispatch(gettoWordsCollection(url)),
  };
};

export default connect(getStateToprops, getDispatchToProps)(Posts);
