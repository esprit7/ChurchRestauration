import React, {Component} from "react";
import { View, StyleSheet,StatusBar, FlatList,  Button} from "react-native"
import Header from '../components/Header'
import HomeNavigation from '../components/HomeNavigation'
import HomeItem from '../components/HomeItem'
const elementsMinistries = [
  {
    key: "1",
    description: "Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...",
    title: "Maison de prière",
    mediaURI: require("../../assets/ministries/priere.jpg"),
    address: "14 Rue Chaillon 92390 Villeneuve-la-Garenne",
    url: ""
  },
  {
    key: "2",
    description: "Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...",
    title: "Louange",
    mediaURI: require("../../assets/ministries/louange.jpg"),
    address: "",
    url: ""
  },
  {
    key: "3",
    description: "Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...",
    title: "Ministère aux enfants",
    mediaURI: require("../../assets/ministries/enfants.jpg"),
    address: "",
    url: ""
  },
  {
    key: "4",
    description: "Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...",
    title: "Humanitaire, FESIDEV",
    mediaURI: require("../../assets/ministries/fesidev.jpg"),
    address: "",
    url: "https://fesidev.org"
  },
  {
    key: "5",
    description: "Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...",
    title: "Livres, CPH",
    mediaURI: require("../../assets/ministries/cph.jpg"),
    address: "",
    url: "https://ztfbooks.com/en/"
  },
  {
    key: "6",
    description: "Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...",
    title: "Jeunesse Et Vie",
    mediaURI: require("../../assets/ministries/jev.jpg"),
    address: "",
    url: "https://www.jeunessetvie.fr"
  },
  {
    key: "7",
    description: "Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...Après la restauration et la réédition en Blu-Ray/DVD de La Mort vous va si bien, l'éditeur ... JOUR 2- Psychocandies, comme diraient le groupe Jesus & MAry Chain, soit des ... Drôle de chapelle pour messe grasse : La Gaité Lyrique, temple de la ... Originaire de Garoua, au Cameroun, Osvalde Lewat réside à Kinshasa, ...",
    title: "Communication",
    mediaURI: require("../../assets/ministries/communication.jpg"),
    address: "",
    url: ""
  }]
class Ministries extends Component {

  
  render() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Church Restauration"/>
      </View>
      <View style={styles.navigation}>
        <HomeNavigation navigate={this.props.navigation.navigate} items={["Accueil","Evenements","Ministries"]} position={2}/>
      </View>
      <View style={styles.content}>
        <FlatList showsVerticalScrollIndicator={false} data={elementsMinistries} renderItem={({item})=><HomeItem item={item}/>}/>
      </View>
    </View>
    
  }
};


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
    
    
    export default Ministries;