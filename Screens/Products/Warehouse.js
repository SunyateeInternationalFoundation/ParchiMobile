import {
  StyleSheet,
  View,
  Button,
  Modal,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";

const Warehouse = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formvalues, setFormValues] = useState({
    wareHouseName: "",
    city: "",
    Address: "",
    contactNumber: "",
  });
  const [warehouesList, setWarehouseList] = useState([]);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const inputHandler = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const addWareHouse = () => {
    setWarehouseList((prevList) => [...prevList, formvalues]);
    setModalVisible(false);
    setFormValues({
      wareHouseName: "",
      city: "",
      Address: "",
      contactNumber: "",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Create Warehouse" onPress={toggleModal} />
      </View>
      <FlatList
        data={warehouesList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTextBold}>
              Warehouse Name:{" "}
              <Text style={styles.itemText}>{item.wareHouseName}</Text>
            </Text>
            <Text style={styles.itemTextBold}>
              City: <Text style={styles.itemText}>{item.city}</Text>
            </Text>
            <Text style={styles.itemTextBold}>
              Address: <Text style={styles.itemText}>{item.Address}</Text>
            </Text>
            <Text style={styles.itemTextBold}>
              Contact Number:{" "}
              <Text style={styles.itemText}>{item.contactNumber}</Text>
            </Text>
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
            <TextInput
              style={styles.input}
              placeholder="Warehouse Name"
              value={formvalues.wareHouseName}
              onChangeText={(text) => inputHandler("wareHouseName", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="City"
              value={formvalues.city}
              onChangeText={(text) => inputHandler("city", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={formvalues.Address}
              onChangeText={(text) => inputHandler("Address", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Number"
              value={formvalues.contactNumber}
              onChangeText={(text) => inputHandler("contactNumber", text)}
            />
            <Button title="Add Warehouse" onPress={addWareHouse} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Warehouse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#DDDDDD",
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
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  itemContainer: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: "#f9f9f9", // Light background
    borderRadius: 8,
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  itemText: {
    fontSize: 16,
    color: "#333", // Darker text
    marginBottom: 5,
  },
  itemTextBold: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#555", // Slightly lighter bold text
  },
});
