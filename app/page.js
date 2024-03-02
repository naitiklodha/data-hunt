"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Input } from "@material-tailwind/react";

const TeamRegistrationPage = () => {
  const [teamName, setTeamName] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("team", JSON.stringify(teamName));
    router.push("/hunt");
  };

  return (
    <div className="bg-[url('../public/landing.png')] bg-cover text-yellow-400 min-h-screen flex justify-center items-center">
      <div className="bg-gray-900 p-8 rounded-md shadow-md">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block mb-2 text-xl uppercase font-bold ">
              Team Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border bg-transparent text-gray-300 border-gray-300 rounded"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Enter team name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Course</label>
            <select
              className="w-full px-3 py-2 border bg-transparent text-gray-300 border-gray-300 rounded"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="">Select Course</option>
              <option value="btech">BTech</option>
              <option value="bti">BTI</option>
              <option value="mbatech">MBATech</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Year</label>
            <select
              className="w-full px-3 py-2 bg-transparent text-gray-300 border border-gray-300 rounded"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option value="">Select Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="mb-4">
            <Input
              type="text"
              className="w-full px-3 py-2 border bg-transparent text-gray-300 border-yellow-400 rounded"
              value={member1}
              onChange={(e) => setMember1(e.target.value)}
              label="MEMBER 1"
              variant="outlined"
              color="yellow"
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              className="w-full px-3 py-2 border bg-transparent text-gray-300 border-gray-300 rounded"
              value={member2}
              onChange={(e) => setMember2(e.target.value)}
              label="MEMBER 2"
              variant="outlined"
              color="yellow"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 uppercase  border-l-yellow-400 border-l-4 border-b-yellow-400 border-b-4 text-white py-2 px-6 mx-auto block  rounded hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamRegistrationPage;
