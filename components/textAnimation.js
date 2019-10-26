

import React from 'react';

//Material


let words = ['Javascript', 'Next.js', 'Python', 'React', 'Express', 'Node.js', 'MongoDB', 'Docker'];
let counter = 0;

class TextAnimation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        word: words[counter]
      };
    }
    
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.add(),
        1500
      );
    }

    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    add() {
        if(counter < words.length - 1){
            counter += 1;
        } else {
            counter = 0;
        }
        
      this.setState({
        word: words[counter]
      });
    }
    render() {
      return (
          <div>
         {this.state.word}
         </div>
      );
    }
  }

  export default TextAnimation;