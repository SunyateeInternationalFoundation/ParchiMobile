import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../Store/ProductSlice";
import { useNavigation } from "@react-navigation/native";

function Products() {
  const Navigation = useNavigation();
  const products = useSelector((state) => state.productManager.products);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => Navigation.navigate("CreateProductScreen")}
        title="Create Product"
        color="#841584"
        accessibilityLabel="Go to Create Product Screen"
      />
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
            {/* <Text>Stock: {item.stock}</Text> */}
            <Button
              title="Delete"
              onPress={() => handleDeleteProduct(item.id)}
              color="red"
            />
          </View>
        )}
      />
    </View>
  );
}

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignSelf: "flex-end",
  },
  listItem: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
