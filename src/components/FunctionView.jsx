import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import InfoCard from './InfoCard';

const FunctionView = () => {
  const [levelUp, setlLevelUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setlLevelUp(true);
    }, 2000);
  }, []);
  const getLevelView = () =>
    levelUp && (
      <Text style={{ fontSize: 24, color: 'green', marginVertical: 10 }}>
        {`等级：高级`}
      </Text>
    );

  // 数组渲染
  const getListView = () => {
    const viewList = [];
    for (let i = 0; i < 5; i++) {
      viewList.push(
        <Text key={i} style={{ fontSize: 20 }}>{`List item ${i + 1}`}</Text>,
      );
    }
    return viewList;
  };

  const array = ['AAA', 'BBB', 'CCC', 'DDD'];

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#F5F5F5' }}>
      <InfoCard name="张三" age="18" sex="男" levelView={getLevelView()}>
        <Text style={{ fontSize: 20, color: 'red', marginVertical: 10 }}>
          爱好：唱、跳、rap、篮球
        </Text>
      </InfoCard>
      {/* 数组渲染 */}
      <ScrollView>{getListView()}</ScrollView>

      {/* 列表渲染 */}
      <ScrollView>
        {array.map((item, index) => (
          <Text key={index} style={{ fontSize: 20, color: 'red' }}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default FunctionView;
