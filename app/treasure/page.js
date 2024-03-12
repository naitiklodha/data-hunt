"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hunt1 = () => {
	const [answer1, setAnswer1] = useState("");
	const [team, setTeam] = useState(null);

	const router = useRouter();

	useEffect(() => {
		const teamData = JSON.parse(localStorage.getItem("team")) || null;
		if (teamData == null || teamData?.hunt8 === undefined) {
			router.push("/hunt8");
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
				<div className="bg-[#131313] text-[#FFD700]  bg-[url('../public/shapess.png')] bg-cover p-8 rounded-2xl shadow-md w-[1278px] h-[685px] flex flex-row justify-around items-center object-cover ">
					<div className="flex flex-col gap-4 space-y-10">
						<h4 className="text-white text-3xl font-black mx-auto ">
							Congratulations team{" "}
							<span className="bg-[#7f00ff] p-2 rounded-xl">
								AlphaCoders {team?.teamName}
							</span>
						</h4>
						<h5 className="text-8xl text-center font-bold">
							AABB9900123TG
						</h5>
						<h4 className="text-white font-thin text-center text-3xl italic">
							🏃🏻 Run and write this code on white board 🏃🏿
						</h4>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hunt1;
