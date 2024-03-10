"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Input, Select, Option } from "@material-tailwind/react";

const TeamRegistrationPage = () => {
  const [teamName, setTeamName] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const team = {
      teamName,
      course,
      year,
      member1,
      member2,
    };
    localStorage.setItem("team", JSON.stringify(team));
    alert("Registration succesful");
    router.push("/hunt1");
  };

  return (
    <>
      <div className="md:hidden border-white border-2 mx-8 my-8  rounded-lg shadow-md p-4 text-center">
        <p>Mobile pe mat dekho sir/mam. PC pe check karo pleaseeee</p>
      </div>
      <div className="hidden md:flex bg-[url('../public/landing.png')] bg-cover text-[#FFD700] min-h-screen  justify-center items-center">
        <div className="bg-[url('../public/popup.png')] bg-cover p-8 rounded-md shadow-md w-[1278px] h-[685px] flex flex-row justify-around items-center object-cover ">
          <div className="w-full text-[#131313]">/</div>
          <form
            onSubmit={handleSubmit}
            className="w-[60%] mx-auto pr-20 space-y-8"
          >
            <div className="mb-4">
              <label className="block mb-2 text-4xl uppercase font-bold py-2">
                Team Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-4 text-xl border bg-transparent text-gray-300 rounded"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
               
              />
            </div>
            <div className="mb-4 flex gap-4">
              <Select
                className="w-full px-3 py-4  bg-transparent text-gray-300 rounded"
                value={course}
                onChange={(val) => setCourse(val)}
                label="Select Course"
                labelProps={{
                  className: "text-sm uppercase text-[#FFD700] font-bold",
                }}
                menuProps={{
                  className: "bg-black text-gray-200",
                }}
                required
              >
                <Option value="btech">BTech</Option>
                <Option value="bti">BTI</Option>
                <Option value="mbatech">MBA Tech</Option>
              </Select>
              <Select
                className="w-full px-3 py-4 bg-transparent text-gray-300 rounded"
                value={year}
                onChange={(val) => setYear(val)}
                required
                label="Year"
                variant="outlined"
                color="yellow"
                labelProps={{
                  className: "text-sm uppercase text-[#FFD700] font-bold",
                }}
                menuProps={{
                  className: "bg-black text-gray-200",
                }}
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
                <Option value="6">6</Option>
              </Select>
            </div>

            <div className="mb-4 relative">
              <label className="absolute mb-2 text-sm z-20 inset-0 left-3 -top-2 bg-[#131313] w-fit h-fit uppercase font-bold ">
                Member 1
              </label>
              <Input
                type="text"
                className="w-full px-3 py-6 border bg-transparent placeholder:translate-y-6 text-gray-300 rounded"
                value={member1}
                onChange={(e) => setMember1(e.target.value)}
                label="Member 1"
                variant="outlined"
                color="yellow"
              />
            </div>
            <div className="mb-4 relative">
              <label className="absolute mb-2 text-sm z-20 inset-0 left-3 -top-2 bg-[#131313] w-fit h-fit uppercase font-bold ">
                Member 2
              </label>
              <Input
                type="text"
                className="w-full px-3 py-6  border bg-transparent placeholder:text-6xl  text-gray-300 border-gray-300 rounded"
                value={member2}
                onChange={(e) => setMember2(e.target.value)}
                label="Member 2"
                variant="outlined"
                color="yellow"
              />
            </div>
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

export default TeamRegistrationPage;
