import { FlatList, Text, View } from "react-native";
import styles from "./product styles";
import { SIZES } from "../../constants";
import ProductCard from "./Product Card";

export default function ProductRow (){
    const products = [
        1,2,3,4
    ]
    return (
        <View style={{marginTop:SIZES.medium}}>
            <FlatList  
                data={products}
                renderItem={({item})=>(<ProductCard />)}
                horizontal
                contentContainerStyle={{columnGap:SIZES.medium}}

            />
        </View>
    )
}