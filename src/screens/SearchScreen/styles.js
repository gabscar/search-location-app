import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFF',        
    },
    title:{
        paddingHorizontal: 10,
        fontSize: 22,
        paddingVertical: 15
    },
    Input: {
        alignSelf:'center',
        width: '95%',
        height:56,
        borderRadius:12,
        backgroundColor:'white',
        paddingLeft:12,
        borderWidth: 2,
    },
    ButtonsView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Button:{
        backgroundColor: 'red',
        marginTop:20,
        marginHorizontal:10,
        borderRadius:12,
        width:140,
        height:50
    },
    titleButton:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    error: {
        fontSize: 14,
        color: 'red',
        paddingHorizontal: 4,
        paddingTop: 4,
        marginLeft:10,
    },
    scrollCity: {  
        flex:1,  
        height:'100%',
        marginTop:15
    },
    scrollTitle:{
        marginTop:15,
        fontSize: 24,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom: 4
    }
})