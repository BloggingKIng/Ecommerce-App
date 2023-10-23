import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        height:240,
        width:182,
        marginEnd:22,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary,
    },
    imageContainer :{
        flex:1,
        width:170,
        height: 240,
        marginLeft:SIZES.small/2,
        marginTop:SIZES.small/2,
        borderRadius:SIZES.small,
        overflow:'hidden',
    },
    image: {
        aspectRatio:1,
        resizeMode:'cover',
    }
})

export default  styles;