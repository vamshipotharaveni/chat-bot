import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!userInput.trim()) {
      alert("Please enter a prompt!");
      return;
    }

    setIsLoading(true); // Show loading state
    try {
      const { GoogleGenerativeAI } = await import("@google/generative-ai");

      const genAI = new GoogleGenerativeAI("AIzaSyBoMlS8is8wW6fv0jwbqAlD3LTEj5esh0g");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(userInput);

      setResponse(result.response.text()); 
    } catch (error) {
      console.error("Error generating AI response:", error);
      setResponse("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="hero">
      <h1>Let's chat</h1>
      <div className="input-container">
      <div className="input-taking">
        <textarea
          placeholder="Enter your prompt here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          rows="auto"
        />
        </div>
        <div className="submit">
        <button onClick={handleGenerate} disabled={isLoading}>
          {isLoading ? "Response..." : "Generate Response"}
        </button>
        </div>
      </div>
      <div className="response-container">
        <h2></h2>
        <div className="respose">
        <p>{response || "No response yet. Enter a prompt above!"}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
