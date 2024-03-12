"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hunt2 = () => {
  const [answer1, setAnswer1] = useState("");
  const [team, setTeam] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer1.toUpperCase().replaceAll(" ", "") === "LOOKCLOSER") {
      setTeam({ ...team, hunt4: true });

      const data = { ...team, hunt4: true };
      console.log(data);
      localStorage.setItem("team", JSON.stringify(data));
      router.push("/hunt5");
    } else {
      alert("Please give a retry");
      setAnswer1("");
    }
  };
  useEffect(() => {
    const teamData = JSON.parse(localStorage.getItem("team")) || null;
    setTeam(teamData);
    if (teamData == null || teamData?.hunt3 === undefined) {
      router.push("/hunt3");
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
              QUEST 4
            </h4>
            <div className="text-xl m-4">
              <br />
              <form
                onSubmit={handleSubmit}
                className="w-[80%]  pr-20 space-y-8"
              >
                <label className="text-xl">
                  {" "}
                  Behold the enchanted image below. Within its intricate
                  patterns lies a hidden message, waiting to be discovered by
                  those with keen observation skills. Your task is to examine
                  the image closely and extract the secret message embedded
                  within its depths. Once deciphered, input the hidden message
                  into the text box provided, unlocking the pathway to further
                  enlightenment in your Code Quest.
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-4 text-xl border bg-black text-gray-300 rounded"
                  value={answer1}
                  onChange={(e) => setAnswer1(e.target.value)}
                  placeholder="Enter your answer here"
                />
                <label className="text-[#FFD700] bg-[#090909]">
                  Input Format: XYZ ABC (please note this is just for showing the format and does not represent count of letters for your answer)
                </label>
                <button
                  type="submit"
                  className="bg-black hover:text-black transition-colors delay-150 hover:bg-[#FFD700]  mt-8  animate-infinite uppercase text-2xl border-2 border-[#FFD700]  py-2 px-6  block rounded hover: font-extrabold  tracking-wider text-[#FFD700] "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <img
            src="/Quest 4.jpg"
            width={400}
            height={100}
            alt="kuch to hua hai"
          />
        </div>
      </div>
    </>
  );
};

export default Hunt2;
