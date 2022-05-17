import React, {createContext, useEffect, useState} from 'react';
import storageManager from '../storages/storageManager';
import {getConfig} from '../api/config';

const SettingContext = createContext({
  setting: {},
});

function SettingProvider({children}) {
  const [setting, setSetting] = useState(null);

  const initContext = async () => {
    const [storages, config] = await Promise.all([
      storageManager.get(),
      getConfig(),
    ]);
    setSetting({storages, config});
  };

  useEffect(() => {
    initContext();
  }, []);

  return (
    <SettingContext.Provider value={{setting}}>
      {children}
    </SettingContext.Provider>
  );
}

export {SettingContext, SettingProvider};
