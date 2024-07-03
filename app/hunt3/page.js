"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hunt1 = () => {
  const [answer1, setAnswer1] = useState("");
  const [team, setTeam] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer1.toLowerCase().replaceAll(" ", "") === "pass") {
      setTeam({ ...team, hunt3: true });
      const data = { ...team, hunt3: true };

      localStorage.setItem("team", JSON.stringify(data));

      router.push("/hunt4");
    } else {
      alert("Please give a retry");
      setAnswer1("");
    }
  };
  useEffect(() => {
    const teamData = JSON.parse(localStorage.getItem("team")) || null;
    if (teamData == null || teamData?.hunt2 === undefined) {
      router.push("/hunt2");
    } else {
    }

    setTeam(JSON.parse(localStorage.getItem("team")));
  }, []);

  return (
    <>
      <div className="md:hidden border-white border-2 mx-8 my-8  rounded-lg shadow-md p-4 text-center">
        <p>Mobile pe mat dekho sir/mam. PC pe check karo pleaseeee</p>
      </div>

      <div className="hidden md:flex bg-[url('../public/landing.png')] bg-cover text-gray-300 min-h-screen  justify-center items-center">
        <div className="bg-[#131313] bg-[url('../public/shapess.png')] bg-cover p-8 rounded-2xl shadow-md w-[1278px] h-[685px] flex flex-row justify-around items-center object-cover ">
          <div className="w-full m-4">
            <h4 className="text-4xl m-4 font-extrabold text-[#FFD700]">
              Round 3
            </h4>
            <div className="text-xl m-4">
              In the depths of the kingdom's archives lies a trove of data,
              encrypted in the language of the ancients.
              <br /> <br />
              Plotting these insights will reveal a hidden message, a beacon of
              light in the darkness that illuminates the path forward.
              <br />
              <br />
              Will you decipher its meaning and forge ahead in our quest?
              <br />
            </div>
            <a href="QUEST 3.csv" download={"quest3_db.csv"}>
              <button
                type="button"
                className="bg-black hover:text-black transition-colors delay-150 hover:bg-[#FFD700] m-4 mt-8  animate-infinite uppercase text-2xl border-2 border-[#FFD700]  py-2 px-6  block rounded hover: font-extrabold  tracking-wider text-[#FFD700]"
              >
                Download CSV
              </button>
            </a>
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
            <label className="text-[#FFD700] ">Input Format: XYZ</label>
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

export default Hunt1;
