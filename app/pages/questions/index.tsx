/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "../../styles/Welcome.module.css";
import Router from "next/router";

export default function Questions() {
	return (
		<main>
			<h1>Creating a new habit</h1>
			<section>
				<h2>What time do you usually wake up?</h2>
				<button>Get Started</button>
			</section>
			<section>
				<h2>When do you want to reflect on your day?</h2>
				<button>Get Started</button>
			</section>
			<section>
				<h2>Do you Procastinate?</h2>
				<button>Yes, and I'm ready to change that</button>
				<button>No, I easily finish the task at hand</button>
			</section>
			<section>
				<h2>What do you hope to achive with Main Habit?</h2>
				<button>I want to build good habits</button>
				<button>I want to be organized</button>
			</section>
			<section>
				<h2>Choose your first habit</h2>
				<div>
					{/* <Image src=""/> */}
					<button>Drink water</button>
				</div>
				<div>
					{/* <Image src=""/> */}
					<button>Exercise</button>
				</div>
				<div>
					{/* <Image src=""/> */}
					<button>Read a book</button>
				</div>
				<div>
					{/* <Image src=""/> */}
					<button>Study</button>
				</div>
				<div>
					{/* <Image src=""/> */}
					<button>Be grateful</button>
				</div>
				<div>
					{/* <Image src=""/> */}
					<button>Create my own habit</button>
				</div>
			</section>
		</main>
	);
}
