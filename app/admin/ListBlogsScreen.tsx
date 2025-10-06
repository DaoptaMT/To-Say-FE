import Icon from '@expo/vector-icons/MaterialIcons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ListBlogsScreen = () => {
  const blogs = [
    {
      id: 1,
      title: 'Bla Bla Bla Bla Bla Bla Bla Bla 2025',
      category: 'Thể loại | Tin tức | Công việc | Tài chính',
      image: 'https://dummyimage.com/60x60/f5f5f5/333333?text=Blog+Image',
    },
    {
      id: 2,
      title: 'Bla Bla Bla Bla Bla Bla Bla Bla 2025',
      category: 'Thể loại | Tin tức | Công việc | Tài chính',
      image: 'https://dummyimage.com/60x60/f5f5f5/333333?text=Blog+Image',
    },
    {
      id: 3,
      title: 'Bla Bla Bla Bla Bla Bla Bla Bla 2025',
      category: 'Thể loại | Tin tức | Công việc | Tài chính',
      image: 'https://dummyimage.com/60x60/f5f5f5/333333?text=Blog+Image',
    },
    {
      id: 4,
      title: 'Bla Bla Bla Bla Bla Bla Bla Bla 2025',
      category: 'Thể loại | Tin tức | Công việc | Tài chính',
      image: 'https://dummyimage.com/60x60/f5f5f5/333333?text=Blog+Image',
    },
    {
      id: 5,
      title: 'Bla Bla Bla Bla Bla Bla Bla Bla 2025',
      category: 'Thể loại | Tin tức | Công việc | Tài chính',
      image: 'https://dummyimage.com/60x60/f5f5f5/333333?text=Blog+Image',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Danh sách blog</Text>
            <TouchableOpacity>
                <Icon name="more-vert" size={24} color="#333" />
            </TouchableOpacity>
        </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.filterSection}>
          <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
            <Text style={[styles.filterText, styles.activeFilterText]}>Mới</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Thể loại</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Tin tức</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Công việc</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Tài chính</Text>
          </TouchableOpacity>
        </View>
        
        {blogs.map((blog) => (
          <TouchableOpacity key={blog.id} style={styles.blogItem}>
            <Image 
              source={{ uri: blog.image }} 
              style={styles.blogImage}
              referrerPolicy="no-referrer"
            />
            <View style={styles.blogContent}>
              <Text style={styles.blogTitle}>{blog.title}</Text>
              <Text style={styles.blogCategory}>{blog.category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf7f7ff',
    maxWidth: 768,
    alignSelf: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
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
  filterSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  activeFilter: {
    backgroundColor: '#FF6B6B',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  activeFilterText: {
    color: '#fff',
  },
  blogItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  blogImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  blogContent: {
    flex: 1,
    justifyContent: 'center',
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  blogCategory: {
    fontSize: 12,
    color: '#666',
  },
});

export default ListBlogsScreen;
