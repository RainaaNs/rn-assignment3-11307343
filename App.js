import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { React } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';




const HorizontalItem = ({ item }) => (
  <View style={{ marginLeft: 21 }}>
    <View style={{ flexDirection: 'row', marginTop: 2, marginRight: 4 }}>
      <View style={{ backgroundColor: '#ffff', width: 170, height: 170, flexDirection: 'column', borderRadius: 15, paddingTop: 10, paddingLeft: 8 }}>
        <Text style={{ fontSize: 16, fontFamily: 'Lato_700Bold' }}> {item.text} </Text>
        <Text style={{ fontSize: 12, fontFamily: 'Lato_400Regular' }}> {item.tasks} </Text>
        <Image source={item.uri} style={styles.horimage} />
      </View>
    </View>
  </View>
);

const HorizontalSection = ({ title, data }) => (
  <View>
    <Text style={styles.sectionHeader}>{title}</Text>
    <FlatList
      horizontal data={data}
      renderItem={({ item }) => <HorizontalItem item={item} />}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.flatList}
    />
  </View>
);

const VerticalItem = ({ item }) => (
  <View>
    <View style={{ backgroundColor: '#ffff', width: 340, height: 120, borderWidth: 1, borderColor: '#e8d1ba', borderRadius: 15, flexDirection: 'column', justifyContent: 'center', marginBottom: 14, marginLeft: 20, marginRight: 20 }}>
      <Text style={{ paddingLeft: 12, fontFamily: 'Lato_700Bold', fontSize: 16 }}>{item.text}</Text>
    </View>
  </View>

);

const VerticalSection = ({ title, data }) => (
  <View>
    <Text style={styles.sectionHeader2}>{title}</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => <VerticalItem item={item} />}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.verticalList}
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
      uri: './assets/images/second.png',
    },
    {
      key: '4',
      text: 'Blogging',
      tasks: '8 tasks',
      uri: './assets/images/second.png',
    },
    {
      key: '5',
      text: 'Cleaning',
      tasks: '10 tasks',
      uri: './assets/images/second.png',
    },
    {
      key: '6',
      text: 'Code',
      tasks: '4 tasks',
      uri: './assets/images/second.png',
    },
    {
      key: '7',
      text: 'Cook',
      tasks: '3 tasks',
      uri: './assets/images/second.png',
    },
    {
      key: '8',
      text: 'Cleaning',
      tasks: '10 tasks',
      uri: './assets/images/second.png',
    },
    {
      key: '9',
      text: 'Sleep',
      tasks: '1 task',
      uri: './assets/images/second.png',
    },
  ],
},
];

const VERTICAL = [{
  title: 'Ongoing Task',
  data: [
    {
      key: '1',
      text: 'Mobile App Development'
    },
    {
      key: '2',
      text: 'Web Development'
    },
    {
      key: '3',
      text: 'Push Ups'
    },
    {
      key: '4',
      text: 'Software Engineering Project'
    },
    {
      key: '5',
      text: 'Database Structures'
    },
    {
      key: '6',
      text: 'Premilinary Analysis'
    },
    {
      key: '7',
      text: 'Numerical and Computational Methods'
    },
    {
      key: '8',
      text: 'Amazon Project'
    },
    {
      key: '9',
      text: 'Schedule Planning Session'
    },
    {
      key: '10',
      text: 'Morning Sit Ups'
    },
    {
      key: '11',
      text: 'Wall Pilates'
    },
    {
      key: '12',
      text: 'CCI Coding Practice'
    },
    {
      key: '13',
      text: 'Self Help Book Reading'
    },
    {
      key: '14',
      text: 'Quizzes Preparation'
    },
    {
      key: '15',
      text: 'Documentation Course'
    },
  ],
}];



export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>

        <ScrollView style={{ flex: 1 }}>

          <Text style={{ alignSelf: 'flex-start', marginTop: 50, marginLeft: 20, fontSize: 32, fontFamily: 'Lato_700Bold', lineHeight: 38.4 }}>Hello , Devs</Text>
          <Text style={{ alignSelf: 'flex-start', marginLeft: 20, fontSize: 12, fontFamily: 'Lato_400Regular' }}>14 tasks today</Text>

          <View style={styles.profilebg}>
            <Image style={{ resizeMode: 'contain', width: 50, height: 50 }} source={require("./assets/images/image.png")} />
          </View>

          <View style={styles.searchrow}>

            <View style={styles.searchbg}>
              <Feather name="search" size={24} color="black" style={styles.searchbutton} />
              <TextInput style={{ maxWidth: 160, fontFamily: 'Lato_700Bold', fontSize: 16 }} placeholder='Search' />
            </View>

            <View style={{ marginTop: 40 }}>
              <Feather name="sliders" size={34} color="white" style={{ backgroundColor: '#ff5349', alignSelf: 'flex-end', padding: 9, borderRadius: 15, marginTop: -3, transform: [{ rotate: "90deg" }] }} />
            </View>

          </View>
          <View>
            {HORIZONTAL.map((category, index) => (
              <HorizontalSection key={index} title={category.title} data={category.data} />
            ))}
          </View>
          <View>
            {VERTICAL.map((category, index) => (
              <VerticalSection key={index} title={category.title} data={category.data} />
            ))}
          </View>

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
    marginTop: 12,
    marginLeft: 11,
    paddingRight: 10,
  },
  searchrow: {
    flexDirection: 'row',
    marginLeft: 33
  },
  horimage: {
    width: 123,
    height: 110,
    marginLeft: 15,
  },
  sectionHeader: {
    marginTop: 15,
    marginLeft: 22,
    fontSize: 20,
    fontFamily: 'Lato_700Bold',
    marginBottom: 10,
    paddingBottom: 5
  },
  sectionHeader2: {
    marginTop: 25,
    marginLeft: 22,
    fontSize: 20,
    fontFamily: 'Lato_700Bold',
    marginBottom: 10,
    paddingBottom: 10
  },
}
);
