import React, { useReducer, useEffect, useState } from 'react';
import { Button, Container, Card, ProgressBar } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
  feedback: '',
};
function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const feedback = isCorrect
        ? "Correct! 🎉"
        : `Incorrect! The correct answer is ${state.questions[state.currentQuestion].answer}`;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        feedback: feedback,
      };
    case "PROCEED":
      const nextQuestion = state.currentQuestion + 1;
      return {
        ...state,
        currentQuestion: nextQuestion,
        selectedOption: '',
        feedback: '',
        showScore: nextQuestion >= state.questions.length,
      };
    case "RESTART_QUIZ":
      return { ...initialState };
    default:
      return state;
  }
}
function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback } = state;
  const totalQuestions = questions.length;
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  useEffect(() => {
    if (!quizStarted) return;
    setTimeLeft(10);
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!showScore && !feedback) {
            dispatch({ type: "SELECT_OPTION", payload: "" });
            dispatch({ type: "NEXT_QUESTION" });
            setTimeout(() => {
              dispatch({ type: "PROCEED" });
            }, 1000);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestion, showScore, feedback, quizStarted]);
  useEffect(() => {
    if (showScore) {
      const highScore = localStorage.getItem("highScore");
      if (!highScore || score > parseInt(highScore)) {
        localStorage.setItem("highScore", score);
      }
    }
  }, [showScore, score]);
  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };
  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
    setTimeout(() => {
      dispatch({ type: "PROCEED" });
    }, 1000);
  };
  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimeLeft(10);
    setQuizStarted(false);
  };
  if (!quizStarted) {
    return (
      <Container fluid className="App">
        <Card className="quiz-card text-center">
          <h2 className="quiz-title">Welcome to the Quiz</h2>
          <Button variant="primary" onClick={() => setQuizStarted(true)}>
            Start Quiz
          </Button>
        </Card>
      </Container>
    );
  }
  if (currentQuestion >= totalQuestions || showScore) {
    const highScore = localStorage.getItem("highScore") || score;
    return (
      <Container fluid className="App">
        <Card className="quiz-card text-center">
          <h2 className="quiz-title">Your Score: {score} / {totalQuestions}</h2>
          <h4 className="quiz-subtitle">High Score: {highScore}</h4>
          <Button variant="primary" onClick={handleRestartQuiz}>
            Restart Quiz
          </Button>
        </Card>
      </Container>
    );
  }
  return (
    <Container fluid className="App">
      <Card className="quiz-card">
        <div className="d-flex justify-content-between">
          <h5 className="quiz-subtitle">Question {currentQuestion + 1} / {totalQuestions}</h5>
          <h5 className="quiz-subtitle">
            Time Left: <span style={{ color: timeLeft < 5 ? 'red' : '#34495e' }}>{timeLeft}s</span>
          </h5>
        </div>
        <h4 className="quiz-question mt-3">{questions[currentQuestion].question}</h4>
        <div className="mt-3">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant={selectedOption === option ? "success" : "outline-secondary"}
              className="m-2"
              onClick={() => handleOptionSelect(option)}>
              {option}
            </Button>
          ))}
        </div>
        {feedback && (
          <div className="mt-3">
            {feedback.startsWith("Correct") ? (
              <h5 className="text-success"><FaCheckCircle /> {feedback}</h5>
            ) : (
              <h5 className="text-danger"><FaTimesCircle /> {feedback}</h5>
            )}
          </div>
        )}
        <div className="mt-3">
          <Button
            variant="primary"
            onClick={handleNextQuestion}
            disabled={selectedOption === '' && feedback === ''}>
            {currentQuestion === totalQuestions - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        </div>
        <ProgressBar now={((currentQuestion + (feedback ? 1 : 0)) / totalQuestions) * 100} className="mt-3" />
      </Card>
    </Container>
  );
}
export default QuestionBank;