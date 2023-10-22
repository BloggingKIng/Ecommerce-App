import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../components/Home/welcome styles';
import { TouchableOpacity, TextInput } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SIZES, COLORS } from '../constants/theme';
export default function Search (){
    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name="camera-outline" style={styles.searchIcon} size={24}  />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput style={styles.searchInput} placeholder="What are you looking for? " value="" onPressIn={()=>{}}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Feather name="search" size={SIZES.xLarge} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}