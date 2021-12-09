import React, { Component } from "react";

export class WordsList extends Component {
  render() {
    const { wordsList } = this.props;
    return (
      <div>
        {wordsList.map((word, i) => (
          <p key={i}>{word.text}</p>
        ))}
      </div>
    );
  }
}

export default WordsList;
