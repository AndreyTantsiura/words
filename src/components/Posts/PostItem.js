import React, { Component } from "react";
import { connect } from "react-redux";
import updateWord from "../../redux/actions/update-word-action";
import deleteWord from "../../redux/actions/delete-word-action";

export class PostItem extends Component {
  state = {
    post: this.props.word.post,
  };

  submitDesc = (e) => {
    const value = e.target.value;
    this.setState({ post: value });
  };

  clickToEdit = () => {
    const data = {
      post: this.state.post,
    };
    this.props.updateWord(
      `http://localhost:4004/words/${this.props.word._id}`,
      data
    );
  };

  clickDelete = () => {
    this.props.deleteWord(`http://localhost:4004/words/${this.props.word._id}`);
    window.location.reload();
  };
  render() {
    const { word } = this.props;
    const { post } = this.state;

    return (
      <div className="word-cart">
        <h4>{word.text}</h4>
        <textarea
          cols="30"
          rows="10"
          defaultValue={post}
          onChange={this.submitDesc}
        ></textarea>
        <div>
          <button onClick={this.clickToEdit}>Save</button>
          <button onClick={this.clickDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

const getDispatchToProps = (dispatch) => {
  return {
    updateWord: (url, data) => dispatch(updateWord(url, data)),
    deleteWord: (url) => dispatch(deleteWord(url)),
  };
};

export default connect(null, getDispatchToProps)(PostItem);
