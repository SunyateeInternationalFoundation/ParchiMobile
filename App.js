import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

//below this import components
import store from "./Store/MainStore";
import Home from "./Screens/Home/Home";
import Products from "./Screens/Products/Products";
import CreateProduct from "./Screens/Products/CreateProduct";
import Invoice from "./Screens/Invoice/Invoice";
import SelectProduct from "./Screens/Invoice/SelectProduct";
import ProductMain from "./Screens/Products/ProductMain";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"HomeScreen"} component={Home} />
          {/* <Stack.Screen name={"ProductsScreen"} component={Products} /> */}
          <Stack.Screen name={"InvoiceScreen"} component={Invoice} />
          <Stack.Screen name={"PraductMain"} component={ProductMain} />

          <Stack.Screen
            name={"CreateProductScreen"}
            component={CreateProduct}
          />
          <Stack.Screen
            name={"SelectProductScreen"}
            component={SelectProduct}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
