"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hunt1 = () => {
  const [answer1, setAnswer1] = useState("");
  const [team, setTeam] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer1 === "031910") {
      setTeam({ ...team, hunt1: true });
      const data = { ...team, hunt1: true };

      localStorage.setItem("team", JSON.stringify(data));

      router.push("/hunt2");
    } else {
      alert("Galat ho sir.Retry karo please");
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

      <div className="hidden md:flex bg-[url('../public/landing.png')] bg-cover text-[#FFD700] min-h-screen  justify-center items-center">
        <div className="bg-[#131313] bg-cover p-8 rounded-md shadow-md w-[1278px] h-[685px] flex flex-row justify-around items-center object-cover ">
          <div className="w-full m-4">
            <h4 className="text-4xl m-4 font-extrabold">QUEST 1</h4>
            <div className="text-xl m-4">
              The sun rises and sets in the Coding Kingdom, casting spells of
              Morning, Afternoon, Evening, and Night. A magical barrier divides
              the day, known only to those who can standardize time itself.
              <br /> <br />
              Your quest: Reveal the secret by categorizing the 'Time of Day'
              into 'Morning', 'Afternoon', 'Evening', and 'Night'.
              <br /> <br />
              Put the count of Morning,Afternoon,Evening and Night(do not
              seperate the values using any kind of seperator)
              <br />
            </div>
            <a href="Quest 1 Excel.xlsx" download={"quest1_db.xlsx"}>
              <button
                type="button"
                className="bg-purple-600 m-4 mt-8 animate-wiggle animate-infinite uppercase text-2xl border-l-[#c6fc2b] border-l-4 border-[#c6fc2b] border-b-4 py-2 px-6  block rounded hover: font-extrabold italic tracking-wider text-[#FFD700]"
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
            <label>Ensure that there are no whitespaces</label>
            <button
              type="submit"
              className="bg-purple-600 uppercase text-2xl border-l-[#c6fc2b] border-l-4 border-[#c6fc2b] border-b-4 py-2 px-6 mx-auto block rounded hover: font-extrabold italic tracking-wider text-[#FFD700]"
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
