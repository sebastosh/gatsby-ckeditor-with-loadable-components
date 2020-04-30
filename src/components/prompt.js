import React, { Component } from 'react'
import ReactDOM from "react-dom";

export default class prompt extends Component {

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.divFocus).focus();
        console.log("prompt -> componentDidMount -> this.refs.divFocus", this.refs.divFocus)
    }

    onKeyPressed = e => {
    console.log("keyPress", e.key)
        let keyStroke = e.key;
        let keyBoardKeys = [
          "Escape",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight"
        ];
    
        if (keyBoardKeys.includes(keyStroke)) {
          if (keyStroke === "Escape") {
            console.log("prompt -> Escape")
          }
        }
      };
    
      onKeyLifted = e => {
        if (e.key === "Escape") {
          this.props.togglePrompt()
        }
      }


    render() {

        return (
            <div role="textbox" className="prompter-text" tabIndex={-1}
            ref="divFocus" onKeyPress={this.onKeyPressed} onKeyUp={this.onKeyLifted} >
                <div role="textbox" aria-label="Prompter Copy" dangerouslySetInnerHTML={{ __html: this.props.data }} />
            </div>
        )
    }
}
