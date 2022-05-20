import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {SettingContext} from '../../context/SettingProvider';

const conf = {
  gnb: {
    '000': '추천',
    '010': '코로나',
    100: '정치',
    101: '경제',
    102: '연예',
    103: '세계',
    104: '사회',
    105: '생활',
    106: 'IT',
    107: '스포츠',
  },
  oid: {
    '001': '연합뉴스',
    '002': '프레시안',
    '003': '뉴시스',
    '005': '국민일보',
    '006': '미디어오늘',
    '007': '일다',
    '008': '머니투데이',
    '009': '매일경제',
    '011': '서울경제',
    '014': '파이낸셜뉴스',
    '015': '한국경제',
    '016': '헤럴드경제',
    '018': '이데일리',
    '020': '동아일보',
    '021': '문화일보',
    '022': '세계일보',
    '023': '조선일보',
    '024': '매경이코노미',
    '025': '중앙일보',
    '028': '한겨례',
    '029': '디지털타임스',
    '030': '전자신문',
    '031': '아이뉴스24',
    '032': '경향신문',
    '033': '주간경향',
    '036': '한겨레21',
    '037': '주간동아',
    '044': '코리아헤럴드',
    '047': '오마이뉴스',
    '050': '한경비즈니스',
    '052': 'YTN',
    '053': '주간조선',
    '055': 'SBS뉴스',
    '056': 'KBS뉴스',
    '057': 'MBN',
    '076': '스포츠조선',
    '079': '노컷뉴스',
    '081': '서울신문',
    '082': '부산일보',
    '087': '강원일보',
    '088': '매일신문',
    '092': '지디넷코리아',
    '094': '월간 산',
    117: '마이데일리',
    119: '데일리안',
    123: '조세일보',
    127: '기자협회보',
    138: '디지털데일리',
    145: '레이디경향',
    214: 'MBC뉴스',
    215: '한국경제TV',
    243: '이코노미스트',
    262: '신동아',
    277: '아시아경제',
    293: '블로터',
    296: '코메디닷컴',
    308: '시사IN',
    310: '여성신문',
    346: '헬스조선',
    353: '중앙SUNDAY신문',
    366: '조선비즈',
    368: '데일리안',
    374: 'SBS CNBC',
    417: '머니S',
    421: '뉴스1',
    422: '연합뉴스TV',
    437: 'JTBC',
    448: 'TV조선',
    449: '채널A',
    469: '한국일보',
    584: '동아사이언스',
    586: '시사저널',
    607: '뉴스타파',
    629: '더팩트',
    640: '코리아중앙데일리신문',
    648: '비즈니스워치',
    654: '강원도민일보',
    655: 'CJB청주방송',
    656: '대전일보',
    657: '대구MBC',
    658: '국제신문',
    659: '전주MBC',
    660: 'kbc광주방송',
    661: 'JIBS',
    930: '뉴스타파',
  },
};

function SelectCategoryNews() {
  const [alertMessage, setAlertMessage] = useState(false);
  const [checkedNews, setCheckedNews] = useState({});
  const {
    setting: {
      config: {oid},
    },
  } = useContext(SettingContext);
  const oidArray = Object.entries(oid).sort(([key1], [key2]) => +key1 - +key2);

  // TODO
  // 높이값
  // Array로 구조 잡을지 Object 잡을지 확인 - Object
  // Checker : 3개 이상 체크할경우 / 3개 이하 체크할 경우 / 같은걸 체크할 경우 / 같은걸 체크하지 않을경우
  // 고려사항 : asyncStorage에서 체크된 값 가져오기 (재사용성 고려 - 지금은 아님 -> 아직 확정된 사항이 없음)
  // Toggle 형식 뺏다가 넣었다가
  const isChecked = key => {
    return !!checkedNews[key];
  };

  // 부등호
  //
  const onRemove = key => {
    const newCheckedNews = {...checkedNews};
    delete newCheckedNews[key];
    setCheckedNews(newCheckedNews);
  };

  const onAdd = menu => {
    const newCheckedNews = {...checkedNews};
    setCheckedNews({...newCheckedNews, ...menu});
  };

  const onPress = (menu, key) => {
    if (isChecked(key)) {
      onRemove(key);
    } else {
      if (Object.keys(checkedNews).length < 3) {
        onAdd(menu);
      }
      return false;
    }
  };

  return (
    <View style={styles.selectCategoryWrap}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        <Text style={styles.selectCategoryTitle}>
          선호하는 언론사를 3개 선택해주세요
        </Text>
        <Text>{JSON.stringify(checkedNews)}</Text>
        {oidArray.map(([key, value]) => {
          return (
            <TouchableOpacity
              key={key}
              style={
                Object.keys(checkedNews).some(_key => _key === key)
                  ? styles.buttonTextWrapSelected
                  : styles.buttonTextWrap
              }
              onPress={() => onPress({[key]: value}, key)}>
              <Text
                style={
                  Object.keys(checkedNews).some(_key => _key === key)
                    ? styles.buttonTextSelected
                    : styles.buttonText
                }>
                {value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  selectCategoryWrap: {
    marginTop: getStatusBarHeight(),
    paddingTop: 30,
    paddingBottom: 140,
  },
  selectCategoryTitle: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  genderBtnWrap: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  genderBtn: {
    color: '#333333',
    margin: 10,
    width: 150,
    height: 150,
  },
  genderBtnImage: {
    display: 'flex',
    width: 150,
    height: 150,
  },
  nextBtn: {
    backgroundColor: '#333333',
  },
  doneBtn: {
    backgroundColor: '#999999',
  },
  buttonTextWrapSelected: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#238e80',
    // borderWidth: 3,
    // borderColor: '#333',
  },
  buttonTextWrap: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: 15,
  },
  buttonTextSelected: {
    fontSize: 15,
    color: '#fff',
  },
});

export default SelectCategoryNews;
