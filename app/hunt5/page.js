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
		if (answer1 === "LOOKCLOSER") {
			alert("Hooray you have completed quest 5 too");
			setTeam({ ...team, hunt5: true });

			const data = { ...team, hunt5: true };
			console.log(data);
			localStorage.setItem("team", JSON.stringify(data));
			router.push("/hunt-6");
		} else {
			alert("Galat ho sir.Retry karo please");
			setAnswer1("");
		}
	};
	useEffect(() => {
		const teamData = JSON.parse(localStorage.getItem("team")) || null;
		setTeam(teamData);
		if (teamData == null || teamData?.hunt4 === undefined) {
			router.push("/hunt4");
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
						<h4 className="text-4xl m-4 font-extrabold">QUEST 4</h4>
						<div className="text-4xl m-4">
							<br />
							WIP SIRJI
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
						<label className="text-[#FFD700] block">
							Ensure that there are no whitespaces
						</label>
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

export default Hunt2;
