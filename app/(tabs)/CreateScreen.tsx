import { useNavigation } from '@react-navigation/native';
import { router } from "expo-router";
import { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = () => {
    // Image picker logic would go here
    Alert.alert('Image Picker', 'Image selection feature coming soon!');
  };

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    Alert.alert('Success', 'Post published successfully!', [
      {text: 'OK', onPress: () => router.replace('/(tabs)/HomeScreen')},
    ]);
  };

  const handleSaveDraft = () => {
    Alert.alert('Success', 'Post saved as draft!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tạo mới lời nhắn</Text>
        <TouchableOpacity onPress={handleSaveDraft}>
          <Text style={styles.draftButton}>Lưu bản nháp</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* <View style={styles.authorInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>N</Text>
          </View>
          <View>
            <Text style={styles.authorName}>Nguyễn Văn A</Text>
            <TouchableOpacity style={styles.privacyButton}>
              <Icon name="public" size={16} color="#666" />
              <Text style={styles.privacyText}>Công khai</Text>
              <Icon name="arrow-drop-down" size={16} color="#666" />
            </TouchableOpacity>
          </View>
        </View> */}
        <br />
        <br />
        <br />
        <TextInput
          style={styles.titleInput}
          placeholder="Tiêu đề lời nhắn..."
          value={title}
          onChangeText={setTitle}
          multiline
        />

        <TextInput
          style={styles.contentInput}
          placeholder="Chia sẻ suy nghĩ của bạn..."
          value={content}
          onChangeText={setContent}
          multiline
          textAlignVertical="top"
        />

        {selectedImage && (
          <View style={styles.imageContainer}>
            <Image source={{uri: selectedImage}} style={styles.selectedImage} />
            <TouchableOpacity
              style={styles.removeImageButton}
              onPress={() => setSelectedImage(null)}>
              <Icon name="close" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.toolbar}>
          <TouchableOpacity
            style={styles.toolbarButton}
            onPress={handleSelectImage}>
            <Icon name="image" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Icon name="mic" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Icon name="music-note" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Icon name="card-giftcard" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
          <Text style={styles.publishButtonText}>Đăng bài</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  draftButton: {
    color: '#FF6B6B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  privacyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  privacyText: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 5,
  },
  titleInput: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    paddingVertical: 10,
  },
  contentInput: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    minHeight: 200,
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  removeImageButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbar: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  toolbarButton: {
    marginRight: 20,
    padding: 5,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  publishButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  publishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateScreen;