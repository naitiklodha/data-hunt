"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hunt1 = () => {
  const [answer1, setAnswer1] = useState("");
  const [team, setTeam] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer1.replaceAll(" ", "") === "44106") {
      setTeam({ ...team, hunt1: true });
      const data = { ...team, hunt1: true };

      localStorage.setItem("team", JSON.stringify(data));

      router.push("/hunt2");
    } else {
      alert("Please give a retry!");
      setAnswer1("");
    }
  };
  useEffect(() => {
    const teamData = JSON.parse(localStorage.getItem("team")) || null;
    if (teamData == null) {
      router.push("/");
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
            <h4 className="text-4xl m-4 font-black   text-[#FFD700]">
              Round 1
            </h4>
            <div className="text-xl m-4">
              As dusk falls over the bustling markets of the Coding Kingdom, a
              mystery looms in the ledger of timestamps.
              <br /> <br />
              Now, in the quest to unravel this enigma, can you provide the
              counts for entries marked as 'Morning' and 'Night'? (seperate them
              with spaces)
              <br />
            </div>
            <a href="Quest 1.csv" download={"Quest 1.csv"}>
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
            <label className="text-[#FFD700] ">
              Input Format: XX XX
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

export default Hunt1;
