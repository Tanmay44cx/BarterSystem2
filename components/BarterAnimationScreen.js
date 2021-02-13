  
import React from 'react';
import {View, Image, Text} from 'react-native'



export default class BarterAnimation extends React.Component {
  render() {
    return (
     <View
     style={{
flex:1
     }}
     >
         <Image 
            style = {{width: 250, height: 300,
            alignSelf:'center'
            }}
            source = {require('../assets/trade.jpg')}
          />
          <Text style={{fontSize:45,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
}}>Barter System App</Text>

         </View>
    )
  }
}