import SectionHome from "../../Components//Home/SectionHome";
import { ScrollView } from "react-native";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const Navigation = useNavigation();

  function pressHandler(itemName) {
    const screens = {
      Expense: "ExpenseScreen",
      Invoice: "InvoiceScreen",
      Quotation: "QuotationScreen",
      "Pro Forma Invoice": "ProFormaInvoiceScreen",
      PO: "POScreen",
      "Delivery Challan": "DeliveryChallanScreen",
      "Credit Note": "CreditNoteScreen",
      POS: "POSScreen",
      Projects: "ProjectsScreen",
      Products: "PraductMain",
      // Products: "ProductsScreen",
      // Products: "CreateProductScreen",
      "Staff & Payout": "StaffPayoutScreen",
      Customers: "CustomersScreen",
      Vendors: "VendorsScreen",
      Documents: "DocumentsScreen",
      Reminder: "ReminderScreen",
      Insights: "InsightsScreen",
      Reports: "ReportsScreen",
      "Business Card": "BusinessCardScreen",
    };

    if (screens[itemName]) {
      Navigation.navigate(screens[itemName]);
    }
  }
  const salesIcons = [
    "Sales",
    [
      {
        id: "s1",
        name: "Expense",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "s2",
        name: "Invoice",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "s3",
        name: "Quotation",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "s4",
        name: "Pro Forma Invoice",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "s5",
        name: "PO",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "s6",
        name: "Delivery Challan",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "s7",
        name: "Credit Note",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "s8",
        name: "POS",
        image: require("../../assets/images/react-logo.png"),
      },
    ],
  ];

  const manageIcons = [
    "Manage",
    [
      {
        id: "m1",
        name: "Projects",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "m2",
        name: "Products",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "m3",
        name: "Staff & Payout",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "m4",
        name: "Customers",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "m5",
        name: "Vendors",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "m6",
        name: "Documents",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "m7",
        name: "Reminder",
        image: require("../../assets/images/react-logo.png"),
      },
    ],
  ];

  const more = [
    "More",
    [
      {
        id: "e1",
        name: "Insights",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "e2",
        name: "Reports",
        image: require("../../assets/images/react-logo.png"),
      },
      {
        id: "e3",
        name: "Business Card",
        image: require("../../assets/images/react-logo.png"),
      },
    ],
  ];

  return (
    <ScrollView>
      <SectionHome icons={salesIcons} onPress={(name) => pressHandler(name)} />
      <SectionHome icons={manageIcons} onPress={(name) => pressHandler(name)} />
      <SectionHome icons={more} onPress={(name) => pressHandler(name)} />
    </ScrollView>
  );
}
export default Home;
