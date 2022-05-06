import React, {createContext, useState} from 'react';
import categoriesStorage from '../storages/categoriesStorage';

const IntroContext = createContext({
  intro: false,
  changeState: () => {},
});

const IntroProvider = ({children}) => {
  const [intro, setIntro] = useState(false);
  const changeState = () => {
    setIntro(!intro);
    categoriesStorage.set(intro);
  };

  return (
    <IntroContext.Provider
      value={{
        intro,
        changeState,
      }}>
      {children}
    </IntroContext.Provider>
  );
};

export {IntroContext, IntroProvider};
