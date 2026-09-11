import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FDFDFD",
        height: 50,
        borderBottomColor: "#333",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 16,
    },
    textInput: {
        height: 50,
        borderColor: "#333",
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 16,
        margin: 8,
        borderRadius: 8,
    }

});