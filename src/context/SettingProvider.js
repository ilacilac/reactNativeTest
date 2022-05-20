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
    console.log('storages, config', storages, config);

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

    console.log(JSON.stringify({storages: newStorages, config: newConfig}));

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
