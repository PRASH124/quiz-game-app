import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { quizzes } from '../../data/quizzes';
import type { Quiz, Question, QuizResult } from '../../types/quiz';
import { Check, X } from 'lucide-react-native';

export default function QuizScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const quiz = quizzes.find((q) => q.id === id) as Quiz;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [results, setResults] = useState<QuizResult>({
    correct: 0,
    incorrect: 0,
    total: quiz.questions.length,
  });

  const currentQuestion = quiz.questions[currentQuestionIndex];

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true
    );

    return () => backHandler.remove();
  }, []);

  const handleOptionSelect = (optionId: string) => {
    if (!hasAnswered) {
      setSelectedOption(optionId);
    }
  };

  const handleCheck = () => {
    const selectedAnswer = currentQuestion.options.find(
      (option) => option.id === selectedOption
    );

    if (selectedAnswer?.isCorrect) {
      setResults((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setResults((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    setHasAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      router.push({
        pathname: '/quiz/results',
        params: results,
      });
    }
  };

  const getOptionStyle = (option: Question['options'][0]) => {
    if (!hasAnswered) {
      return option.id === selectedOption ? styles.selectedOption : styles.option;
    }

    if (option.isCorrect) {
      return styles.correctOption;
    }

    if (option.id === selectedOption && !option.isCorrect) {
      return styles.incorrectOption;
    }

    return styles.option;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.progress}>
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </Text>
        <Text style={styles.quizTitle}>{quiz.title}</Text>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.text}</Text>

        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={getOptionStyle(option)}
              onPress={() => handleOptionSelect(option.id)}
              disabled={hasAnswered}
            >
              <Text
                style={[
                  styles.optionText,
                  hasAnswered && option.isCorrect && styles.correctOptionText,
                  hasAnswered &&
                    option.id === selectedOption &&
                    !option.isCorrect &&
                    styles.incorrectOptionText,
                ]}
              >
                {option.text}
              </Text>
              {hasAnswered && option.isCorrect && (
                <Check size={20} color="#22c55e" />
              )}
              {hasAnswered && option.id === selectedOption && !option.isCorrect && (
                <X size={20} color="#ef4444" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {!hasAnswered ? (
          <TouchableOpacity
            style={[styles.button, !selectedOption && styles.buttonDisabled]}
            onPress={handleCheck}
            disabled={!selectedOption}
          >
            <Text style={styles.buttonText}>Check Answer</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>
              {currentQuestionIndex === quiz.questions.length - 1
                ? 'See Results'
                : 'Next Question'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  progress: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '500',
  },
  quizTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 4,
  },
  questionContainer: {
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 20,
  },
  optionsContainer: {
    gap: 12,
  },
  option: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6366f1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  correctOption: {
    backgroundColor: '#f0fdf4',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#22c55e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incorrectOption: {
    backgroundColor: '#fef2f2',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ef4444',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#111827',
  },
  correctOptionText: {
    color: '#22c55e',
  },
  incorrectOptionText: {
    color: '#ef4444',
  },
  buttonContainer: {
    padding: 20,
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#e5e5e5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});