import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { decreaseByQuantity, increaseByQuantity } from "../../Store/CartSlice";

function Invoice() {
  const Navigation = useNavigation();
  const cart = useSelector((state) => state.cartManager.cart);
  const dispatch = useDispatch();
  const [subTotal, discountAmount, taxAmount, totalAmount] = calculateInvoice();
  function renderItemHandler({ item }) {
    return (
      <View style={styles.listItem}>
        <Text>{item.productDetails}</Text>
        <Text>Selling Price: {item.sellingPrice}</Text>
        <Text>Purchase Price: {item.purchasePrice}</Text>
        <Text>taxType:{item.sellingPriceTaxType}</Text>
        <Text>Discount: {item.discount}</Text>
        <Text>discountType:{item.discountType}</Text>
        <Text>GST Tax: {item.gstTax}</Text>
        <Text>quantity: {item.quantity}</Text>

        <View style={styles.buttonGroup}>
          <Pressable
            style={[styles.button, styles.decrementButton]}
            onPress={() =>
              dispatch(decreaseByQuantity({ id: item.id, quantity: 1 }))
            }
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>{item.quantity}</Text>
          </View>
          <Pressable
            style={[styles.button, styles.incrementButton]}
            onPress={() =>
              dispatch(increaseByQuantity({ id: item.id, quantity: 1 }))
            }
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Button
          title="Choose Products"
          onPress={() => {
            console.log("button pressed");
            Navigation.navigate("SelectProductScreen");
          }}
        />
      </View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={renderItemHandler}
      />
      <View style={styles.billBox}>
        <Text>SubTotal:{subTotal}</Text>
        <Text>ToatlDiscount:{discountAmount}</Text>
        <Text>TaxAmount:{taxAmount}</Text>
        <Text>ToTalAmount:{totalAmount}</Text>
      </View>
    </View>
  );
}

function calculateInvoice() {
  const cart = useSelector((state) => state.cartManager.cart);
  let subTotal = 0;
  let discountAmount = 0;
  let taxAmount = 0;

  cart.forEach(
    ({
      sellingPrice,
      sellingPriceTaxType,
      discount,
      discountType,
      gstTax,
      quantity,
    }) => {
      // let priceExcludingTax = 0;
      let subTotalForEach = 0;
      let discountForEach = 0;
      let taxAmountForEach = 0;
      if (sellingPriceTaxType === "true") {
        let priceExcludingTax = sellingPrice - (sellingPrice * gstTax) / 100;
        subTotalForEach = priceExcludingTax * quantity;
      } else {
        subTotalForEach = sellingPrice * quantity;
      }
      if (discountType === "true") {
        discountForEach = subTotalForEach * (discount / 100);
      } else {
        discountForEach = discount * quantity;
      }
      taxAmountForEach = (subTotalForEach - discountForEach) * (gstTax / 100);
      console.log(taxAmountForEach);
      subTotal += subTotalForEach;
      discountAmount += discountForEach;
      taxAmount += taxAmountForEach;
    }
  );

  const totalAmount = subTotal - discountAmount + taxAmount;

  return [
    subTotal.toFixed(2),
    discountAmount.toFixed(2),
    taxAmount.toFixed(2),
    totalAmount.toFixed(2),
  ];
}

export default Invoice;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  incrementButton: {
    backgroundColor: "#4CAF50", // Green for increment
  },
  decrementButton: {
    backgroundColor: "#F44336", // Red for decrement
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  quantityContainer: {
    paddingHorizontal: 16,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  billBox: {
    backgroundColor: "#7fffd4",
  },
});
