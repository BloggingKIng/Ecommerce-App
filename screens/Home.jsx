import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import homeStyles from './homeStyles';
import { Welcome } from '../components';
import { ScrollView, TouchableOpacity } from 'react-native';
import Carousel from '../components/Home/Carousel';
import Headings from '../components/Home/Headings';
import ProductRow from '../components/Products/ProductRow';
export default function Home (){
    return (
        <SafeAreaView>
           <View style={homeStyles.appBarWrapper}>
                <View style={homeStyles.appbar}>
                    <Ionicons name="location-outline" size={24} />
                    <Text style={homeStyles.location}>Shanghai China</Text>
                    <View style={{alignItems:'flex-end'}}>
                        <View style={homeStyles.cartcount}>
                            <Text style={homeStyles.cartNumber}>8</Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name="shopping-bag" size={24}/>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
           <ScrollView>
                <Welcome />
                <Carousel />
                <Headings />
                <ProductRow />
           </ScrollView>
        </SafeAreaView>
    )
}