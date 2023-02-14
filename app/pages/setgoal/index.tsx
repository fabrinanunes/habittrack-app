/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "../../styles/Welcome.module.css";
import Router from "next/router";

export default function Welcome() {
	return (
		<main>
			<h1>Set your Goal</h1>
			{/* <Image /> */}
			<div>
				<input type="number"/>
			</div>
			<div>
				<button>Daily</button>
				<button>Weekly</button>
				<button>Monthly</button>
			</div>
			<div>
				<p>Repeat everyday</p>
				<div>
					<button>S</button>
					<button>M</button>
					<button>T</button>
					<button>W</button>
					<button>T</button>
					<button>F</button>
					<button>S</button>
				</div>
			</div>
			<button>Continue</button>
		</main>
	);
}
