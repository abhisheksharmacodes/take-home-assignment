import { Image, StyleSheet, View, Text, Animated, ScrollView, ImageBackground } from 'react-native';

import React, { useState, useRef, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const translateX = useRef(new Animated.Value(0)).current;
  const [tabIndex, setTabIndex] = useState(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -1000,
          duration: 30000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 30000,
          useNativeDriver: true,
        }),
      ])
    ).start();
    console.log(translateX)
  }, [translateX]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1, padding: 20, paddingTop: 30 }}>
        <Animated.Image
          source={require('../../assets/images/background.jpg')}
          style={{ height: 450, position: 'absolute', top: 0, left: 0, opacity: .6, transform: [{ translateX: translateX }] }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 24 }}>
          <View style={{ shadowColor: '#EFD84C', shadowOpacity: 1, shadowRadius: 10, elevation: 5 }}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={{ width: 96, height: 96, borderRadius: 4, zIndex: 0 }}
            />
            <Image
              source={require('../../assets/images/frame.png')}
              style={{ width: 101, height: 100, borderRadius: 4, zIndex: 1, position: 'absolute', top: 0, left: 0, shadowColor: '#EFD84C', shadowOpacity: 1, shadowOffset: { height: 10, width: 10 }, shadowRadius: 10 }}
            />
          </View>
          <View style={{ flexDirection: 'row', gap: 26 }}>
            <Image
              source={require('../../assets/images/share-icon.png')}
              style={{ width: 22, height: 24 }}
            />
            <Image
              source={require('../../assets/images/setting.png')}
              style={{ width: 24, height: 24, borderRadius: 40 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column', width: '100%', alignItems: 'center', gap: 16, marginTop: 16 }}>
            <View style={{ flexDirection: 'column', width: '100%' }}>
              <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                  <ThemedText type='defaultSemiBold' style={{ fontSize: 20, color: '#fff' }}>
                    @theo_from_hsr
                  </ThemedText>
                  <Image
                    source={require('../../assets/images/tick.png')}
                    style={{ width: 23, height: 23 }}
                  />
                </View>
                <View style={{ borderStyle: 'dashed', borderBottomColor: '#ffffff95', margin: 0, paddingBottom: 3, borderBottomWidth: 1, flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
                  <ThemedText type='subtitle' style={{ letterSpacing: 1, fontSize: 13, color: '#ffffff95' }}>EDIT PROFILE</ThemedText>
                  <Image
                    source={require('../../assets/images/edit.png')}
                    style={{ width: 12, height: 12, opacity: .5 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                <Image
                  source={require('../../assets/images/in.png')}
                  style={{ width: 18, height: 12, marginRight: 7 }}
                />
                <ThemedText type='subtitle' style={{ fontSize: 13, letterSpacing: 1, color: '#ffffffdd' }}>INDIA</ThemedText>
              </View>
            </View>
            <ThemedText style={{ fontSize: 16, width: '100%', color: '#ffffffdd' }}>
              18 y/o with high ambitions. want to build cool stuff!
            </ThemedText>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://via.placeholder.com/24' }}
              style={{ width: 16, height: 16, marginBottom: 8 }}
            />
            <Image
              source={{ uri: 'https://via.placeholder.com/24' }}
              style={{ width: 24, height: 24 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 8 }}>
            <Image
              source={require('../../assets/images/user.png')}
              style={{ width: 20, height: 20 }}
            />
            <ThemedText style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>2</ThemedText>
          </View>
          <ThemedText type='subtitle' style={{ letterSpacing: 1, fontSize: 12, color: '#ccc', marginTop:5 }}>FOLLOWING</ThemedText>
        </View>
      </ThemedView>
      <ThemedView style={{ flex: 1 }}>
        <ThemedView style={{ flexDirection: 'row', marginTop: 0 }}>
          <ThemedView
            style={{ ...styles.tab, borderBottomWidth: tabIndex === 1 ? 2 : 1, borderBottomColor: tabIndex === 1 ? '#00e68e' : '#444' }}
            onTouchEnd={() => setTabIndex(1)}
          >
            <Image
              source={tabIndex === 1 ? require('../../assets/images/collections1.png') : require('../../assets/images/collections2.png')}
              style={{ width: 22, height: 22 }}
            />
            <ThemedText type='subtitle' style={{ letterSpacing: 1, fontSize: 14, color: tabIndex === 1 ? '#00e68e' : '#ffffff80' }}>COLLECTIONS</ThemedText>
          </ThemedView>
          <ThemedView
            style={{ ...styles.tab, borderBottomWidth: tabIndex === 2 ? 2 : 1, borderBottomColor: tabIndex === 2 ? '#00e68e' : '#444' }}
            onTouchEnd={() => setTabIndex(2)}
          >
            <Image
              source={tabIndex === 2 ? require('../../assets/images/target2.png') : require('../../assets/images/target1.png')}
              style={{ width: 22, height: 22 }}
            />
            <ThemedText type='subtitle' style={{ letterSpacing: 1, fontSize: 14, color: tabIndex === 2 ? '#00e68e' : '#ffffff80' }}>MANAGE TAGS</ThemedText>
          </ThemedView>
        </ThemedView>
        {tabIndex === 1 ?
          <ThemedView key="collectionsGradient" style={{ paddingHorizontal: 18, paddingVertical: 26, flexDirection: 'row', flexWrap: 'wrap', gap: 18, backgroundColor:'lin#191B21' }}>
            <View style={styles.container}>
              <View style={styles.collection}>
                <View>
                  <View style={styles.collection_images}>
                    <View>
                      <Image
                        source={require('../../assets/images/posts/1.jpeg')}
                        style={styles.collection_image}
                      />
                      <Image
                        source={require('../../assets/images/posts/2.jpeg')}
                        style={styles.collection_image}
                      />
                    </View>
                    <View>
                      <Image
                        source={require('../../assets/images/posts/3.jpeg')}
                        style={styles.collection_image}
                      />
                      <Image
                        source={require('../../assets/images/posts/4.jpeg')}
                        style={styles.collection_image}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginVertical: 12, paddingLeft: 14 }}>
                  <Image
                    source={require('../../assets/images/like.png')}
                    style={{ width: 18, height: 16 }}
                  />
                  <ThemedText type='subtitle' style={{ fontSize: 13, color: '#ffffffaa', letterSpacing: 1 }}>LIKED (32)</ThemedText>
                </View>
              </View>
              <View style={{ ...styles.designerElement, width: 140, backgroundColor: '#ffffff15' }}></View>
              <View style={{ ...styles.designerElement, width: 120, backgroundColor: '#ffffff10' }}></View>
            </View>
            <View style={styles.container}>
              <View style={styles.collection}>
                <View style={styles.collection_images}>
                  <Image
                    source={require('../../assets/images/posts/5.jpeg')}
                    style={{ ...styles.collection_image, height: 134 }}
                  />
                  <Image
                    source={require('../../assets/images/posts/6.jpeg')}
                    style={{ ...styles.collection_image, height: 134 }}
                  />
                </View>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginVertical: 12, paddingLeft: 14 }}>
                  <Image
                    source={require('../../assets/images/save.png')}
                    style={{ width: 14, height: 22 }}
                  />
                  <ThemedText type='subtitle' style={{ fontSize: 13, color: '#ffffffaa', letterSpacing: 1 }}>SAVED (23)</ThemedText>
                </View>
              </View>
              <View style={{ ...styles.designerElement, width: 140, backgroundColor: '#ffffff15' }}></View>
              <View style={{ ...styles.designerElement, width: 120, backgroundColor: '#ffffff10' }}></View>
            </View>
            <View style={styles.container}>
              <View style={styles.collection}>
                <View style={styles.collection_images}>
                  <View>
                    <Image
                      source={require('../../assets/images/posts/7.jpeg')}
                      style={styles.collection_image}
                    />
                    <Image
                      source={require('../../assets/images/posts/8.jpg')}
                      style={styles.collection_image}
                    />
                  </View>
                  <Image
                    source={require('../../assets/images/posts/9.jpg')}
                    style={{ ...styles.collection_image, height: 134 }}
                  />
                </View>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginVertical: 12, paddingLeft: 14 }}>
                  <Image
                    source={require('../../assets/images/folder.png')}
                    style={{ width: 18, height: 16 }}
                  />
                  <ThemedText type='subtitle' style={{ fontSize: 13, color: '#ffffffaa', letterSpacing: 1 }}>FILES (3)</ThemedText>
                </View>
              </View>
              <View style={{ ...styles.designerElement, width: 140, backgroundColor: '#ffffff15' }}></View>
              <View style={{ ...styles.designerElement, width: 120, backgroundColor: '#ffffff10' }}></View>
            </View>
          </ThemedView>
          : <ThemedView key="manageTagsGradient" style={{ paddingTop: 4, backgroundColor:'#191B21' }}>
            <ThemedText style={{ marginTop: 16, fontSize: 16, paddingHorizontal: 18, color: '#ffffffcc' }}>
              our recommendations work best when you let us know these things:
            </ThemedText>
            {[
              { title: 'YOUR DIFFICULTY', description: 'you decide the level of challenge you want!', icon: '✨' },
              { title: 'INTERESTS YOU LIKE', description: 'tell us what you enjoy exploring!', icon: '✨' },
              { title: 'TOOLS USED', description: 'share the tools you prefer working with!', icon: '🔧' },
            ].map((item, index) => (
              <View
                key={index}
                style={{ ...styles.options, marginTop: index === 0 ? 16 : 0 }}
              >
                <View>
                  <View style={{ flexDirection: 'row', gap: 8 }}>
                    <ThemedText type='subtitle' style={{ fontSize: 14, color: '#ffffffcc', opacity: .8, letterSpacing: 1, lineHeight:26 }}>{item.title}</ThemedText>
                    <ThemedText style={{ fontSize: 14, color: '#ffffff' }}>{item.icon}</ThemedText>
                  </View>
                  <ThemedText style={{ fontSize: 14, color: '#ccc', marginTop: 0, opacity: .7 }}>{item.description}</ThemedText>
                </View>
                <View style={styles.arrow}></View>
              </View>
            ))}
          </ThemedView>}
      </ThemedView>
      <ThemedView style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{ height: 36, width: 150 }}
        />
        <ThemedText type='subtitle' style={{ fontSize: 10, color: '#ffffff80', letterSpacing: 1 }}>
          JOINED 2242 DAYS AGO
        </ThemedText>
        <Image
          source={require('../../assets/images/footer.png')}
          style={{ height: 80, width: 360, position: "absolute", opacity: .2 }}
        />
        <Image
          source={require('../../assets/images/footer_design.png')}
          style={{ height: 40, width: 360, borderRadius: 4, zIndex: 1, position: 'absolute', bottom: 2, left: 0, shadowColor: '#EFD84C', shadowOpacity: 1, shadowOffset: { height: 10, width: 10 }, shadowRadius: 10 }}
        />
      </ThemedView>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    width: '50%',
    gap: 12,
    marginTop: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#444',
  },
  options: {
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomColor: '#444',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  arrow: {
    width: 10,
    height: 10,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#808080',
    transform: [{ rotate: '45deg' }],
    marginLeft: 'auto',
    backgroundColor: 'transparent'
  },
  collection: {
    width: 150,
    backgroundColor: '#ffffff10',
  },
  collection_images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff2',
  },
  collection_image: {
    width: 70,
    height: 65,
    borderRadius: 2,
    margin: 2
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  designerElement: {
    height: 4,
  }
});
