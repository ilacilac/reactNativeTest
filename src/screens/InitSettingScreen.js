import React, {useState, useRef, useContext, useEffect} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {IntroContext} from '../context/intro';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import IntroSlide from '../components/Intro/IntroSlide';
import SelectCategory from '../components/Intro/SelectCategory';
import {useQuery} from 'react-query';
import {getConfig} from '../api/config';
import SelectCategoryNews from '../components/Intro/SelectCategoryNews';
import SelectCategoryGender from '../components/Intro/SelectCategoryGender';
import SelectCategoryAge from '../components/Intro/SelectCategoryAge';

// TODO
// app 첫페이지 - 값들 받아주기 - loading / intro
// intro - SelectPage

function InitSettingScreen() {
  const navigation = useNavigation();

  /*
    TODO
      1. useState -> default value setting
      2. contextAPI -> value setting
   */

  const slides = [
    {
      key: 'introCategory1',
      component: <SelectCategoryGender />,
    },
    {
      key: 'introCategory2',
      component: <SelectCategoryAge />,
    },
    {
      key: 'introCategory3',
      component: <SelectCategoryNews />,
    },
  ];

  const onSkip = () => {
    navigation.navigate('MainScreen');
  };

  const onDone = () => {
    navigation.navigate('MainScreen');
  };

  const renderNextButton = props => {
    return <Text style={styles.nextBtn}>Next</Text>;
  };

  const renderDoneButton = () => {
    return <Text style={styles.doneBtn}>Done</Text>;
  };
  const renderSkipButton = () => {
    return <Text style={styles.skipBtn}>Skip</Text>;
  };

  const keyExtractor = item => item.key;

  return (
    <AppIntroSlider
      keyExtractor={keyExtractor}
      data={slides}
      renderItem={({item}) => item.component}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      showSkipButton={true}
      onDone={onDone}
      onSkip={onSkip}
      bottomButton
    />
  );
}

const styles = StyleSheet.create({
  nextBtn: {
    backgroundColor: '#000',
    marginTop: 10,
    padding: 10,

    textAlign: 'center',
    color: '#fff',
  },
  doneBtn: {
    backgroundColor: '#666',
    marginTop: 10,
    padding: 10,

    textAlign: 'center',
    color: '#fff',
  },
  skipBtn: {
    backgroundColor: '#666',
    marginTop: 10,
    padding: 10,

    textAlign: 'center',
    color: '#fff',
  },
  // buttonText: {
  //   padding: 10,

  //   textAlign: 'center',
  //   color: '#fff',
  // },
});
export default InitSettingScreen;
