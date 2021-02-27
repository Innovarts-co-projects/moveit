
import { ChallengeBox } from '../components/ChallengeBox';
import { ChallengesContext, ChallengesProvider } from "../contexts/ChallengesContext";
import { CompletedChalenges } from "../components/CompletedChalenges";
import { CountdownProvider } from "../contexts/CountdownContexts";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { GetServerSideProps } from "next";
import { Profile } from "../components/Profile";

import React from "react";
import Head from 'next/head';
import styles from '../styles/pages/home.module.css';


interface HomeProps {

  level: number;
  currentXp: number;
  challengesC: number;
}

export default function Home(props: HomeProps) {

  return (

    <ChallengesProvider
      level={props.level}
      currentXp={props.currentXp}
      challengesC={props.challengesC}
    >
      <div className={styles.container}>

        <Head>

          <title>Home | MoveIt</title>
        </Head>
        <div className={styles.startAnim}>
          <img src="assets/MoveItNoBack.png" />
        </div>
        <div id='Down'>

          <ExperienceBar />
        </div>

        <CountdownProvider>
          <section id='Down'>

            <div>

              <Profile />
              <CompletedChalenges />
              <Countdown />
            </div>

            <div>

              <ChallengeBox />
            </div>

          </section>

        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentXp, challengesC } = ctx.req.cookies;

  return {
    props: {

      level: Number(level ?? 1),
      currentXp: Number(currentXp ?? 0),
      challengesC: Number(challengesC ?? 0)
    }
  }
}