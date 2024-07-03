"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hunt1 = () => {
  const [answer1, setAnswer1] = useState("");
  const [team, setTeam] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer1 === "1") {
      setTeam({ ...team, hunt6: true });
      const data = { ...team, hunt6: true };

      localStorage.setItem("team", JSON.stringify(data));

      router.push("/hunt7");
    } else {
      const data = { ...team, hunt5: false };
      localStorage.setItem("team", JSON.stringify(data));
      alert("Wrong answer! .Replay snake game to unlock this quest again");
      router.push("/hunt5");
      setAnswer1("");
    }
  };
  useEffect(() => {
    const teamData = JSON.parse(localStorage.getItem("team")) || null;
    if (
      teamData == null ||
      teamData?.hunt5 === undefined ||
      teamData.hunt5 === false
    ) {
      router.push("/hunt5");
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
        <div className="bg-[#131313] bg-[url('../public/shapess.png')] bg-cover p-8 rounded-2xl shadow-md w-[1278px] min-h-[685px] flex flex-col justify-around items-center object-cover ">
          <div className="w-full m-4">
            <h4 className="text-4xl m-4 font-black   text-[#FFD700]">
              Round 6
            </h4>
            <div className="text-xl m-4">
              Using knowlege of Logic Gates and Boolean Algebra, you have to
              solve the following question!
              <br />
            </div>
          </div>
          <div className="flex w-full  items-end relative">
            {" "}
            <img
              src="/logicgates.svg"
              className="w-[69%] object-contain "
            ></img>
            <form
              onSubmit={handleSubmit}
              className="w-fit h-1/2  pr-20 space-y-8 absolute bottom-[8%] right-0"
            >
              <input
                type="text"
                className="w-fit px-3 py-4 text-xl border bg-transparent text-gray-300 rounded "
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
                placeholder="1/0"
              />
              <label className="text-[#FFD700] block">Input Format: X </label>

              <button
                type="submit"
                className="bg-black hover:text-black transition-colors delay-150 hover:bg-[#FFD700] mt-8  animate-infinite uppercase text-2xl border-2 border-[#FFD700]  py-2 px-6  block rounded hover: font-extrabold  tracking-wider text-[#FFD700]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hunt1;
