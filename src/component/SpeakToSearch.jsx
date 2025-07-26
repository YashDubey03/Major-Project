// # Initial project setup with speech recognition and UI components
import React, { useState, useRef } from 'react';
import { LuSearch, LuMic } from "react-icons/lu";
import { BsChat } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";
import bgImage from '../assets/AI.jpg'; 
import "./SpeakToSearch.css";

const SpeakToSearch = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [audioUrl, setAudioUrl] = useState(null);  // 👉 state for audio output
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // ✅ 1. Start Speech Recognition
  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      console.log("Transcript:", result);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  // ✅ 2. Start Audio Recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);  // 👉 set audio URL to state
        console.log("Audio URL:", url);
      };

      mediaRecorderRef.current.start();
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  // ✅ 3. Combined handler
  const handleMicClick = () => {
    if (!isRecording) {
      setIsRecording(true);
      setAudioUrl(null); // clear previous audio
      startSpeechRecognition();
      startRecording();
    } else {
      setIsRecording(false);
      mediaRecorderRef.current?.stop();
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '710px',
        width: '1520px',
      }}
    >
      <div
        className="card shadow text-center p-4 w-100"
        style={{
          maxWidth: '450px',
          border: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          borderRadius: '30px',
        }}
      >
        <div>
          <h1 className="card-title mb-3">AI - Speak To Search</h1>
          <p className="logo" style={{ marginTop: '40px', marginBottom: '35px', cursor: 'pointer' }} >
            <LuMic size={50} color={isRecording ? 'red' : 'black'} />
          </p>
          <p><strong>Transcript:</strong> {transcript}</p>

          <div className="btn-Container">
            <button className="button"><span><LuSearch size={23} /></span> Search Document</button>
            <button className="button"><span><BsChat size={23} /></span> Get Answer</button>
            <button className="button" style={{ marginLeft: '35%' }} onClick={handleMicClick}>
              <span><FaPlay size={23} /></span> {isRecording ? "Stop" : "Record"}
            </button>
          </div>

          {/* ✅ Audio playback output */}
          {audioUrl && (
            <div className="mt-4">
              <h6>Recorded Audio:</h6>
              <audio controls src={audioUrl} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakToSearch;
