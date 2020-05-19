import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, FlatList} from 'react-native';
import HomeNavigation from '../components/HomeNavigation'
import Header from '../components/Header'
import HomeItem from '../components/HomeItem'
const elementsAdorations = [{
  key: "9782357740471",
  title: "Le Chemin de la Vie",
  mediaURI: require("../../assets/books/clv.jpg"),
  url:
    "https://elclivres.fr/accueil/8-le-chemin-de-la-vie-9782357740471.html"
},
{
  key: "9782357740037",
  title: "L'Amour et le Pardon de Dieu",
  mediaURI: require("../../assets/books/apd.jpg"),
  url:
    "https://elclivres.fr/accueil/20-l-amour-et-le-pardon-de-dieu-9782357740037.html"
},
{
  key: "9782357740266",
  title: "Centré sur Dieu",
  mediaURI: require("../../assets/books/centre_sur_dieu.jpg"),
  url: "https://elclivres.fr/accueil/32-centre-sur-dieu.html"
},
{
  key: "9782357740112",
  title: "Connaitre le Dieu de bonté sans pareille",
  mediaURI: require("../../assets/books/connaitre_dieu.jpg"),
  url:
    "https://elclivres.fr/accueil/25-connaitre-le-dieu-de-bonte-sans-pareille--9782357740112.html"
},
{
  key: "9782357740686",
  title: "Réveil spirituel personnel",
  mediaURI: require("../../assets/books/reveil_spirituel_personnel.jpg"),
  url:
    "https://elclivres.fr/accueil/16-reveil-spirituel-personnel-9782357740686.html"
},
{
  key: "9782357740259",
  title: "L'utilisation du temps",
  mediaURI: require("../../assets/books/utilisation_du_temps.jpg"),
  url:
    "https://elclivres.fr/accueil/14-l-utilisation-du-temps-9782357740259.html"
},
{
  key: "9782357740249",
  title: "L'utilisation du temps",
  mediaURI: require("../../assets/books/utilisation_du_temps.jpg"),
  url:
    "https://elclivres.fr/accueil/14-l-utilisation-du-temps-9782357740259.html"
},
]
class Adorations extends Component {
  render() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Church Restauration"/>
      </View>
      <View style={styles.navigation}>
        <HomeNavigation navigate={this.props.navigation.navigate} items={["Accueil","Enseignement","Ministries"]} position={1}/>
      </View>
      <View style={styles.content}>
        <FlatList data={elementsAdorations } renderItem={({item})=><HomeItem item={item}/>}/>
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
export default Adorations;