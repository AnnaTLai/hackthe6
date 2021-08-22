import './App.scss';
import React, {Component} from 'react';
import Room from './Room';



const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

// Used when generating any kind of tokens
// To set up environmental variables, see http://twil.io/secure
const twilioAccountSid = "AC76db11bbcac3bdaf7a668f273a7b3dce";
const twilioApiKey = "SK213e44cf59f538c0a5744d10073a3709";
const twilioApiSecret = "9uHtzwCGJZzz7FVEBasHgyROuVdZtjnD";

const identity = 'user';

// Create Video Grant
const videoGrant = new VideoGrant({
  room: 'cool room',
});

// Create an access token which we will sign and return to the client,
// containing the grant we just created
const token = new AccessToken(
  twilioAccountSid,
  twilioApiKey,
  twilioApiSecret,
  {identity: identity}
);
token.addGrant(videoGrant);

// Serialize the token to a JWT string
console.log(token.toJwt());





const { connect } = require('twilio-video');




class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          identity: '', // identity changes when a user enters their name
          room: null // null -> user is not part of a video room and they will be shown the lobby screen 
        }
        this.inputRef = React.createRef();
        this.joinRoom = this.joinRoom.bind(this);
        this.returnToLobby = this.returnToLobby.bind(this);
        this.updateIdentity = this.updateIdentity.bind(this);
        this.removePlaceholderText = this.removePlaceholderText.bind(this);
    }


    async joinRoom() {
        try {
            // const response = await fetch(`https://token-service-3779-dev.twil.io/${token}?identity=${this.state.identity}`);
            // const data = await response.json();
            const room = await connect(token.toJwt(), {
                name: 'cool-room',
                audio: true,
                video: true
            });
      
          this.setState({ room: room });
        } catch(err) {
          console.log(err);
        }
      }
    returnToLobby() {
        this.setState({ room: null });
    }

    removePlaceholderText() {
        this.inputRef.current.placeholder = '';
    }
      
    updateIdentity(event) {
        this.setState({
          identity: event.target.value
        });
    }

    render() {
        const disabled = this.state.identity === '' ? true : false;
    
        return (
        <div className="app">
            { 
              this.state.room === null
              ? <div className="lobby">
                   <input 
                     value={this.state.identity} 
                     onChange={this.updateIdentity} 
                     ref={this.inputRef}
                     onClick={this.removePlaceholderText} 
                     placeholder="What's your name?"/>
                     <button disabled={disabled} onClick={this.joinRoom}>Join Room</button>
                </div>
              : <Room returnToLobby={this.returnToLobby} room={this.state.room} />
            }
        </div>
        );
    }
      
}

export default App;
