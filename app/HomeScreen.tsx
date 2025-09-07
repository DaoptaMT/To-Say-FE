import Icon from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeScreen = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Changing Hiking Diary',
      author: 'John Doe',
      image: 'https://via.placeholder.com/300x200',
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      title: 'Travel Adventures',
      author: 'Jane Smith',
      image: 'https://via.placeholder.com/300x200',
      likes: 45,
      comments: 12,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Xin chào!</Text>
          <Text style={styles.username}>Nguyễn Văn A</Text>
        </View>
        <TouchableOpacity
        //   onPress={() => router.replace('/Notification')}
          >
          <Icon name="notifications" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" />
        <Text style={styles.searchPlaceholder}>Tìm kiếm bài viết...</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bài viết nổi bật</Text>
        {blogPosts.map(post => (
          <TouchableOpacity
            key={post.id}
            style={styles.postCard}
            // onPress={() => router.push('/Detail', {post})}
            >
            <Image source={{uri: post.image}} style={styles.postImage} />
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postAuthor}>Bởi {post.author}</Text>
              <View style={styles.postStats}>
                <View style={styles.stat}>
                  <Icon name="favorite" size={16} color="#FF6B6B" />
                  <Text style={styles.statText}>{post.likes}</Text>
                </View>
                <View style={styles.stat}>
                  <Icon name="comment" size={16} color="#666" />
                  <Text style={styles.statText}>{post.comments}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchPlaceholder: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  postContent: {
    padding: 15,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  postAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  postStats: {
    flexDirection: 'row',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  statText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
