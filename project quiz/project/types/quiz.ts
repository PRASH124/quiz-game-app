export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  image: string;
  questions: Question[];
}

export interface QuizResult {
  correct: number;
  incorrect: number;
  total: number;
}