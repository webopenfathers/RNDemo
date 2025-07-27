import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  useColorScheme,
} from 'react-native';

const FunctionView = ({ name, age, level }) => {
  const [address, setAddress] = useState('江苏省南京市');
  const { width, height } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const scrollRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setAddress('浙江省杭州市');
      scrollRef.current.scrollToEnd({
        animated: true,
      });
    }, 3000);
  }, []);

  useEffect(() => {
    console.log(`address=${address}`);
  }, [address]);

  return (
    <View style={{ width: '100%', height: 200, backgroundColor: 'blue' }}>
      <Text
        style={{ fontSize: 20, color: '#fff' }}
      >{`name=${name}, age=${age},level=${level},address=${address}`}</Text>
      <ScrollView ref={scrollRef}>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>
          AAA
        </Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>
          BBB
        </Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>
          CCC
        </Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>
          DDD
        </Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>
          EEE
        </Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>
          FFF
        </Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>
          GGG
        </Text>
      </ScrollView>
      <Text
        style={{ fontSize: 20, color: '#fff' }}
      >{`width=${width}, height=${height}`}</Text>
      <Text
        style={{ fontSize: 20, color: '#fff' }}
      >{`colorScheme=${colorScheme}`}</Text>
    </View>
  );
};
export default FunctionView;
