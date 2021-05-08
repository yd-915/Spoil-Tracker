import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  TextInput,
  Keyboard,
  Platform,
  TouchableOpacity,
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class AgendaScreen extends Component {
 
  state = {
    tasks: [],
    text: "",

  };

  changeTextHandler = text => {
    this.setState({ text: text});
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          return {
            tasks: tasks.concat({ key: tasks.length, text: text }),
            text: "",
            value: ''
          };
        },
        () => Tasks.save(this.state.tasks)
      );
    }
  };
  
  deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();

        tasks.splice(i, 1);

        return { tasks: tasks };
      },
      () => Tasks.save(this.state.tasks)
    );
  };

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: viewPadding })
    );

    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  render() {
    return (
      <LinearGradient
       colors={['#F82EDC','#23BBDD']}
       style={{flex:1, background:'#23BBDD'}}>
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
       <Text style={{fontSize:20, color:'white', justifyContent:'center', alignItems:'center', marginLeft:10, marginTop:30}}>Built-in grocery list that won't delete even by closing the app. Also saves you a lot of paper.</Text>
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <TouchableOpacity
                 style={{borderRadius: 50, borderColor:'white', backgroundcolor:'#23BBDD'}}
                 onPress={() => this.deleteTask(index)}>
                  <Text style={{fontSize:20, color:'white', justifyContent:'center', alignItems:'center', marginRight: 10}}>X</Text> 
                 </TouchableOpacity>
              </View>
              <View style={styles.hr} />
            </View>}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="Add Items"
          returnKeyType="done"
          returnKeyLabel="done"
        />
      </View>
      </LinearGradient>
    );
  }
}

let Tasks = {
  convertToArrayOfObject(tasks, callback) {
    return callback(
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, tasks) =>
      this.convertToArrayOfObject(tasks, callback)
    );
  },
  save(tasks) {
    AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18,
    marginTop:50,
    color: '#CE38C6',
    backgroundColor: 'white',
    borderRadius: 30,
    width:'90%',
    paddingLeft:20,
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 20,
    paddingLeft:20,
    backgroundColor:'white',
    borderRadius:50,
    borderWidth: isAndroid ? 0 : 1,
    width: "80%",
    marginTop:20,
    color:'black',
    marginRight: 70
  },
  touch: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    marginRight: 50,
    margin:15,
    width: "30%",
    backgroundColor: "white",
    borderRadius: 25,
    height:50,
    borderColor: '#15E5E8'
   },
});

AppRegistry.registerComponent("TodoList", () => TodoList);
