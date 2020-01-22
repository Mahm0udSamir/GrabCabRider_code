import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class EmptyNotification extends React.Component {

    constructor(props){
        super(props);
    }

    render(){    
    return(
        <View style={styles.container}>
            <View style={styles.notifyStyle}>
                <Image
                    style={styles.imageStyle}
                    source={require('../../assets/images/Notification.png')}
                />      
                <Text>No notification found</Text>    
            </View> 
        </View> 
    ); 
}
};
const styles = StyleSheet.create({
    myHeader:{
        marginTop:0,   
    },
    notifyStyle:{
        alignItems:'center',
        marginTop:150
    },
    
    imageStyle:{
        width: 160, 
        height: 200
    },
    container:{
        flex:1
    }
});