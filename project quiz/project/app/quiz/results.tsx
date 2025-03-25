import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Trophy, X, Chrome as Home } from 'lucide-react-native';

export default function ResultsScreen() {
  const router = useRouter();
  const { correct, incorrect, total } = useLocalSearchParams();
  const percentage = Math.round((Number(correct) / Number(total)) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.scoreContainer}>
          <Trophy size={64} color="#6366f1" />
          <Text style={styles.scoreText}>{percentage}%</Text>
          <Text style={styles.scoreLabel}>Your Score</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <View style={styles.correctBadge}>
              <Trophy size={24} color="#22c55e" />
            </View>
            <Text style={styles.statValue}>{correct}</Text>
            <Text style={styles.statLabel}>Correct</Text>
          </View>

          <View style={styles.statItem}>
            <View style={styles.incorrectBadge}>
              <X size={24} color="#ef4444" />
            </View>
            <Text style={styles.statValue}>{incorrect}</Text>
            <Text style={styles.statLabel}>Incorrect</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/')}
        >
          <Home size={20} color="#fff" />
          <Text style={styles.buttonText}>Back to Quizzes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16,
  },
  scoreLabel: {
    fontSize: 18,
    color: '#6b7280',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 40,
  },
  statItem: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    minWidth: 120,
  },
  correctBadge: {
    backgroundColor: '#f0fdf4',
    padding: 12,
    borderRadius: 999,
    marginBottom: 12,
  },
  incorrectBadge: {
    backgroundColor: '#fef2f2',
    padding: 12,
    borderRadius: 999,
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});