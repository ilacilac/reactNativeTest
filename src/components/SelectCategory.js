import React, {useState, useContext, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

function SelectCategory({item}) {
  return (
    <View style={styles.SelectCategoryWrap}>
      <Text style={styles.SelectCategoryTitle}>{item.title}</Text>
      <View style={styles.GenderBtnWrap}>
        {item.buttonImages.map((image, index) => (
          <TouchableOpacity style={styles.GenderBtn} key={index}>
            <Image
              source={image.buttonImage}
              resizeMode="contain"
              style={styles.GenderBtnImage}
            />
          </TouchableOpacity>
        ))}
      </View>
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
  GenderBtnWrap: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  GenderBtn: {
    color: '#333333',
    margin: 10,
    width: 150,
    height: 150,
  },
  GenderBtnImage: {
    display: 'flex',
    width: 150,
    height: 150,
  },
});

export default SelectCategory;
