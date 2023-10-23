import { Text, View, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

export default function Carousel (){
    const slides = [
        require('../../assets/images/fn1.jpg'),
        require('../../assets/images/fn2.jpg'),
        require('../../assets/images/fn3.jpg'),
    ]

    return (
        <View style={styles.CarouselContainer}>
            <SliderBox  
                dotColors={COLORS.primary} 
                images={slides} 
                inactiveDotColor={COLORS.secondary} 
                    ImageComponentStyle={{
                    borderRadius: 15,
                    marginTop:15,
                    width:'95%',
                }}
                autoplay={true}
                circleLoop={true}
                autoplayInterval={5000}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    CarouselContainer: {
        flex:1,
        alignItems:'center'
    },
})