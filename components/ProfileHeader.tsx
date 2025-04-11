import React from 'react';
import { Animated, Image, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function ProfileHeader({ translateX }: { translateX: Animated.Value }) {
    return (
        <ThemedView style={{ flex: 1, padding: 20, paddingTop: 30 }}>
            <Animated.Image
                source={require('../assets/images/background.png')}
                style={{ height: 500, position: 'absolute', top: 0, left: 0, opacity: .6, transform: [{ translateX: translateX }] }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 24 }}>
                <View style={{ shadowColor: '#EFD84C', shadowOpacity: 1, shadowRadius: 10, elevation: 5 }}>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={{ width: 96, height: 96, borderRadius: 4, zIndex: 0 }}
                    />
                    <Image
                        source={require('../assets/images/frame.png')}
                        style={{ width: 101, height: 100, borderRadius: 4, zIndex: 1, position: 'absolute', top: 0, left: 0, shadowColor: '#EFD84C', shadowOpacity: 1, shadowOffset: { height: 10, width: 10 }, shadowRadius: 10 }}
                    />
                </View>
                <View style={{ flexDirection: 'row', gap: 26 }}>
                    <Image
                        source={require('../assets/images/share-icon.png')}
                        style={{ width: 22, height: 24 }}
                    />
                    <Image
                        source={require('../assets/images/setting.png')}
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
                                    source={require('../assets/images/tick.png')}
                                    style={{ width: 23, height: 23 }}
                                />
                            </View>
                            <View style={{ borderStyle: 'dashed', borderBottomColor: '#ffffff95', margin: 0, paddingBottom: 3, borderBottomWidth: 1, flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
                                <ThemedText type='subtitle' style={{ letterSpacing: 1, fontSize: 13, color: '#ffffff95' }}>EDIT PROFILE</ThemedText>
                                <Image
                                    source={require('../assets/images/edit.png')}
                                    style={{ width: 12, height: 12, opacity: .5 }}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                            <Image
                                source={require('../assets/images/in.png')}
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
                        source={require('../assets/images/user.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <ThemedText style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>2</ThemedText>
                </View>
                <ThemedText type='subtitle' style={{ letterSpacing: 1, fontSize: 12, color: '#ccc', marginTop: 5 }}>FOLLOWING</ThemedText>
            </View>
        </ThemedView>
    );
}