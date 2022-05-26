import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import SelectCategoryNews from '../components/Intro/SelectCategoryNews';
import SelectCategoryGender from '../components/Intro/SelectCategoryGender';
import SelectCategoryAge from '../components/Intro/SelectCategoryAge';
import storageManager from '../storages/storageManager';
import {useDispatch, useSelector} from 'react-redux';
import {userSettingsAdd} from '../modules/userSettings';

// TODO
// useContext -> redux

function InitSettingScreen() {
  const navigation = useNavigation();
  const [setting, setSetting] = useState({});

  /*
    TODO
      1. useState -> default value setting
      2. contextAPI -> value setting
   */
  const onSettingChange = (key, value) => {
    const newSetting = {
      ...setting,
      [key]: value,
    };

    setSetting(newSetting);
  };

  const slides = [
    {
      key: 'introCategory1',
      component: <SelectCategoryGender onSettingChange={onSettingChange} />,
    },
    {
      key: 'introCategory2',
      component: <SelectCategoryAge onSettingChange={onSettingChange} />,
    },
    {
      key: 'introCategory3',
      component: <SelectCategoryNews onSettingChange={onSettingChange} />,
    },
  ];
  const dispatch = useDispatch();

  const onSkip = () => {
    navigation.navigate('MainScreen');
  };
  const onDone = () => {
    dispatch(userSettingsAdd(setting));
    navigation.navigate('MainScreen');
  };

  const keyExtractor = item => item.key;
  const renderNextButton = () => {
    return <Text style={styles.nextBtn}>Next</Text>;
  };
  const renderDoneButton = () => {
    return <Text style={styles.doneBtn}>Done</Text>;
  };
  const renderSkipButton = () => {
    return <Text style={styles.skipBtn}>Skip</Text>;
  };

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
