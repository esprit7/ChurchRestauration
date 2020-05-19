import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, FlatList} from 'react-native';
import HomeNavigation from '../components/HomeNavigation'
import Header from '../components/Header'
import HomeItem from '../components/HomeItem'
const elementsBooks = [{
  key: "9782357740471",
  title: "L’ORDONANCE DU SANG",
  mediaURI: require("../../assets/books/apd.jpg"),
  description:"(Exode12 versets 13-14) «  13.Le sang vous servira de signe sur les maisons où vous serez ; je verrai le sang, et je passerai par-dessus vous, et il n’y aura point de plaie qui vous détruise, quand je frapperai le pays d’Egypte. 14. Vous conserverez le souvenir de ce jour, et vous le célébrerez par une fête en l’honneur de l’Eternel ; vous le célébrerez comme une loi perpétuelle pour vos descendants » \n Le sang sera une marque de distinction et sera célébré de  génération en génération. La bible dit que ça sera une loi qui sera gardée dans tout Israël. A cause du sang, rien qui détruit, ni aucune plaie ne va  entrer dans notre corps, notre maison, à l’Eglise pour nous tuer ou nous anéantir. ",
  url:
    "../../assets/doc/ordonance du sang.docx"
  
},
{
  key: "9782357740037",
  title: "LE JUGEMENT DE DIEU CONTRE LES MECHANTS ",
  description:"La Parole de Dieu dit que, lorsqu’Athalie vit que son fils était mort, elle a sélectionné tous les hommes sages capables de porter la royauté, ceux qui pouvaient régner, ceux qui devaient remplacer son fils mort et a laissé essentiellement tous ceux qui étaient inutiles, insensés dans cette famille, cette race royale, Athalie a tué et elle-même s’est assise sur le trône.Bien aimé, nous parlons ici de la sorcellerie familiale. Cette Athalie peut être une déesse dans ton village ou dans ta famille. \n ",
  mediaURI: require("../../assets/books/apd.jpg"),
  url:
    "../../assets/doc/LA SORCELLERIE FAMILIALE.docx"
},
{
  key: "9782357740266",
  title: "COMBATTRE L’HOMME FORT (2)",
  description:"Qui est l’homme fort ? \n\n L’homme fort est un esprit démoniaque, une personnalité spirituelle maléfique qui a été accueilli dans une famille, dans une vie, dans un village ou même dans un pays et qui, à la fin se retourne  contre les gens qui l’on amené et se constitue comme \n \n « Ou, comment quelqu’un peut-il entrer dans la maison d’un homme fort et piller ses biens, sans avoir auparavant lié cet homme fort ?.....». Il y a une personnalité qui s’appelle l’homme fort, il a une maison et, pour l’enlever c’est pas du tout facile, il faut d’abord l’attacher afin de prendre ce dont tu as besoin. Il y a, dans le monde ce qu’on appelle « l’homme fort » et ce qu’on appelle le « dieu de ce monde ».",
  mediaURI: require("../../assets/books/centre_sur_dieu.jpg"),
  url: "../../assets/doc/COMBATTRE L'HOMME FORT (2).docx"
},
{
  key: "9782357740112",
  title: "L'IMPACT DU SANG DE JESUS",
  description:"",
  mediaURI: require("../../assets/books/centre_sur_dieu.jpg"),
  url:
    "../../assets/doc/L'IMPACT DU SANG DE JESUS.docx"
},
{
  key: "9782357740112",
  title: "LA DELIVRANCE DES MALADIES SATANIQUES ET DES INFIRMITES",
  description:"Les maladies sataniques et les infirmités sont des maladies que le monde satanique  projette contre les Hommes et qui défies toute solution médicale et sponsorisées par les sorciers. Ces maladies et infirmités sont encore celles que les Hommes contactent à travers le monde des rêves, les flèches sataniques et le poison, celles qui viennent de la lignée sanguine et qui ont tué le grand père, le père, et tout autre personne de ta famille. \n\n LA BONNE NOUVELLE POUR TOUS CEUX QUI EN SOUFFRENT \n\n A la croix, Jésus a vaincu la mort, il permit que la mort vienne sur lui afin que l’Homme soit sauvé. Alors, en tant que chrétien, tu as une garantie de la victoire sur toutes les maladies et infirmités sataniques ainsi que sur la mort. Par ta nouvelle naissance, les maladies et la mort n’ont aucun pouvoir sur toi.Jésus a dit dans sa Parole que : « par ses meurtrissures nous serons guérit ; cela signifie que son corps avait été blessé et chaque blessure représentait les maladies, les infirmités sataniques que quiconque croit en son nom aurait contacté ».",
  mediaURI: require("../../assets/books/centre_sur_dieu.jpg"),
  url:
    "../../assets/doc/DELIVRANCE DES MALADIES.docx"
},
{
  key: "9782357740259",
  title: "L'utilisation du temps",
  mediaURI: require("../../assets/books/utilisation_du_temps.jpg"),
  url:
    "https://elclivres.fr/accueil/14-l-utilisation-du-temps-9782357740259.html"
},
{
  key: "9782357740112",
  title: "LA PREPARATION POUR LA FIN DES TEMPS",
  description:" La fin des temps est tout simplement la fin de ce monde présent lorsque Jésus fera retentir le son de la trompette.L’une des raisons pour lesquelles Christ est mort sur la croix c’est pour te préparer pour entrer dans la nouvelle Jérusalem ; car, le moment viendra où Dieu détruira le monde entier pour bâtir la nouvelle Jérusalem où il n’y aura pas de pleurs, ni souffrance, ni deuil.\n\n Bien aimé dans le Christ, il est nécessaire de savoir que, lorsque la venue de Jésus sera proche, satan enverra les hommes à l’Eglise pour séduire les hommes disant qu’ils viennent au nom de Jésus. Plusieurs sont à l’Eglise mais ne sont pas nés de nouveau car ils ne vont pas é l’Eglise non pas pour Jésus, mais pour acquérir des biens matériels ors, la Parole de Dieu dit que toutes ces choses sont vaines, elles seront un jour toutes consumées par les flammes de feu. \n\n ",
  mediaURI: require("../../assets/books/centre_sur_dieu.jpg"),
  url:
    "../../assets/doc/LA PREPARATION POUR LA FIN DES TEMPS.docx"
},
]
class Books extends Component {
  render() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Church Restauration"/>
      </View>
      <View style={styles.navigation}>
        <HomeNavigation navigate={this.props.navigation.navigate} items={["Accueil","Enseignement","Ministries"]} position={1}/>
      </View>
      <View style={styles.content}>
        <FlatList data={elementsBooks} renderItem={({item})=><HomeItem item={item}/>}/>
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
export default Books;