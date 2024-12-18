import React, { useState } from "react";
import {
  View,
  Button,
  Modal,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const Categories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const addCategory = () => {
    setCategoryList((currentList) => [...currentList, inputValue]);
    setInputValue("");
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Button
          //   style={styles.createButton}
          title={"Create Categoery"}
          onPress={toggleModal}
        />
      </View>

      <Text style={styles.title}>Category List:</Text>
      <FlatList
        data={categoryList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listView}>
            <Text style={styles.categoryItem}>{item}</Text>
          </View>
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Create a New Category</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter category name"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />

            <Button
              title="Add Category"
              onPress={addCategory}
              color="#FF5733"
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  createButton: {
    fontSize: 16,
    color: "#841584",
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  listView: {
    padding: 8,
    margin: 3,
    borderRadius: 16,
    backgroundColor: "#dcdcdc",
  },
  categoryItem: {
    fontSize: 16,
    color: "#333333",
    paddingVertical: 5,
    alignSelf: "flex-start",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    // height: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
