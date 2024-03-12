"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hunt2 = () => {
  const [answer1, setAnswer1] = useState("");
  const [team, setTeam] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer1.toUpperCase().replaceAll(' ','') === "NEUROTECHH") {
      setTeam({ ...team, hunt2: true });

      const data = { ...team, hunt2: true };
      console.log(data);
      localStorage.setItem("team", JSON.stringify(data));
      router.push("/hunt3");
    } else {
      alert("Please give a retry");
      setAnswer1("");
    }
  };
  useEffect(() => {
    const teamData = JSON.parse(localStorage.getItem("team")) || null;
    setTeam(teamData);
    if (teamData == null || teamData?.hunt1 === undefined) {
      router.push("/hunt1");
    }
    setTeam(JSON.parse(localStorage.getItem("team")));
  }, []);

  return (
    <>
      <div className="md:hidden border-white border-2 mx-8 my-8  rounded-lg shadow-md p-4 text-center">
        <p>Mobile pe mat dekho sir/mam. PC pe check karo pleaseeee</p>
      </div>

      <div className="hidden md:flex bg-[url('../public/landing.png')] bg-cover text-[#FFD700] min-h-screen  justify-center items-center">
        <div className="bg-[#131313] bg-[url('../public/shapess.png')] bg-cover p-8 text-gray-300 rounded-2xl shadow-md w-[1278px] h-[685px] flex flex-row justify-around items-center object-cover ">
          <div className="w-full m-4">
            <h4 className="text-4xl m-4 font-extrabold text-[#FFD700] ">
              QUEST 2
            </h4>
            <div className="text-xl m-4">
              In the midst of the celestial sphere's gentle caress, seek out the
              ethereal markers bearing the royal decree "Scan me," scattered
              across sanctuaries where the sun's radiance graces the earth.
              <br />
              <br /> These enigmatic symbols, shrouded in mystery, conceal the
              key to unlocking the next chapter of your quest. Amidst the play
              of light and shadow, amidst the whispers of hidden truths, let
              your intuition guide you to these mystical artifacts.
              <br />
              <br />
              Embrace the journey as you unravel the secrets that lie within the
              sunlit realms, venturing forth into the unknown with each step.
              <br />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[60%] mx-auto pr-20 space-y-8"
          >
            <input
              type="text"
              className="w-full px-3 py-4 text-xl border bg-transparent text-gray-300 rounded"
              value={answer1}
              onChange={(e) => setAnswer1(e.target.value)}
              placeholder="Enter your answer here"
            />
            <label className="text-[#FFD700] ">
              Just the first word you see on the site
            </label>
            <button
              type="submit"
              className="bg-black hover:text-black transition-colors delay-150 hover:bg-[#FFD700] m-4 mt-8  animate-infinite uppercase text-2xl border-2 border-[#FFD700]  py-2 px-6  block rounded hover: font-extrabold  tracking-wider text-[#FFD700] mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hunt2;
