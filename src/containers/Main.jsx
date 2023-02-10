import { useState } from "react"
import { StyleSheet, View, Text } from "react-native"


const Main = () => {
    const [sampleData, setSampleDate] = useState([
        {
            date: "01/01/01",
            amount: 30,
            type: "expense",
        },
        {
            date: "01/01/02",
            amount: 50,
            type: "income",
        }
    ])

    const [runningTotal, setRunningTotal] = useState(0)
    const [target, setTarget] = useState(0)
    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainItems}>
                <Text style={styles.itemDate}>Date</Text>
                <Text style={styles.itemAmount}>Amount</Text>
                <Text style={styles.itemType}>Type</Text>
                <Text style={styles.itemRunningTotal}>Running Total</Text>
                <Text style={styles.itemTarget}>Target</Text>
            </View>
            {sampleData.map(data => 
                    <View style={styles.mainItems}>
                        <Text style={styles.itemDate}>{data.date}</Text>
                        <Text style={styles.itemAmount}>{data.amount}</Text>
                        <Text style={styles.itemType}>{data.type === "income" ? "income": "expense"}</Text>
                        <Text style={styles.itemRunningTotal}>{runningTotal}</Text>
                        <Text style={styles.itemTarget}>{target}</Text>
                    </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        borderColor: "red",
        borderWidth: 1,
    },
    mainItems: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",        
    },
    itemTitle: {
        borderWidth: 1,
        flexGrow: 1,
        textAlign: "center",
        fontFamily: "SpaceMono-Regular",
    },
    itemDate: {
        fontFamily: "SpaceMono-Regular",
        borderWidth: 1,
        width: "20%",
        textAlign: "center",
    },
    itemAmount: {
        fontFamily: "SpaceMono-Regular",
        borderWidth: 1,
        width: "15%",
        textAlign: "center",
    },
    itemType: {
        fontFamily: "SpaceMono-Regular",
        borderWidth: 1,
        width: "20%",
        textAlign: "center",
    },
    itemRunningTotal: {
        fontFamily: "SpaceMono-Regular",
        borderWidth: 1,
        width: "30%",
        textAlign: "center",
    },
    itemTarget: {
        fontFamily: "SpaceMono-Regular",
        borderWidth: 1,
        width: "15%",
        textAlign: "center",
    }

})

export default Main

