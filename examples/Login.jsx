import React from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { withTracker, Meteor } from 'meteor-react-native';

class Login extends React.Component {

  state = {email:"", password:"", loading:false};

  onLogin = () => {
    let { email, password } = this.state;
    
    Meteor.loginWithPassword(email, password, err => {
      if(err) {
        Alert.alert("Error", err.reason);
      }
      else {
        // ...
      }
    });
  }

  render() {
    let { loggingIn } = this.props;
    
    return (
      <View>
         <Text>Login</Text>
         
         <TextInput value={this.state.email} onChangeText={email => this.setState({email})}/>
         
         <TextInput value={this.state.password} onChangeText={password => this.setState({password})}/>
         
         {loggingIn ?
           <Text>Loading...</Text>
         :
           <Button title="Login" onPress={this.onLogin}/>
         }
      </View>
    );
  }
}

export default withTracker(() => {
  return {
    loggingIn:Meteor.loggingIn()
  };
})(Login);
