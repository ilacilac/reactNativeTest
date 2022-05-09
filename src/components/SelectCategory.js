import React, {useState, useContext, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

function SelectCategory({item}) {
  return (
    <View style={styles.SelectCategoryWrap}>
      <Text style={styles.SelectCategoryTitle}>{item.title}</Text>
      {item.buttonImages.map(image => (
        <TouchableOpacity style={styles.GenderBtn}>
          <Text>{JSON.stringify(image)}</Text>
          {/* <Image
            source={require(`${image.buttonImage}`)}
            resizeMode="contain"
            style={styles.GenderBtnImage}
          /> */}
        </TouchableOpacity>
      ))}
      {/* <TouchableOpacity style={styles.GenderBtn}>
        <Image
          source={require('../assets/male.png')}
          resizeMode="contain"
          style={styles.GenderBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/female.png')}
          resizeMode="contain"
          style={styles.GenderBtnImage}
        />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  SelectCategoryWrap: {
    marginTop: getStatusBarHeight(),
  },
  SelectCategoryTitle: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 150,
    fontWeight: 'bold',
  },
  GenderBtn: {
    flex: 1,
    backgroundColor: '#ffffff',
    color: '#333333',
    width: 50,
    height: 50,
  },
  GenderBtnImage: {
    display: 'flex',
  },
});

export default SelectCategory;
