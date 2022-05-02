import React, {createContext, useState} from 'react';

const IntroContext = createContext({
  intro: false,
  changeState: () => {},
});

const IntroProvider = ({children}) => {
  const [intro, setIntro] = useState(false);
  const changeState = () => {
    setIntro(!intro);
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
