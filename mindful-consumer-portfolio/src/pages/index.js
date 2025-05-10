import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mindful Digital Consumer</title>
        <meta name="description" content="Portfolio focusing on mindful digital consumption" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Mindful Digital Consumer</h1>
          <p className={styles.description}>
            Helping you make better digital consumption choices
          </p>

          <div className={styles.grid}>
            <a href="/projects/data-visualization" className={styles.card}>
              <h2>E-commerce Growth &amp; Impact &rarr;</h2>
              <p>Interactive visualization showing the correlation between e-commerce growth and credit card debt.</p>
            </a>

            <a href="/projects/ai-assistant" className={styles.card}>
              <h2>Mindful Shopping AI Assistant &rarr;</h2>
              <p>AI-powered tool that helps you evaluate whether an online purchase aligns with your values and budget.</p>
            </a>

            <a href="/projects/digital-wellbeing" className={styles.card}>
              <h2>Digital Wellbeing Tracker &rarr;</h2>
              <p>Tool to help track and visualize your online shopping habits and identify patterns for mindful consumption.</p>
            </a>

            <a href="/about" className={styles.card}>
              <h2>About Me &rarr;</h2>
              <p>Learn more about my mission to promote mindful digital consumption.</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a href="/contact">Contact Me</a>
          <a href="/projects">View All Projects</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </footer>
      </div>
    </>
  );
}