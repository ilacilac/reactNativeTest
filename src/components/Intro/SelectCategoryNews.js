import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {SettingContext} from '../../context/SettingProvider';

function SelectCategoryNews({onSettingChange}) {
  const [alertMessage, setAlertMessage] = useState(false);
  const [selectedNews, setSelectedNews] = useState([]);
  const {
    setting: {
      config: {oid},
    },
  } = useContext(SettingContext);

  const selectChecker = ([key, value]) => {
    return selectedNews.some(([k, v]) => key === k && value === v);
  };

  const setNews = newSelectedNews => {
    setSelectedNews(newSelectedNews);
    onSettingChange('oid', newSelectedNews);
  };

  const addNews = newsItem => {
    if (selectedNews.length >= 3) {
      return false;
    }
    const newSelectedNews = [...selectedNews, newsItem];
    setNews(newSelectedNews);
  };

  const removeNews = ([newKey, newValue]) => {
    const newSelectedNews = selectedNews.filter(
      ([selectKey, selectValue]) =>
        !(newKey === selectKey && newValue === selectValue),
    );
    setNews(newSelectedNews);
  };

  const onPress = newsItem => {
    if (selectChecker(newsItem)) {
      removeNews(newsItem);
    } else {
      addNews(newsItem);
    }
  };

  return (
    <View style={styles.selectCategoryWrap}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        <Text style={styles.selectCategoryTitle}>
          선호하는 언론사를 3개 선택해주세요
        </Text>
        {oid.map(([key, value]) => {
          return (
            <TouchableOpacity
              style={
                selectChecker([key, value])
                  ? styles.buttonTextWrapSelected
                  : styles.buttonTextWrap
              }
              key={key}
              onPress={() => onPress([key, value])}>
              <Text>{value}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  selectCategoryWrap: {
    marginTop: getStatusBarHeight(),
    paddingTop: 30,
    paddingBottom: 140,
  },
  selectCategoryTitle: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  genderBtnWrap: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  genderBtn: {
    color: '#333333',
    margin: 10,
    width: 150,
    height: 150,
  },
  genderBtnImage: {
    display: 'flex',
    width: 150,
    height: 150,
  },
  nextBtn: {
    backgroundColor: '#333333',
  },
  doneBtn: {
    backgroundColor: '#999999',
  },
  buttonTextWrapSelected: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#238e80',
    // borderWidth: 3,
    // borderColor: '#333',
  },
  buttonTextWrap: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: 15,
  },
  buttonTextSelected: {
    fontSize: 15,
    color: '#fff',
  },
});

export default SelectCategoryNews;
