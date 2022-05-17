import AsyncStorage from '@react-native-community/async-storage';

const storageManager = {
  async get(key) {
    if (key) {
      try {
        const result = await AsyncStorage.getItem(key);
        const parsed = JSON.parse(result);
        return parsed;
      } catch (e) {
        throw new Error(`Failed to get ${key} storage`);
      }
    } else {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);
        const parse = result.reduce((all, [k, v]) => ({...all, [k]: v}), null);
        return parse;
      } catch (e) {
        throw new Error('Failed to get all storages');
      }
    }
  },
  async set(key, data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error(`Failed to set ${key} storages`);
    }
  },
  async remove(key) {
    if (key) {
      try {
        await AsyncStorage.removeItem(key);
      } catch (e) {
        throw new Error(`Failed to remove ${key} storage`);
      }
    } else {
      try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
      } catch (e) {
        throw new Error('Failed to remove all storages');
      }
    }
  },
};

export default storageManager;
