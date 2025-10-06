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

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleSendOTP = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }
    router.push('/auth/OTPScreen', {email});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Icon name="lock-reset" size={60} color="#FF6B6B" />
        <Text style={styles.title}>Quên mật khẩu</Text>
        <Text style={styles.subtitle}>
          Nhập email của bạn để nhận mã xác thực
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* <TouchableOpacity style={styles.sendButton} onPress={handleSendOTP}> */}
        <TouchableOpacity style={styles.sendButton} onPress={() => router.push('/auth/OTPScreen', {email})}>
          <Text style={styles.sendButtonText}>Gửi mã xác thực</Text>
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
    marginTop: 80,
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
    marginBottom: 30,
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
  sendButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
