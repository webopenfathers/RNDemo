import { View, Text, StyleSheet } from 'react-native';

const InfoCard = ({ name, age, sex, levelView, children }) => {
  return (
    <View style={styles.root}>
      {/* 样式组合 */}
      <Text style={[styles.txt, styles.txtBold]}>{`姓名：${name}`}</Text>
      <Text style={styles.txt}>{`年龄：${age}`}</Text>

      <Text style={[styles.txt, styles.txtBlue]}>{`性别：${sex}`}</Text>
      {levelView}
      {/* 插槽 */}
      {children}
    </View>
  );
};

// 样式表
const styles = StyleSheet.create({
  root: { width: '100%', flexDirection: 'column' },
  txt: { fontSize: 20, color: 'black', marginVertical: 10 },
  txtBold: { fontWeight: 'bold' },
  txtBlue: { color: 'blue' },
});

export default InfoCard;
