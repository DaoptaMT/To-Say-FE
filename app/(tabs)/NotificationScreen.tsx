import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationScreen = () => {
  const navigation = useNavigation();

  const notifications = [
    {
      id: 1,
      type: 'pending-approval',
      user: 'Admin',
      action: 'Lời nhắn của bạn sẽ sớm được duyệt',
      time: '5 phút trước',
      read: false,
    },
    {
      id: 2,
      type: 'comment',
      user: 'Admin',
      action: 'đã phản hồi tin nhắn của bạn',
      time: '1 giờ trước',
      read: false,
    },
    {
      id: 3,
      type: 'approved',
      user: 'Admin',
      action: 'Lời nhắn của bạn đã được gửi đi',
      time: '2 giờ trước',
      read: true,
    },
    {
      id: 4,
      type: 'draft',
      user: '',
      action: 'Bài viết của bạn đang ở dạng bản nháp',
      time: '1 ngày trước',
      read: true,
    },
    {
      id: 5,
      type: 'cancel',
      user: 'Admin',
      action: 'Lời nhắn của bạn đã bị từ chối',
      time: '2 ngày trước',
      read: true,
    },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'pending-approval':
        return 'hourglass-empty';
      case 'comment':
        return 'comment';
      case 'approved':
        return 'check-circle';
      case 'draft':
        return 'drafts';
      case 'cancel':
        return 'cancel';    
      default:
        return 'notifications';
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
        case 'pending-approval':
        return '#FFA500';

        case 'comment':
        return '#4CAF50';

        case 'approved':
        return '#2196F3';

        case 'draft':
        return '#9E9E9E';

        case 'cancel':
        return '#F44336';

        default:
        return '#666';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thông báo</Text>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {notifications.map(notification => (
          <TouchableOpacity
            key={notification.id}
            style={[
              styles.notificationItem,
              !notification.read && styles.unreadNotification,
            ]}>
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: getNotificationColor(notification.type)},
              ]}>
              <Icon
                name={getNotificationIcon(notification.type)}
                size={20}
                color="#FFFFFF"
              />
            </View>

            <View style={styles.notificationContent}>
              <Text style={styles.notificationText}>
                <Text style={styles.userName}>{notification.user}</Text>
                {' ' + notification.action}
              </Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>

            {!notification.read && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  unreadNotification: {
    backgroundColor: '#F8F9FA',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  userName: {
    fontWeight: 'bold',
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B6B',
  },
});

export default NotificationScreen;
