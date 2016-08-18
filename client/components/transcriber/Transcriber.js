import React from 'react';
import { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

export default class Transcriber extends Component {
  constructor(props) {
    super(props);

    let compatible = true;
    if(!window.webkitSpeechRecognition) {
      compatible = false;
      console.info('The Transcription component has been disabled because your web browser does not support Speech Recognition.');
    }

    this.recognition = null;
    this.state = {
      recognized: '',
      compatible,
      isRecording: false
    };
  }

  componentDidMount() {
    if(this.state.compatible) {
      if(this.props.dataPath) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.dataPath, true);
        xhr.onreadystatechange = () => {
          if(xhr.readyState === 4) {
            if(xhr.status === 200) {
              this.wordTranscriptions = JSON.parse(xhr.responseText);
            } else {
              console.log('error');
            }
          }
        };
        xhr.send();
      }

      this.setupRecognition();
    }
  }

  setupRecognition() {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.onend = this.finishRecognition.bind(this);
    recognition.onresult = this.finishRecognition.bind(this);
    this.recognition = recognition;
  }

  beginRecognition() {
    if(this.state.isRecording) {
      this.finishRecognition();
    } else {
      this.recognition.onresult = this.processRecognition.bind(this);
      this.recognition.onend = this.finishRecognition.bind(this);
      this.recognition.start();
      this.setState({
        isRecording: true
      });
    }
  }

  processRecognition(event) {
    console.log('processrecog', event.results);

    if(!event.results) {
      this.setState({
        recognized: 'error'
      });
    } else {
      const recognized = event.results[event.results.length - 1][0].transcript;
      this.setState({
        recognized: event.results.length === 1 ? recognized : this.state.recognized + recognized
      });
      if(this.props.onTranscription) {
        this.props.onTranscription.call(null, recognized);
      }
    }
  }

  finishRecognition(event) {
    this.recognition.onend = this.recognition.onresult = null;
    this.recognition.stop();
    this.setState({
      isRecording: false
    });
  }

  render() {

    const name = classNames({
      'stop': this.state.isRecording,
      'microphone': !this.state.isRecording
    });

    const buttonText = this.state.compatible ?
      (!this.state.isRecording ? this.props.textStart : this.props.textStop) :
      'Your browser does not support Speech Recognition.';
    return (
      <button disabled={!this.state.compatible} className="btn btn-default" onClick={this.beginRecognition.bind(this)}>
        <FontAwesome className="white" name={name} size='1x'/>
      </button>
    );
  }
}

Transcriber.propTypes = {
  data: PropTypes.object,
  dataPath: PropTypes.string,
  onTranscription: PropTypes.func,
  textStart: PropTypes.string,
  textStop: PropTypes.string,
  textUnsupported: PropTypes.string,
  wrapTokens: PropTypes.string,
  wrapUnknown: PropTypes.string
};

Transcriber.defaultProps = {
  textStart: '🎤 Use Voice',
  textStop: '■ Stop when done',
  textUnsupported: '⚠ Your browser does not support Speech Recognition.',
  wrapTokens: '',
  wrapUnknown: ''
};
