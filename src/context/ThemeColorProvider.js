import React, {createContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {darkColors, lightColors} from '../theme/colorThemes';

const ThemeColorContext = createContext({
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
});

const ThemeColorProvider = ({children}) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: scheme => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeColorContext.Provider value={defaultTheme}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export {ThemeColorContext, ThemeColorProvider};
