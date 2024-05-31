import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';


const ListItem = ({ item }) => (
  <View style ={{marginLeft:21}}>
    <View style={{ flexDirection: 'row', marginTop: 18, marginRight: 4}}>
      <View style={{ backgroundColor: '#ffff', width: 160, height: 170, flexDirection: 'column', borderRadius: 15, paddingTop: 10, paddingLeft: 8 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', }}> {item.text} </Text>
        <Text style={{ fontSize: 11 }}> {item.tasks} </Text>
        <Image source={item.uri} style={styles.horimage} />
      </View>
    </View>
  </View>
);

const Section = ({ title, data }) => (
  <View>
    <Text style={styles.sectionHeader}>{title}</Text>
    <FlatList
      horizontal data={data}
      renderItem={({ item }) => <ListItem item={item} />}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.flatList}
    />
  </View>
);




const HORIZONTAL = [{
  title: 'Categories',
  data: [
    {
      key: '1',
      text: 'Exercise',
      tasks: '12 Tasks',
      uri: require('./assets/images/first.png'),
    },
    {
      key: '2',
      text: 'Study',
      tasks: '12 Tasks',
      uri: require('./assets/images/second.png'),
    },

    {
      key: '3',
      text: 'Spiritual Study',
      tasks: '5 tasks',
      uri: 'https://picsum.photos/id/1027/200',
    },
    {
      key: '4',
      text: 'Blogging',
      tasks: '8 tasks',
      uri: 'https://picsum.photos/id/1035/200',
    },
    {
      key: '5',
      text: 'Cleaning',
      tasks: '10 tasks',
      uri: 'https://picsum.photos/id/1038/200',
    },
    {
      key: '6',
      text: 'Code',
      tasks: '4 tasks',
      uri: 'https://picsum.photos/id/1038/200',
    },
    {
      key: '7',
      text: 'Cook',
      tasks: '3 tasks',
      uri: 'https://picsum.photos/id/1038/200',
    },
    {
      key: '8',
      text: 'Cleaning',
      tasks: '10 tasks',
      uri: 'https://picsum.photos/id/1038/200',
    },
    {
      key: '9',
      text: 'Sleep',
      tasks: '1 task',
      uri: 'https://picsum.photos/id/1038/200',
    },
  ],
},
];




export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <View style={styles.container}>
      <ScrollView style={{flex:1}}>
        <Text style={{ alignSelf: 'flex-start', marginTop: 50, marginLeft: 20, fontSize: 32, fontWeight: 700, lineHeight: 38.4 }}>Hello , Devs</Text>
        <Text style={{ alignSelf: 'flex-start', marginLeft: 20, fontSize: 12 }}>14 tasks today</Text>

        <View style={styles.profilebg}>
          <Image style={{ resizeMode: 'contain', width: 50, height: 50 }} source={require("./assets/images/image.png")} />
        </View>

        <View style={styles.searchrow}>

          <View style={styles.searchbg}>
            <Feather name="search" size={24} color="black" style={styles.searchbutton} />
            <TextInput placeholder='Search' />
          </View>

          <View style={{ marginTop: 40, }}>
            <Feather name="sliders" size={34} color="white" style={{ backgroundColor: '#ff5349', alignSelf: 'flex-end', padding: 9, borderRadius: 15, marginTop: -3, transform: [{ rotate: "90deg" }] }} />
          </View>

        </View>
      
      {HORIZONTAL.map((category, index) => (
          <Section key={index} title={category.title} data={category.data} />
        ))}
        </ScrollView>

      </View> 
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red'
  },
  image: {
    width: 100,
    height: 100,
  },
  profilebg: {
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: -58,
    backgroundColor: 'white',
    width: 55,
    height: 55,
    borderRadius: 100,
    alignItems: 'center',
  },
  searchbg: {
    backgroundColor: '#ffff',
    width: 250,
    height: 52,
    margin: 20,
    marginTop: 38,
    marginLeft: -14,
    marginRight: 30,
    borderRadius: 15,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },

  searchbutton: {
    marginTop: 14,
    marginLeft: 11,
    paddingRight: 10,
  },
  searchrow: {
    flexDirection: 'row',
    marginLeft: 33,
  },
  horimage: {
    width: 123,
    height: 110,
    marginLeft: 15,
  },
  sectionHeader: {
    marginTop: 40,
    marginLeft: 22,
    fontSize: 18,
    fontWeight: 'bold',
  },

}
);

