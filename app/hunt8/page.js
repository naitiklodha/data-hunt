"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hunt1 = () => {
  const [answer1, setAnswer1] = useState("");
  const [team, setTeam] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer1.toLowerCase().replaceAll(" ", "") === "macy's") {
      setTeam({ ...team, hunt8: true });
      const data = { ...team, hunt8: true };
      localStorage.setItem("team", JSON.stringify(data));
      router.push("/treasure");
    } else {
      alert("Galat ho sir.Retry karo please");
      setAnswer1("");
    }
  };
  useEffect(() => {
    const teamData = JSON.parse(localStorage.getItem("team")) || null;
    if (teamData == null || teamData?.hunt7 === undefined) {
      router.push("/hunt7");
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
              Round 8
            </h4>
            <div className="text-xl m-4">
              Navigate the arcane arts of data sorcery, where the ledger of the
              kingdom holds secrets untold.
              <br />
              <br />
              Cleanse its pages of deception, and identify the noble customer
              whose contributions shine brightest amidst the shadows of deceit.
              <br /> In your hands lies the power to restore balance to the
              realm.
            </div>
            <a href="QUEST 8.xlsx" download={"Quest 8.xlsx"}>
              <button
                type="button"
                className="bg-black hover:text-black transition-colors delay-150 hover:bg-[#FFD700] m-4 mt-8  animate-infinite uppercase text-2xl border-2 border-[#FFD700]  py-2 px-6  block rounded hover: font-extrabold  tracking-wider text-[#FFD700]"
              >
                Download Excel
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
