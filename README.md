
# Quiz Game - React Native

## Description
A mobile quiz game built using React Native that allows users to select a quiz, answer multiple-choice questions, and receive instant feedback. The game tracks the number of correct and incorrect answers and displays the results at the end.

## Features
- Two quizzes, each containing multiple-choice questions.
- Interactive UI with disabled check buttons until an option is selected.
- Immediate feedback on correctness after submitting an answer.
- Highlights correct answers in green and incorrect choices in red.
- Navigation between questions and final result summary.
- Prevents users from navigating back once a quiz starts.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/PRASH124/quiz-game-app.git
   cd quiz-game-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Steps to Run
1. Start the development server:
   ```sh
   npx expo start
   ```
2. To run the app on an Android emulator or device:
   ```sh
   npx expo run:android
   ```
3. To run the app on an iOS simulator (Mac users only):
   ```sh
   npx expo run:ios
   ```
4. Scan the QR code displayed in the terminal using the Expo Go app on your mobile device to run the app.

## Dependencies
- React Native
- React Navigation
- React Native Gesture Handler

## Folder Structure
```
/quiz-game-rn
│── /src
│   ├── components
│   ├── screens
│   ├── assets
│── App.js
│── package.json
│── README.md
```

## Usage
1. Select a quiz from the home screen.
2. Answer each question by selecting an option.
3. Submit your answer and receive instant feedback.
4. Proceed to the next question or finish the quiz.
5. View the final score on the result screen.


