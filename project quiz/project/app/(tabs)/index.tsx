import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { quizzes } from '../../data/quizzes';
import { ChevronRight } from 'lucide-react-native';

export default function QuizList() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Available Quizzes</Text>
        <Text style={styles.subtitle}>Test your knowledge with our quizzes</Text>
      </View>
      
      {quizzes.map((quiz) => (
        <TouchableOpacity
          key={quiz.id}
          style={styles.quizCard}
          onPress={() => router.push(`/quiz/${quiz.id}`)}
        >
          <Image source={{ uri: quiz.image }} style={styles.quizImage} />
          <View style={styles.quizInfo}>
            <Text style={styles.quizTitle}>{quiz.title}</Text>
            <Text style={styles.quizDescription}>{quiz.description}</Text>
            <View style={styles.quizMeta}>
              <Text style={styles.questionCount}>
                {quiz.questions.length} Questions
              </Text>
              <ChevronRight size={20} color="#6366f1" />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  quizCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quizImage: {
    width: '100%',
    height: 160,
  },
  quizInfo: {
    padding: 16,
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  quizDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  quizMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  questionCount: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '500',
  },
});