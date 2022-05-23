import React from 'react';

import SelectCategoryGender from './SelectCategoryGender';
import SelectCategoryAge from './SelectCategoryAge';

function SelectCategory({item}) {
  return (
    <>
      {item.type === 'BUTTON_TYPE' && <SelectCategoryGender item={item} />}
      {item.type === 'INPUT_TYPE' && <SelectCategoryAge item={item} />}
    </>
  );
}

export default SelectCategory;
