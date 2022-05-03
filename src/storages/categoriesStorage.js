import AsyncStorage from '@react-native-community/async-storage';

const key = 'categories';

const categoriesStorage = {
  async get() {
    try {
      const rawCategories = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(rawCategories);
      return parsed;
      // if (!rawCategories) {
      //   throw new Error('No saved categories');
      // }
    } catch (e) {
      throw new Error('Failed to load categories');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error();
    }
  },
  async remove() {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      throw new Error();
    }
  },
};

export default categoriesStorage;
