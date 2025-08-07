import React, { useState } from 'react';

import { View, Button } from 'react-native';

import { avatarUri } from '../constants/Uri'

// import InfoView from './InfoView';
import InfoView2 from './InfoView2';

// 避免多余渲染
// 函数式组件：React.memo 返回true时，组件不会重新渲染。返回false时，组件会重新渲染。
// class组件：shouldComponentUpdate 返回true时，组件会重新渲染。返回false时，组件不会重新渲染。

export default () => {
  const [info, setInfo] = useState<UserInfo>({
    avatar: '',
    name: '',
    desc: '',
  })

  const onPress = () => {
    setInfo({
      avatar: avatarUri,
      name: '尼古拉斯*段坤',
      desc: '各位产品经理大家好，我是个人开发者张三，我学习RN两年半了，我喜欢安卓，RN，Flutter。',
    })
  }
  return (
    <View style={{ width: '100%' }}>
      <Button title='按钮' onPress={onPress} />
      {/* <InfoView info={info} /> */}
      <InfoView2 info={info} />
    </View>
  );
};
