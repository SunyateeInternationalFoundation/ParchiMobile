import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../Store/ProductSlice";

function CreateProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productManager.products);

  const [formData, setFormData] = useState({
    productDetails: "",
    sellingPrice: "",
    sellingPriceTaxType: "",
    purchasePrice: "",
    discount: "",
    discountType: "",
    gstTax: "",
    stock: "",
  });

  const [updateId, setUpdateId] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddProduct = () => {
    if (formData.productDetails) {
      dispatch(addProduct({ id: Date.now(), ...formData }));
      setFormData({
        productDetails: "",
        sellingPrice: "",
        sellingPriceTaxType: "",
        purchasePrice: "",
        discount: "",
        discountType: "",
        gstTax: "",
        stock: "",
      });
    }
  };

  const handleUpdateProduct = () => {
    if (updateId) {
      dispatch(updateProduct({ id: Number(updateId), updatedData: formData }));
      setUpdateId("");
      setFormData({
        productDetails: "",
        sellingPrice: "",
        sellingPriceTaxType: "",
        purchasePrice: "",
        discount: "",
        discountType: "",
        gstTax: "",
        stock: "",
      });
    }
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product Details"
        value={formData.productDetails}
        onChangeText={(text) => handleInputChange("productDetails", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Selling Price"
        value={formData.sellingPrice}
        onChangeText={(text) => handleInputChange("sellingPrice", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="sellingPriceTaxType"
        value={formData.sellingPriceTaxType}
        onChangeText={(text) => handleInputChange("sellingPriceTaxType", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Purchase Price"
        value={formData.purchasePrice}
        onChangeText={(text) => handleInputChange("purchasePrice", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Discount"
        value={formData.discount}
        onChangeText={(text) => handleInputChange("discount", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="DiscountType"
        value={formData.discountType}
        onChangeText={(text) => handleInputChange("discountType", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="GST Tax"
        value={formData.gstTax}
        onChangeText={(text) => handleInputChange("gstTax", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        value={formData.stock}
        onChangeText={(text) => handleInputChange("stock", text)}
        keyboardType="numeric"
      />

      <Button title="Add Product" onPress={handleAddProduct} />

      {/* <TextInput
        style={styles.input}
        placeholder="Product ID to Update"
        value={updateId}
        onChangeText={setUpdateId}
        keyboardType="numeric"
      /> */}
      {/* <Button title="Update Product" onPress={handleUpdateProduct} /> */}
    </View>
  );
}

export default CreateProduct;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: "#ccc",
  },
});
