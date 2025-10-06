import Icon from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  const [email_or_phone, setEmail_or_phone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string | null>(null);

  // const handleLogin = async () => {
    // if (!email_or_phone || !password) {
    //   Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin");
    //   return;
    // }

    // try {
    //   setLoading(true);
    //   const res: AuthResponse = await login(email_or_phone, password, name ?? "");

    //   const user: User = res.user;
    //   console.log("Login success:", res);

    //   Alert.alert("Thành công", `Xin chào ${user.name}`);
      // router.replace("/HomeScreen");
    // } catch (error: any) {
    //   console.error("Login error:", error);
    //   Alert.alert("Đăng nhập thất bại", error.message || "Có lỗi xảy ra");
    // } finally {
    //   setLoading(false);
    // }
  // };

  const handleLogin = async () => {
    setLoading(true);
    Alert.alert("Đăng nhập thành công", "Xin chào bạn!");
    router.replace("/(tabs)/HomeScreen");
    setLoading(false);
  };

  const handleSocialLogin = () => {
    Alert.alert("Social Login", `Login with ${platform} - Feature coming soon!`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../Image/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Nhập email của bạn để</Text>
        <Text style={styles.subtitle}>tiếp tục.</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email hoặc SĐT"
            value={email_or_phone}
            onChangeText={setEmail_or_phone}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Icon
              name={showPassword ? "visibility" : "visibility-off"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => router.push("/auth/ForgotPasswordScreen")}
        >
          <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          )}
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Hoặc đăng nhập bằng</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin("Facebook")}
          >
            <Icon name="facebook" size={24} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin("Google")}
          >
            <Text style={styles.googleIcon}>G</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/RegisterScreen")}>
            <Text style={styles.registerLink}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf7f7ff",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 80,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    padding: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: "#FF6B6B",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 15,
    color: "#666",
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffffffff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  googleIcon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#DB4437",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  registerText: {
    color: "#666",
    fontSize: 14,
  },
  registerLink: {
    color: "#FF6B6B",
    fontSize: 14,
    fontWeight: "bold",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

export default LoginScreen;
