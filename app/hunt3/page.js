"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hunt1 = () => {
	const [answer1, setAnswer1] = useState("");
	const [team, setTeam] = useState(null);

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (answer1 === "ABC") {
			setTeam({ ...team, hunt3: true });
			const data = { ...team, hunt3: true };

			localStorage.setItem("team", JSON.stringify(data));

			router.push("/hunt4");
		} else {
			alert("Galat ho sir.Retry karo please");
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
							QUEST 3
						</h4>
						<div className="text-xl m-4">
							Download the encrypted CSV file provided below. Your
							task is to scatter plot the data points and uncover
							the hidden message within.
							<br /> <br />
							Each point represents a fragment of the sacred words
							that will lead you closer to defeating the villain's
							schemes.
							<br />
							<br />
							Use your keen coding skills to decode the message
							and input it into the text box below. Only those who
							unlock the secret words shall advance to the next
							stage of this perilous adventure.
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
						<label className="text-[#FFD700] ">
							Ensure that there are no whitespaces
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
