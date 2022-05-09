import React, {useState, useContext, useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {IntroContext} from '../context/intro';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import IntroSlide from '../components/IntroSlide';
import SelectCategory from '../components/SelectCategory';

const slides = [
  {
    key: 'introCategory1',
    title: '당신의 성별은 무엇입니까?',
    buttonImages: [
      {
        buttonImage: require('../assets/male.png'),
      },
      {
        buttonImage: require('../assets/female.png'),
      },
    ],
    backgroundColor: '#ffffff',
  },
  {
    key: 'introCategory2',
    title: '당신의 나이를 입력해주세요',
    buttonImages: [
      {
        buttonImage: require('../assets/male.png'),
      },
      {
        buttonImage: require('../assets/female.png'),
      },
    ],
    backgroundColor: '#ffffff',
  },
];

function IntroScreen() {
  // const {changeState} = useContext(IntroContext);
  // const navigation = useNavigation();

  const onDone = () => {
    // changeState();
    // navigation.navigate('SelectCategoryScreen');
  };
  const onSkip = () => {
    // changeState();
    // navigation.navigate('SelectCategoryScreen');
  };

  const RenderItem = ({item}) => {
    return <SelectCategory item={item} />;
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onSkip}
      bottomButton
    />
  );
}

export default IntroScreen;
