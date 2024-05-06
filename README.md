<h1 align="center">Hear Me Out.</h1>
<h4 align="center"><b>There is someone to listen, understand and help you.</b></h4>

[![status](https://img.shields.io/badge/status-pre--alpha-red.svg)](https://github.com/TheShubham99/HearMeOut)
[![GitHub issues](https://img.shields.io/github/issues/MovingBlocks/AdventureSite.svg)](https://github.com/TheShubham99/HearMeOut/issues/)

---

<p align="center">
<a href="#about">About</a>&nbsp;&nbsp;
<a href="#setup">Setup</a>&nbsp;&nbsp;
<a href="#testing">Testing</a>&nbsp;&nbsp;

</p>

---

<h2 align="center" id="about">About The Project</h2>

Hear Me Out is a platform where you can share your thoughts with experts. We choose our experts carefully. The Experts are some really kind-hearted people who are there to listen to your stories without any judgments. Every expert posses a common quality and that is they are **Good Listener**.

---

<h3 align="center" >Aim</h3>

The HMO platform is made for people to talk out the experiences, thoughts, and everything they wish to share anonymously with someone who will not judge them in any aspect. The platform connects you with some verified experts who will listen to your thoughts and express his/her opinion. The expert may not give you a proper solution for your problem as this is not a consultation platform, but he/she will be there for you to listen to your problems and share his/her thoughts.

> "Sometimes we don't need a solution but we need someone to hear us out."

This is where **'Hear Me Out'** will help you.

---

<h3 align="center" >For Whom?</h3>

The HMO platform will connect you with someone according to your age group (Minimum Age - 16). The audience is divided into two categories.

1. Young - Age Group (16 to 54)
2. Super Young - Age Group (55 +)

**(Feature under construction) -->**
_HMO rates the expert based on your facial expressions. (we don't monitor your expressions) But a AI based model tracks your facial expressions and rates the expert who is talking to you._

---

<h3 align="center" id="setup">Setup</h3>

_The Project runs on @Nibella serverless platform which hosts the frontend and takes care of everything in the backend._
_The front end is developed in React.js, Basic HTML/CSS and javascript, JQuery._
_The React Project is stored in `react-src` directory._
On Windows
_You can execute `yarn deploy` in `react-src` directory which will copy the contents from build directory to [web](https://github.com/TheShubham99/HearMeOut/tree/main/HMO/web) directory inside Nimbella Project (HMO)._

(Note - The above mentioned command works on windows using powershell.
The shell version is in progress.)

Setup Commands -
Use yarn of npm.

run `yarn` or `npm install` in the react-src directory.
Create a Nimbella acount and then a nim Project by following this helpful [tutorial](https://apigcp.nimbella.io/downloads/nim/nim.html).

---

<h3 align="center" id="testing">Testing</h3>

Once you setup the Nimbella project and react frontend, Try running following commands-

1. In `HMO` Directory run `nim project deploy HMO`.
2. In `react-src` Directory run `yarn start` to run a local server.

**To Test the front-end and API follow the following steps.**

> **For hackathon hosted at - https://ssahasra-rou5e5ge1fw-apigcp.nimbella.io/**

## To build and test -

<h4>Windows -</h4>

1. run `yarn deploy` or `npm deploy` inside your `react-src` directory.
2. In `HMO` directory run `nim project watch HMO`.

<h4>Other -</h4>

1. run `yarn build` or `npm build` inside your `react-src` directory.
2. Copy the `build` directory contents to the `HMO/web`.
3. In `HMO` directory run `nim project watch HMO`.

---

<h2 align="center">Note - <b>Firebase is used for authentication, follow the following tutorial and paste your firebase keys in .env file.</b></h2>

[Firebase Docs]("https://firebase.google.com/docs/auth/web/start")
