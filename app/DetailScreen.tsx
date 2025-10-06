import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// const DetailScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const {post} = route.params;
//   const [liked, setLiked] = useState(false);
//   const [comment, setComment] = useState('');

//   const comments = [
//     {
//       id: 1,
//       author: 'Alice Johnson',
//       content: 'Great post! Really enjoyed reading it.',
//       time: '1 giờ trước',
//     },
//     {
//       id: 2,
//       author: 'Bob Smith',
//       content: 'Thanks for sharing this valuable information.',
//       time: '2 giờ trước',
//     },
//   ];

//   const handleLike = () => {
//     setLiked(!liked);
//   };

//   const handleComment = () => {
//     if (comment.trim()) {
//       // Add comment logic here
//       setComment('');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Chi tiết bài viết</Text>
//         <TouchableOpacity>
//           <Icon name="share" size={24} color="#333" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView style={styles.content}>
//         <View style={styles.postHeader}>
//           <View style={styles.authorInfo}>
//             <View style={styles.avatar}>
//               <Text style={styles.avatarText}>{post.author.charAt(0)}</Text>
//             </View>
//             <View>
//               <Text style={styles.authorName}>{post.author}</Text>
//               <Text style={styles.postDate}>2 giờ trước</Text>
//             </View>
//           </View>
//           <TouchableOpacity>
//             <Icon name="more-vert" size={20} color="#666" />
//           </TouchableOpacity>
//         </View>

//         <Text style={styles.postTitle}>{post.title}</Text>
        
//         <Image source={{uri: post.image}} style={styles.postImage} />

//         <Text style={styles.postContent}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//         </Text>

//         <View style={styles.postActions}>
//           <TouchableOpacity
//             style={styles.actionButton}
//             onPress={handleLike}>
//             <Icon
//               name={liked ? 'favorite' : 'favorite-border'}
//               size={20}
//               color={liked ? '#FF6B6B' : '#666'}
//             />
//             <Text style={[styles.actionText, liked && styles.likedText]}>
//               {post.likes + (liked ? 1 : 0)}
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton}>
//             <Icon name="comment" size={20} color="#666" />
//             <Text style={styles.actionText}>{post.comments}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton}>
//             <Icon name="share" size={20} color="#666" />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.commentsSection}>
//           <Text style={styles.commentsTitle}>Bình luận</Text>
          
//           {comments.map(commentItem => (
//             <View key={commentItem.id} style={styles.commentItem}>
//               <View style={styles.commentAvatar}>
//                 <Text style={styles.commentAvatarText}>
//                   {commentItem.author.charAt(0)}
//                 </Text>
//               </View>
//               <View style={styles.commentContent}>
//                 <View style={styles.commentHeader}>
//                   <Text style={styles.commentAuthor}>{commentItem.author}</Text>
//                   <Text style={styles.commentTime}>{commentItem.time}</Text>
//                 </View>
//                 <Text style={styles.commentText}>{commentItem.content}</Text>
//               </View>
//             </View>
//           ))}
//         </View>
//       </ScrollView>

//       <View style={styles.commentInput}>
//         <TextInput
//           style={styles.input}
//           placeholder="Viết bình luận..."
//           value={comment}
//           onChangeText={setComment}
//           multiline
//         />
//         <TouchableOpacity
//           style={styles.sendButton}
//           onPress={handleComment}>
//           <Icon name="send" size={20} color="#FF6B6B" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default DetailScreen;

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // ❌ Code cũ bị lỗi nếu không truyền params:
  // const { post } = route.params;

  // ✅ Thay bằng dữ liệu mẫu khi test:
  const samplePosts = [
    {
      id: 1,
      author: 'Nguyễn Văn A',
      title: 'Chuyến đi Đà Lạt thật tuyệt vời!',
      image:
        'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=800&q=60',
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      author: 'Trần Thị B',
      title: 'Bí quyết học React Native hiệu quả 📱',
      image:
        'https://images.unsplash.com/photo-1587614382346-ac7e3b5f1f43?auto=format&fit=crop&w=800&q=60',
      likes: 34,
      comments: 10,
    },
    {
      id: 3,
      author: 'Lê Minh C',
      title: 'Tự học lập trình có khó không?',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60',
      likes: 20,
      comments: 7,
    },
  ];

  // ✅ Chọn ngẫu nhiên 1 post để hiển thị khi không có params:
  const post = route?.params?.post || samplePosts[Math.floor(Math.random() * samplePosts.length)];

  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');

  const comments = [
    {
      id: 1,
      author: 'Alice Johnson',
      content: 'Great post! Really enjoyed reading it.',
      time: '1 giờ trước',
    },
    {
      id: 2,
      author: 'Bob Smith',
      content: 'Thanks for sharing this valuable information.',
      time: '2 giờ trước',
    },
  ];

  const handleLike = () => setLiked(!liked);

  const handleComment = () => {
    if (comment.trim()) {
      // Thêm logic gửi bình luận ở đây
      setComment('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chi tiết bài viết</Text>
        <TouchableOpacity>
          <Icon name="share" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Nội dung */}
      <ScrollView style={styles.content}>
        <View style={styles.postHeader}>
          <View style={styles.authorInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{post.author.charAt(0)}</Text>
            </View>
            <View>
              <Text style={styles.authorName}>{post.author}</Text>
              <Text style={styles.postDate}>2 giờ trước</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Icon name="more-vert" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <Text style={styles.postTitle}>{post.title}</Text>
        <Image source={{uri: post.image}} style={styles.postImage} />
        <Text style={styles.postContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </Text>

        {/* Hành động */}
        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
            <Icon
              name={liked ? 'favorite' : 'favorite-border'}
              size={20}
              color={liked ? '#FF6B6B' : '#666'}
            />
            <Text style={[styles.actionText, liked && styles.likedText]}>
              {post.likes + (liked ? 1 : 0)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Icon name="comment" size={20} color="#666" />
            <Text style={styles.actionText}>{post.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Icon name="share" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Bình luận */}
        <View style={styles.commentsSection}>
          <Text style={styles.commentsTitle}>Bình luận</Text>
          {comments.map(commentItem => (
            <View key={commentItem.id} style={styles.commentItem}>
              <View style={styles.commentAvatar}>
                <Text style={styles.commentAvatarText}>
                  {commentItem.author.charAt(0)}
                </Text>
              </View>
              <View style={styles.commentContent}>
                <View style={styles.commentHeader}>
                  <Text style={styles.commentAuthor}>{commentItem.author}</Text>
                  <Text style={styles.commentTime}>{commentItem.time}</Text>
                </View>
                <Text style={styles.commentText}>{commentItem.content}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Ô nhập bình luận */}
      <View style={styles.commentInput}>
        <TextInput
          style={styles.input}
          placeholder="Viết bình luận..."
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleComment}>
          <Icon name="send" size={20} color="#FF6B6B" />
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  authorName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  postDate: {
    fontSize: 12,
    color: '#666',
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  postContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },
  likedText: {
    color: '#FF6B6B',
  },
  commentsSection: {
    marginBottom: 20,
  },
  commentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  commentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  commentAvatarText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  commentTime: {
    fontSize: 12,
    color: '#666',
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  commentInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 100,
  },
  sendButton: {
    padding: 10,
  },
});

export default DetailScreen;