import { Ionicons } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ReviewMessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
            <Text style={styles.headerTitle}>Danh sách blog</Text>
            <TouchableOpacity>
                <Icon name="more-vert" size={24} color="#333" />
            </TouchableOpacity>
        </View>
      
      <View style={styles.content}>
        <View style={styles.messageHeader}>
          <Image 
            source={{ uri: 'https://dummyimage.com/40x40/f5f5f5/333333?text=JC' }} 
            style={styles.avatar}
            referrerPolicy="no-referrer"
          />
          <View style={styles.messageInfo}>
            <Text style={styles.senderName}>Jane Cooper</Text>
            <Text style={styles.messageTime}>2 phút trước</Text>
          </View>
        </View>
        
        <View style={styles.messageContent}>
          <Text style={styles.messageText}>
            Tôi có thể giúp gì cho bạn hôm nay? Tôi đang tìm kiếm một số thông tin về sản phẩm mới của công ty. Bạn có thể cung cấp cho tôi một số chi tiết không? Tôi rất quan tâm đến việc tìm hiểu thêm về các tính năng và lợi ích của sản phẩm này. Cảm ơn bạn đã dành thời gian để đọc tin nhắn của tôi. Tôi mong được nghe phản hồi từ bạn sớm nhất có thể. Chúc bạn một ngày tốt lành!
          </Text>
        </View>
        
        <View style={styles.mediaSection}>
          <Image 
            source={{ uri: 'https://dummyimage.com/300x200/333333/ffffff?text=Media+Content' }} 
            style={styles.mediaImage}
            referrerPolicy="no-referrer"
          />
          <View style={styles.mediaControls}>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="play-back" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="pause" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="play-forward" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        
        <Text style={styles.footerText}>Bài hát: Trang ta rồi thì nói đó của em</Text>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.actionBtn, styles.rejectBtn]}>
            <Text style={styles.rejectText}>Từ chối</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, styles.approveBtn]}>
            <Text style={styles.approveText}>Chấp nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    maxWidth: 768,
    alignSelf: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '33%',
    paddingRight: 40,
    paddingTop: 50,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    justifyContent: 'space-between',
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  messageInfo: {
    flex: 1,
  },
  senderName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
  },
  messageContent: {
    marginBottom: 20,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
  },
  mediaSection: {
    position: 'relative',
    marginBottom: 16,
  },
  mediaImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  mediaControls: {
    position: 'absolute',
    top: '50%',
    left: '44%',
    transform: [{ translateX: -60 }, { translateY: -20 }],
    flexDirection: 'row',
    gap: 20,
  },
  controlButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  rejectBtn: {
    backgroundColor: '#f5f5f5',
  },
  approveBtn: {
    backgroundColor: '#FF69B4',
  },
  rejectText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  approveText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default ReviewMessageScreen;
