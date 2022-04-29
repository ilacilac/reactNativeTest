import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
];

function SelectCategoryPage() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>궁금한 뉴스만 쏙쏙!</Text>
      <Text>AI가 매일 쏟아지는 뉴스 중 나에게 딱 맞춘 뉴스와</Text>
      <Text>오늘의 인기뉴스를 알려드려요</Text> */}
      {/* <AppIntroSlider data={slides} />; */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SelectCategoryPage;
