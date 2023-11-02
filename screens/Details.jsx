import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './productStyles';
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { SIZES } from '../constants';
export default function Details ({navigation}){
    const [count, setCount] = useState(1);
    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPressIn={()=>navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPressIn={()=>{}}>
                    <Ionicons name='heart' size={30} />
                </TouchableOpacity>
            </View>
            <Image source={{uri:"https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=2048x2048&w=is&k=20&c=y5qtIaTcN6mnSb3bxBBhnBycfmNK48g6xawyfXHB5lw="}} style={styles.image}/>
            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Product</Text>
                    <View style={styles.pricewrapper}>
                        <Text style={styles.price}>
                            $2499
                        </Text>
                    </View>
                </View>
                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1,2,3,4,5].map((index)=>(
                            <Ionicons key={index} name='star' size={24} color="gold" />
                        ))}
                        <Text style={styles.ratingText}>(4.9)</Text>
                    </View>
                    <View style={styles.rating}>
                        <TouchableOpacity onPress={()=>{setCount((count)=>count+1)}}>
                            <SimpleLineIcons name='plus' size={20}/>
                        </TouchableOpacity>
                        <Text style={styles.ratingText}> {count} </Text>
                        <TouchableOpacity onPress={()=>{setCount((count)=>count>0?count-1:count)}}>
                            <SimpleLineIcons name='minus' size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>
                        Description
                    </Text>
                    <Text style={styles.descText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod turpis vel arcu laoreet, vel convallis libero dictum. Quisque viverra risus id tristique mattis. Phasellus sit amet tincidunt justo. Suspendisse ac dapibus neque. Curabitur id sem sit amet odio hendrerit accumsan. Aliquam erat volutpat. Nullam bibendum dui a leo laoreet, et ullamcorper quam fringilla. Fusce facilisis, lorem et iaculis rhoncus, arcu ex vehicula felis, eu auctor mauris libero a justo.
                        Sed convallis orci ac justo semper, id vehicula eros sollicitudin. Nulla facilisi. Vestibulum tincidunt odio eget eleifend. Morbi tristique ac turpis sed suscipit. Aenean ac dictum turpis. Fusce euismod, ex a ullamcorper viverra, erat purus fermentum odio, ut venenatis justo dui id est. Integer vitae congue eros. Sed et vulputate nulla. 
                    </Text>
                </View>
                <View style={{marginBottom:SIZES.small}}>
                    <View style={styles.location}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Ionicons name='location-outline' size={20}/>
                            <Text style={styles.ratingText}>Faisalabad, Pakistan</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
                            <Text style={styles.ratingText}>Free Delivery</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}