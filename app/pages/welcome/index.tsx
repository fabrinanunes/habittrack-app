/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "../../styles/Welcome.module.css";
import Router from "next/router";

export default function Welcome() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Getting Started</h1>
				<div className={styles.grid}>
					<div className={styles.card}>
						<Image
							src="/welcome-01.svg"
							alt="woman-image"
							width={250}
							height={250}
							className={styles.image}
						/>
						<h2>Track Your Goal</h2>
						<p>
							Don't worry if you have trouble determining your goals. We can
							help you determine your goals and track your goals.
						</p>
					</div>

					<div className={styles.card}>
						<Image
							src="/welcome-02.svg"
							alt="man-image"
							width={250}
							height={250}
							className={styles.image}
						/>
						<h2>Get Burn</h2>
						<p>
							Let's keep burning, to achive your goals. It hurts only
							temporarily, if you give up now you will be in pain forever.
						</p>
					</div>

					<div className={styles.card}>
						<Image
							src="/welcome-03.svg"
							alt="man-image"
							width={250}
							height={250}
							className={styles.image}
						/>
						<h2>Eat Well</h2>
						<p>
							Let's start a healthy lifestyle with us. We can determine your
							diet every day. Health eating is fun.
						</p>
					</div>

					<div className={styles.card}>
						<Image
							src="/welcome-04.svg"
							alt="man-image"
							width={250}
							height={250}
							className={styles.image}
						/>
						<h2>Morning Yoga</h2>
						<p>
							Yoga offers physical and mental health benefits for people of all
							ages and it improves balance and flexibility.
						</p>
					</div>
				</div>
				<div className={styles.divButton}>
					<button className={styles.button} onClick={() => Router.push("/")}>
						I'm ready &rarr;
					</button>
				</div>
			</main>
		</div>
	);
}
