import { FlatList, View, Text, StyleSheet, Button } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  increaseByQuantity,
  decreaseByQuantity,
} from "../../Store/CartSlice";
import { useState } from "react";
function SelectProduct() {
  const Navigation = useNavigation();
  const products = useSelector((state) => state.productManager.products);
  const dispatch = useDispatch();
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.productDetails}</Text>
            <Text>Selling Price: {item.sellingPrice}</Text>
            <Text>Purchase Price: {item.purchasePrice}</Text>
            <Text>Discount: {item.discount}</Text>
            <Text>GST Tax: {item.gstTax}</Text>
            <Text>Stock: {item.stock}</Text>
            <Button
              title="AddToCart"
              onPress={() => {
                dispatch(addToCart(item));
              }}
              color="red"
            />
          </View>
        )}
      />
    </View>
  );
}
export default SelectProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
