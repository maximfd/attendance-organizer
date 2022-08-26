import React from 'react';
import './Generator.css';
import * as firebase from 'firebase';

class Generator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {testCode: '555'};
        this.generator = this.generator.bind(this);
    }

    

    generator(){
      const newCode = Math.round(Math.random()*10000).toString();
      this.setState({testCode: newCode});
      this.props.updateData(newCode);

      const codeRef = firebase.database().ref('code');
      codeRef.set({
        confirmCode: newCode
      });
      
        
      
      console.log(this.props.user);
    }

    render() {
        return (
          <div>
            <input 
              className='btnGen'
              type='button' 
              value='Сгенерировать QR-код' 
              onClick={() => {  
                  this.generator() 
                }
              } 
            />
          </div>
        );
      }
}

export default Generator;