import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite,
    },
    upperRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position:'absolute',
        top:SIZES.xLarge,
        marginHorizontal:20,
        width:SIZES.width-44,
        zIndex:999,
    },
    image:{
        aspectRatio:1,
        resizeMode:'cover'
    },
    details:{
        marginTop:-SIZES.large,
        backgroundColor:COLORS.lightWhite,
        width:SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:SIZES.width-44,
        top:20,
    },
    ratingRow:{
        paddingBottom:SIZES.small,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:SIZES.width-10,
        top:5,
    },
    title:{
        fontFamily:'bold',
        fontSize:SIZES.large,
    },
    pricewrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large,
    },
    price:{
        fontFamily:'semibold',
        fontSize:SIZES.large,
        paddingHorizontal:10,
    },
    rating:{
        top:SIZES.large,
        justifyContent:'flex-start',
        flexDirection:'row',
        marginHorizontal:SIZES.large,
    },
    ratingText:{
        fontFamily:'medium',
        color:COLORS.gray,
        marginHorizontal:5,
    },
    descriptionWrapper:{
        marginTop:SIZES.large*2,
        marginHorizontal:SIZES.large,
    },
    description:{
        fontFamily:"medium",
        fontSize: SIZES.large-2,
    },
    descText:{
        fontSize:"regular",
        fontSize:SIZES.small,
        textAlign:"justify",
        marginBottom:SIZES.small,
    },
    location:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:COLORS.secondary,
        padding:5,
        borderRadius:SIZES.large,
        marginHorizontal:12,
    }
})

export default styles