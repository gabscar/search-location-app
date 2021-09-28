import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    card: {
        backgroundColor:'#DBDBDB',
		height:90,	
		paddingTop:20.5,
		width:'95%',
		borderRadius:12,
		borderColor:'white',
		borderWidth:2,
		marginBottom:8,
		alignSelf:'center',
		flexDirection:'row',
		justifyContent:'space-between',
		paddingBottom: 20,
    },
	title:{
		fontSize: 16,
		fontWeight:'bold',
		marginLeft:6
	},
	subtitle:{
		marginLeft:6
	},
	cardText:{
		borderLeftWidth:4,
		marginLeft:20,
		borderLeftColor:'red',
		width:260,
	},
	Button:{
        borderRadius:12,
        width:40,
        height:50,
		alignItems:'center',
		justifyContent:'center',
		marginRight:5,
		backgroundColor:'#DBDBDB'
	}

})