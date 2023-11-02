import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './product card.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

export default function ProductCard (){
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPressIn={()=>{navigation.navigate("Product Details")}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri:"https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=2048x2048&w=is&k=20&c=y5qtIaTcN6mnSb3bxBBhnBycfmNK48g6xawyfXHB5lw="}} style={styles.image}/>
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>
                        Product
                    </Text>
                    <Text style={styles.supplier}>
                        HZ furnishes 
                    </Text>
                    <Text style={styles.price}>
                        $2556
                    </Text>
                </View>
                <TouchableOpacity style={styles.addbtn}>
                    <Ionicons name='add-circle' size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}