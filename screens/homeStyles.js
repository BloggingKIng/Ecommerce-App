import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const homeStyles = StyleSheet.create({
    textStyle:{
        fontFamily:'bold',
        fontSize:40,
    },
    appBarWrapper:{
        marginHorizontal:22,
        marginTop:SIZES.small,
    },
    appbar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    location:{
        fontFamily:'semibold',
        fontSize:SIZES.medium,
        color:COLORS.gray,
    },
    cartcount:{
        height:16,
        position:'absolute',
        bottom:16,
        width:16,
        borderRadius:8,
        alignItems:'center',
        backgroundColor:'green',
        justifyContent:'center',
        zIndex:999
    },
    cartNumber:{
        fontFamily:'regular',
        fontSize:10,
        fontWeight:600,
        color:COLORS.lightWhite
    }
})

export default homeStyles;