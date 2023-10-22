import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    container : {
        width:'100%',
    },
    welcome_text : (color, top)=>({
        fontFamily:'bold',
        fontSize: SIZES.xxLarge - 6,
        marginTop: top,
        color: color,
        marginHorizontal:SIZES.small
    }),
    searchContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        marginHorizontal:SIZES.small,
        marginVertical:SIZES.medium,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary,
        height:50,
    },
    searchIcon:{
        color:COLORS.gray,
        marginHorizontal:10,
        marginTop:SIZES.small,
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        borderRadius: SIZES.small,
        marginRight: SIZES.small,
    },
    searchInput: {
        fontFamily:'regular',
        width:"100%",
        height:"100%",
        paddingHorizontal:SIZES.small,
    },
    searchBtn : {
        width:50,
        height:"100%",
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.primary,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default styles;