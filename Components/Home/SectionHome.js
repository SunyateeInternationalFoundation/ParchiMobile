import { Text, View, StyleSheet, Image, Pressable } from "react-native";

function SectionHome({ icons, onPress }) {
  const [title, items] = icons;
  return (
    <View style={styles.outerMainContainer}>
      <View style={styles.title}>
        <Text>{title}</Text>
      </View>
      <View style={styles.outerContainer}>
        {items.map((item) => (
          <View style={styles.innerContainer} key={item.id}>
            <Pressable onPress={() => onPress(item.name)}>
              <Image source={item.image} style={styles.iconImage} />
            </Pressable>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default SectionHome;

// const styles = StyleSheet.create({
//   outerMainContainer: {
//     margin: 8,
//     marginVertical: 8,
//     borderRadius: 12, // Rounded corners for the container
//     elevation: 4, // Shadow effect for Android
//     shadowColor: "#000", // Shadow color for iOS
//     shadowOffset: { width: 0, height: 2 }, // Offset for iOS shadow
//     shadowOpacity: 0.25, // Opacity for iOS shadow
//     shadowRadius: 2, // Blur radius for iOS shadow
//     overflow: "hidden ",
//   },
//   outerContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap", // Allows wrapping to the next line when space runs out
//     justifyContent: "flex-start", // Ensures items align to the left
//     backgroundColor: "#f0f0f0", // Light gray background for a distinct section
//     borderRadius: 12,
//     padding: 8, // Padding inside the container
//     margin: 10, // Margin to separate the container from other components
//   },
//   innerContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: "22%", // Ensures 4 items fit per row
//     height: 120, // Fixed height for each column
//     marginVertical: 8, // Vertical spacing between rows
//     backgroundColor: "#ffffff", // White background for individual items
//     borderRadius: 8, // Rounded corners for individual items
//     elevation: 3, // Shadow for individual items (Android)
//     shadowColor: "#000", // Shadow for individual items (iOS)
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     marginHorizontal: "1%", // Minimal horizontal spacing between items
//   },
//   iconImage: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//     backgroundColor: "#dcdcdc",
//     borderRadius: 8,
//   },
//   text: {
//     fontSize: 14,
//     textAlign: "center",
//     color: "#333", // Dark text color for readability
//     margin: 5,
//   },
//   title: {
//     borderRadius: 8,
//     marginBottom: 8, // Fixed margin at the bottom of the title
//     backgroundColor: "#b0c4de", // Background color for the title
//     paddingHorizontal: 16, // Internal padding to prevent text from touching the edges
//     alignSelf: "flex-start", // Ensures the title aligns to the left and adjusts based on text width
//   },
// });

const styles = StyleSheet.create({
  outerMainContainer: {
    margin: 8,
    borderRadius: 12, // Rounded corners for the container
    elevation: 4, // Shadow effect for Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Offset for iOS shadow
    shadowOpacity: 0.25, // Opacity for iOS shadow
    shadowRadius: 2, // Blur radius for iOS shadow
    overflow: "hidden", // Removed extra space
  },
  outerContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows wrapping to the next line when space runs out
    justifyContent: "flex-start", // Ensures items align to the left
    backgroundColor: "#f0f0f0", // Light gray background for a distinct section
    borderRadius: 12,
    padding: 8, // Padding inside the container
    marginHorizontal: 10, // Ensures equal spacing on left and right
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "22%", // Ensures 4 items fit per row
    height: 120, // Fixed height for each column
    marginVertical: 8, // Vertical spacing between rows
    backgroundColor: "#ffffff", // White background for individual items
    borderRadius: 8, // Rounded corners for individual items
    elevation: 3, // Shadow for individual items (Android)
    shadowColor: "#000", // Shadow for individual items (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginHorizontal: "1%", // Minimal horizontal spacing between items
  },
  iconImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
    backgroundColor: "#dcdcdc", // Light gray background for the icon
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: "#333", // Dark text color for readability
    margin: 5, // Padding around text
  },
  title: {
    borderRadius: 8,
    marginBottom: 8, // Fixed margin at the bottom of the title
    backgroundColor: "#b0c4de", // Background color for the title
    paddingHorizontal: 16, // Internal padding to prevent text from touching the edges
    alignSelf: "flex-start", // Ensures the title aligns to the left and adjusts based on text width
    marginBottom: 8, // Margin at the bottom to separate from content
  },
});
