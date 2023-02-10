import { useEffect, useState } from "react"
import { StyleSheet, View, Text } from "react-native"


const Main = () => {
    const [sampleData, setSampleDate] = useState([
        {
            date: "01/01/01",
            amount: 30,
            type: "Expense",
        },
        {
            date: "01/01/02",
            amount: 50,
            type: "Income",
        }
    ])

    const [runningTotal, setRunningTotal] = useState(0)
    const [target, setTarget] = useState(0)

    const getRunningTotal = () => {
        var runningTotal = 0
        for (data of sampleData) {
            runningTotal += data.amount
        }
        setRunningTotal(runningTotal)
    }

    useEffect(() => {
        getRunningTotal()
    })
    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainItems}>
                <Text style={[styles.itemDate, styles.itemTitle]}>Date</Text>
                <Text style={[styles.itemAmount, styles.itemTitle]}>Amount</Text>
                <Text style={[styles.itemType, styles.itemTitle]}>Type</Text>
                <Text style={[styles.itemRunningTotal, styles.itemTitle]}>Running Total</Text>
                <Text style={[styles.itemTarget, styles.itemTitle]}>Target</Text>
            </View>
            {sampleData.map(data => 
                    <View style={styles.mainItems}>
                        <Text style={styles.itemDate}>{data.date}</Text>
                        <Text style={styles.itemAmount}>{data.amount}</Text>
                        <Text style={styles.itemType}>{data.type === "Income" ? "Income": "Expense"}</Text>
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
        fontFamily: "Ubuntu-Regular",
        borderWidth: 1,
        width: "20%",
        textAlign: "center",
    },
    itemAmount: {
        fontFamily: "Ubuntu-Regular",
        borderWidth: 1,
        width: "15%",
        textAlign: "center",
    },
    itemType: {
        fontFamily: "Ubuntu-Regular",
        borderWidth: 1,
        width: "15%",
        textAlign: "center",
    },
    itemRunningTotal: {
        fontFamily: "Ubuntu-Regular",
        borderWidth: 1,
        width: "30%",
        textAlign: "center",
    },
    itemTarget: {
        fontFamily: "Ubuntu-Regular",
        borderWidth: 1,
        width: "20%",
        textAlign: "center",
    }

})

export default Main

