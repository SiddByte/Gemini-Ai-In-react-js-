import axios from "axios";
import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function GeminiService() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleApiCall(apiFunction) {
    setLoading(true);
    try {
      await apiFunction();
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  }

  async function generationAnswer() {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA4YWQUMzd4oi4MrsaLbF-vXZ4qeRDrLSI",
      {
        contents: [{ parts: [{ text: question }] }]
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  async function Translate() {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA4YWQUMzd4oi4MrsaLbF-vXZ4qeRDrLSI",
      {
        contents: [{ parts: [{ text: `Translate This Sentence In Hindi: ${question}` }] }]
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  async function questiongenrate() {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA4YWQUMzd4oi4MrsaLbF-vXZ4qeRDrLSI",
      {
        contents: [{ parts: [{ text: `Generate Some MCQ On : ${question}` }] }]
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  async function ExplanationTop() {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA4YWQUMzd4oi4MrsaLbF-vXZ4qeRDrLSI",
      {
        contents: [{ parts: [{ text: `Explain This : ${question}` }] }]
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  async function handleCodeExplanation() {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA4YWQUMzd4oi4MrsaLbF-vXZ4qeRDrLSI",
      {
        contents: [{ parts: [{ text: `Explain This Code : ${question}` }] }]
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  async function Assignment() {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA4YWQUMzd4oi4MrsaLbF-vXZ4qeRDrLSI",
      {
        contents: [{ parts: [{ text: `Create Some Question For College Assignment As A Teacher : ${question}` }] }]
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  async function GetAnswer() {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA4YWQUMzd4oi4MrsaLbF-vXZ4qeRDrLSI",
      {
        contents: [{ parts: [{ text: `Write A Answer Of This Question  : ${question}` }] }]
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  async function ShortThisPara() {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA4YWQUMzd4oi4MrsaLbF-vXZ4qeRDrLSI",
      {
        contents: [{ parts: [{ text: `Short This Paragraph  : ${question}` }] }]
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  async function Easysen() {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA4YWQUMzd4oi4MrsaLbF-vXZ4qeRDrLSI",
      {
        contents: [{ parts: [{ text: `Make Or Write In Easy Way / Language  : ${question}` }] }]
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  async function Menaing() {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA4YWQUMzd4oi4MrsaLbF-vXZ4qeRDrLSI",
      {
        contents: [{ parts: [{ text: `What Is The Meaning Of This  : ${question}` }] }]
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">AI Services For Teachers And Students</h1>
        <div className="mb-3">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="form-control"
            rows="5"
            placeholder="Enter your question..."
          ></textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-3">
          <button onClick={() => handleApiCall(generationAnswer)} className="btn btn-primary">Chat Only</button>
          <button onClick={() => handleApiCall(Translate)} className="btn btn-secondary">Translate</button>
          <button onClick={() => handleApiCall(questiongenrate)} className="btn btn-success">Question Generate</button>
          <button onClick={() => handleApiCall(ExplanationTop)} className="btn btn-info">Question Explanation</button>
          <button onClick={() => handleApiCall(handleCodeExplanation)} className="btn btn-warning">Code Explanation</button>
          <button onClick={() => handleApiCall(Assignment)} className="btn btn-danger">Assignment</button>
          <button onClick={() => handleApiCall(GetAnswer)} className="btn btn-success">Get Answer</button>
          <button onClick={() => handleApiCall(ShortThisPara)} className="btn btn-info">Short The Paragraph </button>
          <button onClick={() => handleApiCall(Easysen)} className="btn btn-warning">Easy Language</button>
          <button onClick={() => handleApiCall(Menaing)} className="btn btn-primary">Menaing</button>
          
        </div>
        {loading ? (
          <div className="loader text-center mb-3">Loading...</div>
        ) : (
          <div className="mb-3">
            <textarea
              value={answer}
              readOnly
              className="form-control"
              rows="10"
              placeholder="Generated answer will appear here..."
            ></textarea>
          </div>
        )}
      </div>
      <footer className="footer">
        <div className="links">
          <a href="https://docs.google.com/document/d/1H-pisrqlDLUUQCzpNOrey0U3SlC7sa6sujx_bYIVvl0/edit?usp=sharing">How To Use</a>
          <a href="https://docs.google.com/document/d/1EqfUDk7S-3G4KBNEm8tX0y34E_Hjg_EKP5DMhZP4r2A/edit?usp=sharing">How Can Use Ai</a>
        </div>
        <div className="developer">
          Developed by <a href="https://github.com/SiddByte">Siddharth</a>
        </div>
      </footer>
    </>
  );
}

export default GeminiService;
