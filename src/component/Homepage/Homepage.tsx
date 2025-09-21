import { useEffect, useState } from "react";
import SkillSet from "../SkillSet/SkillSet";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchUserDetails } from "../../redux/userSlicse";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function Homepage() {
  const [modal, setModal] = useState("");
  const [flipIn, setFlipIn] = useState(false);
  const dispatch = useAppDispatch();
  const {userDetails, loading, error} = useAppSelector(state => state.user);
  const { username } = useParams();

  useEffect(() => {
    if (username) dispatch(fetchUserDetails(username));
  }, [dispatch, username]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipIn((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  if (loading) return <CircularProgress />
  if (error) return <p>{error}</p>

  return (
    <>
      {modal !== "skillset" && (
        <section className="flex flex-col-reverse md:flex-row items-center gap-10 justify-center min-h-screen px-6">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl font-medium text-white">
              Hello, I'm {userDetails?.firstName.toUpperCase()}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block text-white">Full Stack</span>
              <span className="block text-blue-500">Developer</span>
            </h1>
            <button
              onClick={() => window.open(`${userDetails?.resume}`, "_blank")}
              className="mt-5 bg-cyan-500 hover:bg-cyan-400 text-white pl-5 pr-5 px-2 py-2 shadow-lg hover:scale-120 transition duration-300"
            >
              Resume
            </button>
            <button
              onClick={() => setModal("skillset")}
              className="mt-5 ml-5 bg-cyan-500 hover:bg-cyan-400 text-white pl-5 pr-5 px-2 py-2 shadow-lg hover:scale-120 transition duration-300"
            >
              Skillset
            </button>
          </div>

          {/* Image Section */}
          <div
            className={`rounded-full border-[6px] border-gray-200 p-2 shadow-lg relative ${
              flipIn && "flip-in"
            }`}
          >
            <img
              src={`${userDetails?.profilePicture}`}
              loading="lazy"
              alt="Ajay Avatar"
              className="rounded-full object-cover w-60 h-60 md:w-72 md:h-72 bg-cyan-800"
            />
          </div>
        </section>
      )}

      {modal === "skillset" && <SkillSet />}
    </>
  );
}

export default Homepage;
