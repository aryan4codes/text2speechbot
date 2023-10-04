import React, { useState } from "react";
import { Container, Segment } from "semantic-ui-react";
import './App.css'
import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
  const [text, setText] = useState('');
  const { speak, voices } = useSpeechSynthesis(); // Get the available voices

  // Function to set the voice based on its name
  const setVoice = (voiceName) => {
    const selectedVoice = voices.find(voice => voice.name === voiceName);
    if (selectedVoice) {
      speak({ text, voice: selectedVoice });
    }
  }

  return (
    <Container>
      <Segment>
        <h1>Text to Speech Converter in React</h1>
        <textarea className="textAreaStyle" onChange={(e)=>{setText(e.target.value)}}></textarea>
        <button className="buttonStyle" onClick={() => speak({ text })}>Listen</button>
        <div>
          <h2>Select Voice:</h2>
          <select onChange={(e) => setVoice(e.target.value)}>
            {voices.map((voice, index) => (
              <option key={index} value={voice.name}>{voice.name}</option>
            ))}
          </select>
        </div>
      </Segment>
    </Container>
  );
}

export default App;
