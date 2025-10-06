import Icon from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleResetPassword = () => {
    if (!password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Alert.alert('Success', 'Password reset successfully!', [
      {text: 'OK', onPress: () => router.replace('/auth/LoginScreen')},
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Icon name="lock" size={60} color="#FF6B6B" />
        <Text style={styles.title}>Đặt lại mật khẩu</Text>
        <Text style={styles.subtitle}>Tạo mật khẩu mới cho tài khoản của bạn</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu mới"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}>
            <Icon
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Xác nhận mật khẩu"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIcon}>
            <Icon
              name={showConfirmPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}> */}
        <TouchableOpacity style={styles.resetButton} onPress={() => router.replace('/auth/LoginScreen')}>
          <Text style={styles.resetButtonText}>Đặt lại mật khẩu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 50,
    marginBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    color: '#333',
  },
  eyeIcon: {
    padding: 5,
  },
  resetButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
