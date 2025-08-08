import React, { useState, useMemo, useCallback } from 'react';

import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  Switch,
  TouchableOpacity,
} from 'react-native';

import { ListData, ListData2 } from '../constants/Data';
import { TypeColors } from '../constants/Data';


const ConsumeList = () => {
  const [data, setData] = useState(ListData);
  const [showType, setShowType] = useState(true);

  // 1、useMemo缓存值
  // const calculateTotal = useMemo(() => {
  //   console.log('重新计算合计缓存值...');
  //   return data.reduce((acc, cur) => acc + cur.amount, 0);
  // }, [data]);

  // 2、useMemo缓存ui渲染
  const totalAmountView = useMemo(() => {
    console.log('重新计算合计缓存ui渲染...');
    const total = data.reduce((acc, cur) => acc + cur.amount, 0);
    return (
      <View style={styles.totalLayout}>
        <Text style={styles.totalTxt}>{total}</Text>
        <Text style={styles.totalTxt}>合计：</Text>
      </View>
    );
  }, [data]);

  // 3、useCallback 缓存回调函数
  const onItemPress = useCallback(
    (item, index) => () => {
      console.log('onItemPress重新生成新的...', item, index);
    },
    [],
  );

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemLayout}
      onPress={onItemPress(item, index)}
    >
      <View style={styles.labelRow}>
        <Text style={[styles.labelTxt, styles.first]}>序号</Text>
        {showType && <Text style={[styles.labelTxt, styles.second]}>类型</Text>}
        <Text style={styles.labelTxt}>消费名称</Text>
        <Text style={[styles.labelTxt, styles.last]}>消费金额</Text>
      </View>
      <View style={[styles.labelRow, styles.valueRow]}>
        <Text style={[styles.valueTxt, styles.first]}>{item.index}</Text>
        {showType && (
          <View style={styles.typeLayout}>
            <Text
              style={[
                styles.typeTxt,
                { backgroundColor: TypeColors[item.type] },
              ]}
            >
              {item.type}
            </Text>
          </View>
        )}
        <Text style={styles.valueTxt}>{item.name}</Text>
        <Text style={[styles.valueTxt, styles.last]}>{item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <View style={styles.titleLayout}>
        <Text style={styles.titleTxt}>消费记账单</Text>
        <Switch
          style={styles.switch}
          value={showType}
          onValueChange={value => setShowType(value)}
        />
        <Button title="切换数据" onPress={() => setData(ListData2)} />
      </View>
      <FlatList
        data={data}
        keyExtractor={item => `${item.index}-${item.name}`}
        renderItem={renderItem}
      />
      {/* useMemo缓存值 */}
      {/* <View style={styles.totalLayout}>
        <Text style={styles.totalTxt}>{calculateTotal}</Text>
        <Text style={styles.totalTxt}>合计：</Text>
      </View> */}

      {/* useMemo缓存ui */}
      {totalAmountView}
    </View>
  );
};

export default ConsumeList;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 20,
  },
  titleLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleTxt: {
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemLayout: {
    width: '100%',
    padding: 16,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  valueRow: {
    marginTop: 12,
  },
  labelRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelTxt: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  valueTxt: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  typeLayout: {
    flex: 0.3,
  },
  typeTxt: {
    width: 22,
    height: 22,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    borderRadius: 4,
    fontWeight: 'bold',
  },
  first: {
    flex: 0.4,
  },
  second: {
    flex: 0.3,
  },
  last: {
    flex: 0.6,
  },
  totalLayout: {
    width: '100%',
    height: 60,
    flexDirection: 'row-reverse',
    borderTopWidth: 1,
    borderTopColor: '#C0C0C0',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  totalTxt: {
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
  },
  switch: {
    position: 'absolute',
    right: 16,
  },
});
