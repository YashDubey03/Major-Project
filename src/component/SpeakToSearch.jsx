import React from 'react';
import { LuSearch } from "react-icons/lu";
import { BsChat } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";
import { LuMic } from "react-icons/lu";
import bgImage from '../assets/AI.jpg'; 
import "./SpeakToSearch.css";

const SpeakToSearch = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <div
        className="card shadow text-center p-4 w-100"
        style={{
          maxWidth: '450px',
          margin: '0 25rem',
          border:'none',
           backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
          borderRadius:'30px',
        }}
      >
        <div>
          <h1 className="card-title mb-3">AI - Speak To Search</h1>
          <p className="logo" style={{ marginTop: '40px', marginBottom: '35px' }}>
            <LuMic size={50} />
          </p>

          <div className="btn-Container">
            <button className="button">
              <span><LuSearch size={23} /></span> Search Document
            </button>
            <button className="button">
              <span><BsChat size={23} /></span> Get Answer
            </button>
            <button className="button" style={{ marginLeft: '35%' }}>
              <span><FaPlay size={23} /></span> Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakToSearch;
