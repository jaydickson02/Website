import React from 'react';


function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };


class resizeNavName extends React.Component {
    
    
    constructor(props) {
      super(props);
      this.state = {
        name: 'Jay Dickson'
      };
    }
    
    componentDidMount() {
        if(isMobileDevice()){
            this.setState({
                name: 'Home'
              });
        }
    }
        
      
    render() {
      return (
          <div>
         {this.state.name}
         </div>
      );
    }
  }

  export default resizeNavName;