import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

// todos: page 3개로 분리
function SelectCategoryGender({onSettingChange}) {
  const onPress = value => {
    onSettingChange('gender', value);
  };

  return (
    <View style={styles.selectCategoryWrap}>
      <Text style={styles.selectCategoryTitle}>당신의 성별은 무엇입니까?</Text>

      <View style={styles.genderBtnWrap}>
        <TouchableOpacity
          style={styles.genderBtn}
          onPress={() => onPress('male')}>
          <Image
            source={require('../../assets/male.png')}
            resizeMode="contain"
            style={styles.genderBtnImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.genderBtn}
          onPress={() => onPress('female')}>
          <Image
            source={require('../../assets/female.png')}
            resizeMode="contain"
            style={styles.genderBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectCategoryWrap: {
    marginTop: getStatusBarHeight(),
  },
  selectCategoryTitle: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 120,
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
});

export default SelectCategoryGender;
