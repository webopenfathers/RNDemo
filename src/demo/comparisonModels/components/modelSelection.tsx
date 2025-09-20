import { memo, useImperativeHandle, useRef, useState, forwardRef, useEffect } from "react"
import { View, Text, StyleSheet, Modal, Pressable, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import modelPoolGroupList from '../constants/modelPoolGroupList';

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const tabList = modelPoolGroupList.map(item => item.name)


const modelSelection = (props: any, ref: any) => {
  const flatListRef = useRef<FlatList | null>(null)
  const [tabIndex, setTabIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: tabIndex,
      animated: true
    })
  }, [tabIndex])

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: tabIndex,
      animated: true
    })
  }, [tabIndex])

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  useImperativeHandle(ref, () => ({
    showModal
  }))


  const renderItem = ({ item }: { item: any }) => {
    const itemWidth = (SCREEN_WIDTH - 16 - 8 - 24) / 3
    return <View>
      <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 19, }}>{item.name}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {
          item.displayProductList.map((subItem: any, subIndex: number) => {
            const { urlPrefix, photoPath, photoName } = subItem.mainPhoto
            return <View key={`${subItem.disPrdBreifName}-${subIndex}`}
              style={{ width: itemWidth, marginRight: 8, marginTop: 8, paddingBottom: 12, alignItems: "center" }}>
              <Image
                source={{ uri: urlPrefix + photoPath + photoName }}
                style={{ width: itemWidth, height: itemWidth }} />
              <Text style={{ fontSize: 12, marginTop: 8, height: 32, textAlign: 'center' }}>
                {subItem.disPrdBreifName}
              </Text>
              <Text style={{ marginTop: 8, fontSize: 12 }}>￥{subItem.minPrice}起</Text>
            </View>
          })
        }
      </View>
    </View>
  }



  return <Modal visible={visible}
    onRequestClose={hideModal}
    transparent={true}
    statusBarTranslucent={true}
    animationType="slide">
    <Pressable style={styles.modalContent} onPress={hideModal}>
      <Pressable style={styles.contentBox}>
        <Text style={styles.titleTxt}>选择机型</Text>
        {/* 系列名称 */}
        <ScrollView
          contentContainerStyle={{ paddingLeft: 16 }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", height: 56 }}>
            {
              tabList.map((item: any, index: number) => (
                <Pressable
                  key={index}
                  style={{ marginRight: 16, alignItems: "center" }}
                  onPress={() => setTabIndex(index)}>
                  <Text
                    style={
                      [
                        { fontSize: 16 },
                        { color: index === tabIndex ? "#000" : "rgba(0, 0, 0, 0.5)" },
                      ]
                    }
                  >{item}</Text>
                  {tabIndex === index &&
                    <View style={{ width: 20, height: 2, marginTop: 8, backgroundColor: "#000" }} />
                  }
                </Pressable>
              ))
            }
          </View>
        </ScrollView>
        {/* FlatList */}
        <FlatList
          ref={flatListRef}
          contentContainerStyle={{ paddingVertical: 20, paddingLeft: 16, paddingRight: 8 }}
          keyExtractor={(item, index) => `${item}-${index}`}
          data={modelPoolGroupList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </Pressable>
    </Pressable>
  </Modal >
}

export default memo(forwardRef((modelSelection)))

const styles = StyleSheet.create({
  modalContent: {
    paddingTop: 80,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  contentBox: {
    flex: 1,
    backgroundColor: "rgb(241, 243, 245)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
  titleTxt: {
    paddingLeft: 16,
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  }
})