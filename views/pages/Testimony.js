import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, FlatList} from 'react-native';
import HomeNavigation from '../components/HomeNavigation'
import Header from '../components/Header'
import HomeItem from '../components/HomeItem'
const elementsTestimonys = [{
  title:"Temoignage 1",
  description:"Bien aimé, es-tu ici à Garoua où hors de Garoua? La chapelle de la restauration en Christ t'invite à un puissant programme des femmes de trois jours qui commencera vendredi 6 au dimanche 8 mars 2020...Crois moi, ces trois jours te provoquera à te lever et devenir un exemple pour ta génération",
  /* mediaURI: require("../../assets/images/event1.png"), */
  
},
{
title:"Temoignage 1",
  description:"chaque samedi à partir de 9h-12h les enfants ont leurs cultes de louange et d'adoration",
  mediaURI: require("../../assets/images/event1.png"),
  
},

{
  title:"Temoignage 1",
  description:"concert des enfants de coeur de Ouro Chede",
  mediaURI: require("../../assets/images/event1.png"),
  
},
{
title:"Temoignage 1",
  description:"concert des enfants de coeur de Ouro Chede",
  mediaURI: require("../../assets/images/event1.png"),
  
}
,
{
title:"Temoignage 1",
  description:"concert des enfants de coeur de Ouro Chede",
  mediaURI: require("../../assets/images/event1.png"),
  
}
]
class Testimonys extends Component {
  render() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Church Restauration"/>
      </View>
      <View style={styles.navigation}>
        <HomeNavigation navigate={this.props.navigation.navigate} items={["Accueil","Evenements","Ministries"]} position={1}/>
      </View>
      <View style={styles.content}>
        <FlatList data={elementsTestimonys} renderItem={({item})=><HomeItem item={item}/>}/>
      </View>
    </View>
    
  }
}
const styles= {
container:{
backgroundColor:'white',
flex:1
},
header:{
  backgroundColor:'black',
  flex:1
},
navigation:{
  backgroundColor:'yellow',
  flex:1
},
content:{
  padding:15,
  flex:4
}

}
export default Testimonys;