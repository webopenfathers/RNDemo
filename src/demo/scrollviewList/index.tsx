import { ScrollView, Text, View } from 'react-native';

const ScrollViewList = () => {
  const space = 20;
  const list = [
    'Mate X7',
    'Mate 80 Pro Max 风驰版',
    'Mate 80 Pro',
    'Pura 80',
    'Pura 80 Pro+',
    'Pura 80 Pro',
    'Pura X',
    'nova 15 Pro',
    'nova 15',
    'nova 15 SE',
    '华为畅享 90 Pro',
    '华为畅享 90',
    '华为畅享 90 SE',
    '华为畅享 90 Plus',
  ];
  const renderView = () => {
    return list.map((item, index) => (
      <View
        key={index}
        style={{
          width: 140,
          height: 46,
          borderColor: '#0000001a',
          borderWidth: 1,
          marginRight: index < list.length - 1 ? space : 0,
          paddingHorizontal: 12,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 12 }}>{item}</Text>
      </View>
    ));
  };

  return (
    <>
      <ScrollView horizontal={true} style={{ marginTop: 100 }} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: space }}>
        {renderView()}
      </ScrollView>
    </>
  );
};

export default ScrollViewList;
