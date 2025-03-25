import { Quiz } from '../types/quiz';

export const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript basics',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=60',
    questions: [
      {
        id: '1',
        text: 'Which of the following is a primitive data type in JavaScript?',
        options: [
          { id: '1', text: 'Array', isCorrect: false },
          { id: '2', text: 'Object', isCorrect: false },
          { id: '3', text: 'String', isCorrect: true },
          { id: '4', text: 'Function', isCorrect: false },
        ],
      },
      {
        id: '2',
        text: 'What is the output of typeof null?',
        options: [
          { id: '1', text: 'null', isCorrect: false },
          { id: '2', text: 'object', isCorrect: true },
          { id: '3', text: 'undefined', isCorrect: false },
          { id: '4', text: 'number', isCorrect: false },
        ],
      },
      {
        id: '3',
        text: 'Which method removes the last element from an array?',
        options: [
          { id: '1', text: 'pop()', isCorrect: true },
          { id: '2', text: 'push()', isCorrect: false },
          { id: '3', text: 'shift()', isCorrect: false },
          { id: '4', text: 'unshift()', isCorrect: false },
        ],
      },
      {
        id: '4',
        text: 'What is the correct way to check if a variable is an array?',
        options: [
          { id: '1', text: 'typeof variable === "array"', isCorrect: false },
          { id: '2', text: 'variable instanceof Array', isCorrect: false },
          { id: '3', text: 'Array.isArray(variable)', isCorrect: true },
          { id: '4', text: 'variable.isArray()', isCorrect: false },
        ],
      },
      {
        id: '5',
        text: 'Which operator is used for strict equality comparison?',
        options: [
          { id: '1', text: '==', isCorrect: false },
          { id: '2', text: '===', isCorrect: true },
          { id: '3', text: '=', isCorrect: false },
          { id: '4', text: '!=', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'React Native Basics',
    description: 'Test your knowledge of React Native fundamentals',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60',
    questions: [
      {
        id: '1',
        text: 'Which component is used to create a scrollable list in React Native?',
        options: [
          { id: '1', text: 'ScrollView', isCorrect: false },
          { id: '2', text: 'FlatList', isCorrect: true },
          { id: '3', text: 'ListView', isCorrect: false },
          { id: '4', text: 'List', isCorrect: false },
        ],
      },
      {
        id: '2',
        text: 'What is the purpose of the StyleSheet.create method?',
        options: [
          { id: '1', text: 'To create inline styles', isCorrect: false },
          { id: '2', text: 'To validate styles at runtime', isCorrect: false },
          { id: '3', text: 'To optimize style performance', isCorrect: true },
          { id: '4', text: 'To merge multiple styles', isCorrect: false },
        ],
      },
      {
        id: '3',
        text: 'Which hook is used to perform side effects in React Native?',
        options: [
          { id: '1', text: 'useEffect', isCorrect: true },
          { id: '2', text: 'useState', isCorrect: false },
          { id: '3', text: 'useCallback', isCorrect: false },
          { id: '4', text: 'useMemo', isCorrect: false },
        ],
      },
      {
        id: '4',
        text: 'What is the main difference between View and Fragment?',
        options: [
          { id: '1', text: 'View renders a DOM node, Fragment doesn\'t', isCorrect: true },
          { id: '2', text: 'Fragment renders a DOM node, View doesn\'t', isCorrect: false },
          { id: '3', text: 'There is no difference', isCorrect: false },
          { id: '4', text: 'Fragment is faster than View', isCorrect: false },
        ],
      },
      {
        id: '5',
        text: 'Which prop is used to handle press events on buttons?',
        options: [
          { id: '1', text: 'onClick', isCorrect: false },
          { id: '2', text: 'onPress', isCorrect: true },
          { id: '3', text: 'onTouch', isCorrect: false },
          { id: '4', text: 'onTap', isCorrect: false },
        ],
      },
    ],
  },
];