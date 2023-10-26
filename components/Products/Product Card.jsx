import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './product card.styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function ProductCard (){
    return (
        <TouchableOpacity onPressIn={()=>{}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri:"https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=2048x2048&w=is&k=20&c=y5qtIaTcN6mnSb3bxBBhnBycfmNK48g6xawyfXHB5lw="}} style={styles.image}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}