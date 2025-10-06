import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const onboardingData = [
  {
    id: 1,
    title: "Find The Trending Blogs That Are Being Lot Of Hype",
    description:
      "Discover the most popular and trending blog posts from various categories and stay updated with the latest content.",
    icon: "👩‍💼",
  },
  {
    id: 2,
    title: "Bring To A Blog Idea",
    description:
      "Transform your creative ideas into engaging blog posts and share your thoughts with the world.",
    icon: "🏆",
  },
  {
    id: 3,
    title: "Lets Have Some Great",
    description:
      "Join our community and start your blogging journey with amazing features and tools.",
    icon: "👮‍♂️",
  },
];

const OnboardingScreen = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace("./auth/LoginScreen");
    }
  };

  const handleSkip = () => {
    router.replace("./auth/LoginScreen");
  };

  const currentData = onboardingData[currentIndex];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{currentData.icon}</Text>
        </View>

        <Text style={styles.title}>{currentData.title}</Text>
        <Text style={styles.description}>{currentData.description}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>
            {currentIndex === onboardingData.length - 1
              ? "Get Started"
              : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF0F0",
    paddingHorizontal: 20,
  },
  skipButton: {
    alignSelf: "flex-end",
    marginTop: 50,
    marginBottom: 20,
  },
  skipText: {
    fontSize: 16,
    color: "#666",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  icon: {
    fontSize: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    lineHeight: 24,
  },
  footer: {
    paddingBottom: 50,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FF6B6B",
  },
  inactiveDot: {
    backgroundColor: "#E0E0E0",
  },
  nextButton: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
  },
  nextText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
