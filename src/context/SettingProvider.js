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

    // storageManager.remove();
    const newStorages = storages.reduce(
      (all, [k, v]) => ({...all, [k]: v}),
      null,
    );

    const newConfig = Object.keys(config).reduce(
      (all, k) => ({
        ...all,
        [k]: Object.entries(config[k]).sort(([key1], [key2]) => +key1 - +key2),
      }),
      null,
    );
    // TODO : 데이터 형태가 어떤식으로 들어가는지 주석형태 필요
    setSetting({storages: newStorages, config: newConfig});
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
