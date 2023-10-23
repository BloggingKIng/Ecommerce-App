import { View, Text, TouchableOpacity } from "react-native";
import styles from "./heading styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";


export default function Headings (){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>New Arrivals</Text>
                <TouchableOpacity>
                    <Ionicons name="ios-grid" color={COLORS.primary} size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}