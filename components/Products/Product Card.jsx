import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './product card.styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function ProductCard (){
    return (
        <TouchableOpacity onPressIn={()=>{}}>
            <ScrollView style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/fn1.jpg')} style={styles.image}/>
                </View>
            </ScrollView>
        </TouchableOpacity>
    )
}