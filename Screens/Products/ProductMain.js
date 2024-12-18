import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Products from "./Products";
import Categories from "./Categories";
import Warehouse from "./Warehouse";
import Stock from "./Stock";

const Tab = createMaterialTopTabNavigator();

const ProductMain = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"ProductsScreen"} component={Products} />
      <Tab.Screen name={"CategoriesScreen"} component={Categories} />
      <Tab.Screen name={"WareHouseScreen"} component={Warehouse} />
      <Tab.Screen name={"StockScreen"} component={Stock} />
    </Tab.Navigator>
  );
};
export default ProductMain;
