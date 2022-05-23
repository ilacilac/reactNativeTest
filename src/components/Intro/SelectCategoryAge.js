import React, {useState, useContext, useEffect, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {getStatusBarHeight} from 'react-native-status-bar-height';

function SelectCategoryAge({item}) {
  const [selectedValue, setSelectedValue] = useState(20);
  const pickerRef = useRef();
  const ageRange = new Array(100).fill(0);
  const onValueChange = itemValue => {
    setSelectedValue(itemValue);
    console.log(itemValue);
  };

  return (
    <View style={styles.SelectCategoryWrap}>
      <Text style={styles.SelectCategoryTitle}>
        당신의 나이를 입력해주세요.
      </Text>
      <Picker
        ref={pickerRef}
        mode="dialog"
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        {ageRange.map((_, index) => (
          <Picker.Item label={index.toString()} value={index} key={index} />
        ))}
      </Picker>
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
  NextBtn: {
    backgroundColor: '#333333',
  },
  DoneBtn: {
    backgroundColor: '#999999',
  },
});

export default SelectCategoryAge;
