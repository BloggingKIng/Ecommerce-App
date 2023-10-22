import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./welcome styles";
import { COLORS, SIZES } from "../../constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Welcome (){
    const navigation = useNavigation();
    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.welcome_text(COLORS.black,SIZES.xSmall)}>Find the Most</Text>
                <Text style={styles.welcome_text(COLORS.primary, 0)}>Luxurious Furniture</Text>
            </View>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name="search" style={styles.searchIcon} size={24} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput style={styles.searchInput} placeholder="What are you looking for? " value="" onPressIn={()=>{navigation.navigate("Search")}}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.white}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}