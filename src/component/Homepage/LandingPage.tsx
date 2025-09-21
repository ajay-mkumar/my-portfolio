import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleShowPortfolio = () => {
    if (username.trim() !== "") {
      navigate(`/${username}`);
    }
  };

  const handleCreatePortfolio = () => {
    navigate("/auth/signup");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-8 p-4">
      <h1 className="text-4xl font-bold text-cyan-300">Welcome to Make Your Portfolio</h1>

      <div className="flex flex-col items-center gap-2">
        <p className="text-white">Want to create a portfolio?</p>
        <button
          onClick={handleCreatePortfolio}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Click Here
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-white">Enter username to see a portfolio</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="bg-white px-2 py-1 rounded-2xl"
        />
        <button
          onClick={handleShowPortfolio}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Show Portfolio
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
