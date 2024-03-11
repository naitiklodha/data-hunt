"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hunt7 = () => {
	const [answer1, setAnswer1] = useState("");
	const [team, setTeam] = useState(null);
	const [gameRunning, setGameRunning] = useState(false);
	const [score, setScore] = useState(0);

	const router = useRouter();
	const handleStartGame = () => {
		setGameRunning(true);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (answer1 === "1") {
			setTeam({ ...team, hunt6: true });
			const data = { ...team, hunt6: true };
			localStorage.setItem("team", JSON.stringify(data));
			router.push("/hunt7");
		} else {
			alert("Incorrect answer. Please retry.");
			setAnswer1("");
		}
	};

	if (score >= 30) {
		setTeam({ ...team, hunt7: true });
		const data = { ...team, hunt7: true };
		localStorage.setItem("team", JSON.stringify(data));
		router.push("/hunt8");
	}

	useEffect(() => {
		const teamData = JSON.parse(localStorage.getItem("team")) || null;
		if (teamData == null) {
			router.push("/");
		} else {
			setTeam(JSON.parse(localStorage.getItem("team")));
		}
	}, []);

	useEffect(() => {
		const handleEndGame = (message) => {
			setGameRunning(false);
			alert(message);
		};

		if (gameRunning) {
			const board_border = "black";
			const board_background = "white";
			const snake_col = "lightblue";
			const snake_border = "darkblue";

			let snake = [
				{ x: 200, y: 200 },
				{ x: 190, y: 200 },
				{ x: 180, y: 200 },
				{ x: 170, y: 200 },
				{ x: 160, y: 200 },
			];

			// Horizontal velocity
			let dx = 10;
			// Vertical velocity
			let dy = 0;
			let scoreee = 0;

			let food_x;
			let food_y;

			let gameInterval;

			function main() {
				gameInterval = setInterval(() => {
					if (has_game_ended()) {
						clearInterval(gameInterval);
						handleEndGame("Game Over. You lost!");
						return;
					}

					clear_board();
					drawFood();
					move_snake();
					drawSnake();
				}, 100);
			}

			function clear_board() {
				const snakeboard = document.getElementById("snakeboard");
				const snakeboard_ctx = snakeboard.getContext("2d");
				snakeboard_ctx.fillStyle = "#131313";
				snakeboard_ctx.fillRect(
					0,
					0,
					snakeboard.width,
					snakeboard.height
				);
				snakeboard_ctx.strokeRect(
					0,
					0,
					snakeboard.width,
					snakeboard.height
				);
			}

			function drawSnake() {
				const snakeboard = document.getElementById("snakeboard");
				const snakeboard_ctx = snakeboard.getContext("2d");
				snake.forEach((snakePart) => {
					snakeboard_ctx.fillStyle = "#7f00ff";
					snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
					snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
				});
			}

			function drawFood() {
				const snakeboard = document.getElementById("snakeboard");
				const snakeboard_ctx = snakeboard.getContext("2d");
				snakeboard_ctx.fillStyle = "#ffd700";
				snakeboard_ctx.fillRect(food_x, food_y, 10, 10);
				snakeboard_ctx.strokeRect(food_x, food_y, 10, 10);
			}

			function has_game_ended() {
				for (let i = 4; i < snake.length; i++) {
					if (snake[i].x === snake[0].x && snake[i].y === snake[0].y)
						return true;
				}
				const hitLeftWall = snake[0].x < 0;
				const hitRightWall = snake[0].x > 400 - 10;
				const hitToptWall = snake[0].y < 0;
				const hitBottomWall = snake[0].y > 400 - 10;
				return (
					hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
				);
			}

			function random_food(min, max) {
				return (
					Math.round((Math.random() * (max - min) + min) / 10) * 10
				);
			}

			function gen_food() {
				food_x = random_food(0, 400 - 10);
				food_y = random_food(0, 400 - 10);
				snake.forEach((part) => {
					const has_eaten = part.x === food_x && part.y === food_y;
					if (has_eaten) gen_food();
				});
			}

			function move_snake() {
				const head = { x: snake[0].x + dx, y: snake[0].y + dy };
				snake.unshift(head);
				const has_eaten_food =
					snake[0].x === food_x && snake[0].y === food_y;
				if (has_eaten_food) {
					handle_eaten_food();
				} else {
					snake.pop();
				}
			}
			function handle_eaten_food() {
				scoreee += 10;
				setScore(scoreee);
				console.log(score);
				gen_food();
			}

			const change_direction = (event) => {
				const LEFT_KEY = 37;
				const RIGHT_KEY = 39;
				const UP_KEY = 38;
				const DOWN_KEY = 40;

				if (event.keyCode === LEFT_KEY && dx !== 10) {
					dx = -10;
					dy = 0;
				}
				if (event.keyCode === UP_KEY && dy !== 10) {
					dx = 0;
					dy = -10;
				}
				if (event.keyCode === RIGHT_KEY && dx !== -10) {
					dx = 10;
					dy = 0;
				}
				if (event.keyCode === DOWN_KEY && dy !== -10) {
					dx = 0;
					dy = 10;
				}
			};

			document.addEventListener("keydown", change_direction);

			gen_food();
			main();

			return () => {
				clearInterval(gameInterval);
				document.removeEventListener("keydown", change_direction);
			};
		}
	}, [gameRunning]);

	return (
		<>
			<div className="md:hidden border-white border-2 mx-8 my-8  rounded-lg shadow-md p-4 text-center">
				<p>Do not play on mobile. Please use a PC.</p>
			</div>

			<div className="hidden md:flex bg-[url('../public/landing.png')] bg-cover text-gray-300 min-h-screen  justify-center items-center">
				<div className="bg-[#131313] bg-[url('../public/shapess.png')] bg-cover p-8 rounded-2xl shadow-md w-[1278px] min-h-[685px] flex flex-col justify-around items-center object-cover ">
					<div className="w-full m-4">
						<h4 className="text-4xl m-4 font-black   text-[#FFD700]">
							QUEST 6
						</h4>
						<div className="text-xl m-4">
							Get 100 Points In this Snake Game!
							<br />
						</div>
						<button
							className="bg-purple-600 uppercase text-2xl border-l-[#c6fc2b] border-l-4 border-[#c6fc2b] border-b-4 py-2 px-6 m-4 block rounded hover: font-extrabold italic tracking-wider text-[#FFD700]"
							onClick={handleStartGame}
						>
							Start Game
						</button>
					</div>
					<div
						id="score"
						className="text-[#FFD700] block text-2xl text-bold"
					>
						{score}
					</div>
					<canvas id="snakeboard" width="600" height="400"></canvas>
				</div>
			</div>
		</>
	);
};

export default Hunt7;
