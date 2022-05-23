import React, {useContext, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Switch,
  useColorScheme,
  Appearance,
} from 'react-native';
import {ThemeColorContext} from '../context/ThemeColorProvider';

function SettingScreen() {
  const [darkmode, setDarkmode] = useState(false);

  const {isDark, colors, setScheme} = useContext(ThemeColorContext);
  const toggleDarkmodeSwitch = () => {
    isDark ? setScheme('light') : setScheme('dark');
  };

  const settingList = [
    {key: '북마크', switch: false},
    {key: '글자크기 변경', switch: false},
    {
      key: '다크모드',
      switch: true,
      value: isDark,
      changeValue: toggleDarkmodeSwitch,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={settingList}
        renderItem={({item}) =>
          item.switch ? (
            <View style={styles.switchRow}>
              <Text style={styles.item}>{item.key}</Text>
              <Switch
                onValueChange={toggleDarkmodeSwitch}
                value={item.value}
                trackColor={{true: '#306CCE'}}
              />
            </View>
          ) : (
            <Text style={styles.item}>{item.key}</Text>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  item: {
    padding: 10,
    fontSize: 28,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SettingScreen;
