import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './Auth.css';

class Auth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        signin: true
      };
      
    }

    updateData = (value) => {
        this.setState({ signin: value })
    }

    

    render() {
        return(
            <div className="auth-card">
                {(this.state.signin) ?
                <SignIn updateData={this.updateData}/>
                : <SignUp updateData={this.updateData}/>
                }
                {/* <button
                    className="btnChange"
                    onClick={() => {
                        this.setState({ signin: !this.state.signin  });
                    }}
                >
                    {this.state}
                </button>  */}
                         
            </div>
        );
    }
}

export default Auth;