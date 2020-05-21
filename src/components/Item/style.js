import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    position: 'relative',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4388D6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 15,
  },
  text: {
    textAlign: 'center',
  },
  btn: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
  },
  plus: {
    fontSize: 20,
  }
});
