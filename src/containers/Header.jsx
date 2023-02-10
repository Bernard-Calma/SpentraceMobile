import { View, Text, StyleSheet } from "react-native"

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.appTitle}> Spentrace </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        borderColor: "black",
        borderWidth: 2,
        height: 100,
        margin: "auto"
    },
    appTitle: {
        textAlign: "center",
        paddingTop: 40,
        fontSize: 40,
        fontFamily: 'RussoOne-Regular',
        fontWeight: "bold",
    },
})