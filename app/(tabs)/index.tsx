import React, { useRef, useEffect } from 'react';
import { Animated, Image, ScrollView } from 'react-native';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileDetails from '@/components/ProfileDetails';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -150,
          duration: 10000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 10000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateX]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <ProfileHeader translateX={translateX} />
      <ProfileDetails />
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
          style={{ height: 40, width: 360, zIndex: 1, position: 'absolute', bottom: 0, left: 0 }}
        />
      </ThemedView>
    </ScrollView>
  );
}