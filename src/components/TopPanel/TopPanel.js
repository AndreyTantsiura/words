import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import saveWords from "../../redux/actions/save-words-action";

export class TopPanel extends Component {
  render() {
    return (
      <div>
        <div className="top-panel">
          <Link to="/">WordExtractionAdmin</Link>
          <button onClick={this.props.saveWords}>Saves</button>
        </div>
      </div>
    );
  }
}

const getDispatchToProps = (dispatch) => {
  return {
    saveWords: () => dispatch(saveWords("http://localhost:4004/words")),
  };
};

export default connect(null, getDispatchToProps)(TopPanel);
