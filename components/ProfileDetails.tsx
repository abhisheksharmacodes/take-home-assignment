import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function ProfileDetails() {

    const [tabIndex, setTabIndex] = useState(1);
    return (
        <ThemedView style={{ flex: 1 }}>
            <ThemedView style={{ flexDirection: 'row', marginTop: 0 }}>
                <ThemedView
                    style={{ ...styles.tab, borderBottomWidth: tabIndex === 1 ? 2 : 1, borderBottomColor: tabIndex === 1 ? '#00e68e' : '#444' }}
                    onTouchEnd={() => setTabIndex(1)}
                >
                    <Image
                        source={tabIndex === 1 ? require('../assets/images/collections1.png') : require('../assets/images/collections2.png')}
                        style={{ width: 22, height: 22 }}
                    />
                    <ThemedText type='subtitle' style={{ letterSpacing: 1, fontSize: 14, color: tabIndex === 1 ? '#00e68e' : '#ffffff80' }}>COLLECTIONS</ThemedText>
                </ThemedView>
                <ThemedView
                    style={{ ...styles.tab, borderBottomWidth: tabIndex === 2 ? 2 : 1, borderBottomColor: tabIndex === 2 ? '#00e68e' : '#444' }}
                    onTouchEnd={() => setTabIndex(2)}
                >
                    <Image
                        source={tabIndex === 2 ? require('../assets/images/target2.png') : require('../assets/images/target1.png')}
                        style={{ width: 22, height: 22 }}
                    />
                    <ThemedText type='subtitle' style={{ letterSpacing: 1, fontSize: 14, color: tabIndex === 2 ? '#00e68e' : '#ffffff80' }}>MANAGE TAGS</ThemedText>
                </ThemedView>
            </ThemedView>
            {tabIndex === 1 ?
                <ThemedView key="collectionsGradient" style={{ paddingHorizontal: 18, paddingVertical: 26, flexDirection: 'row', flexWrap: 'wrap', gap: 18, backgroundColor: '#191B21' }}>
                    <View style={styles.container}>
                        <View style={styles.collection}>
                            <View>
                                <View style={styles.collection_images}>
                                    <View>
                                        <Image
                                            source={require('../assets/images/posts/1.jpeg')}
                                            style={styles.collection_image}
                                        />
                                        <Image
                                            source={require('../assets/images/posts/2.jpeg')}
                                            style={styles.collection_image}
                                        />
                                    </View>
                                    <View>
                                        <Image
                                            source={require('../assets/images/posts/3.jpeg')}
                                            style={styles.collection_image}
                                        />
                                        <Image
                                            source={require('../assets/images/posts/4.jpeg')}
                                            style={styles.collection_image}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginVertical: 12, paddingLeft: 14 }}>
                                <Image
                                    source={require('../assets/images/like.png')}
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
                                    source={require('../assets/images/posts/5.jpeg')}
                                    style={{ ...styles.collection_image, height: 134 }}
                                />
                                <Image
                                    source={require('../assets/images/posts/6.jpg')}
                                    style={{ ...styles.collection_image, height: 134 }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginVertical: 12, paddingLeft: 14 }}>
                                <Image
                                    source={require('../assets/images/save.png')}
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
                                        source={require('../assets/images/posts/7.jpg')}
                                        style={styles.collection_image}
                                    />
                                    <Image
                                        source={require('../assets/images/posts/8.jpg')}
                                        style={styles.collection_image}
                                    />
                                </View>
                                <Image
                                    source={require('../assets/images/posts/9.jpg')}
                                    style={{ ...styles.collection_image, height: 134 }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginVertical: 12, paddingLeft: 14 }}>
                                <Image
                                    source={require('../assets/images/folder.png')}
                                    style={{ width: 18, height: 16 }}
                                />
                                <ThemedText type='subtitle' style={{ fontSize: 13, color: '#ffffffaa', letterSpacing: 1 }}>FILES (3)</ThemedText>
                            </View>
                        </View>
                        <View style={{ ...styles.designerElement, width: 140, backgroundColor: '#ffffff15' }}></View>
                        <View style={{ ...styles.designerElement, width: 120, backgroundColor: '#ffffff10' }}></View>
                    </View>
                </ThemedView>
                : <ThemedView key="manageTagsGradient" style={{ paddingTop: 4, backgroundColor: '#191B21' }}>
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
                                    <ThemedText type='subtitle' style={{ fontSize: 14, color: '#ffffffcc', opacity: .8, letterSpacing: 1, lineHeight: 26 }}>{item.title}</ThemedText>
                                    <ThemedText style={{ fontSize: 14, color: '#ffffff' }}>{item.icon}</ThemedText>
                                </View>
                                <ThemedText style={{ fontSize: 14, color: '#ccc', marginTop: 0, opacity: .7 }}>{item.description}</ThemedText>
                            </View>
                            <View style={styles.arrow}></View>
                        </View>
                    ))}
                </ThemedView>}
        </ThemedView>
    );
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