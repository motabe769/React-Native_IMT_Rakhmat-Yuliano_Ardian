
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button
} from 'native-base';

class App extends Component {
  constructor() {
    super();
    this.state = {
      massa: 0,
      tinggi: 0,
      imt: 0,
      info: ''
    }
  }

  componentWillMount() {
    console.disableYellowBox = true;
  }

  hitung = () => {
    this.setState({
      imt: this.state.massa / Math.pow(this.state.tinggi/100, 2)
    });
    let imt = this.state.imt;
    if (imt < 18.5) {
      this.setState({info: 'BB Anda Kurang!'})
    }
    else if (imt >= 18.5 && imt <= 24.9) {
      this.setState({info: 'BB Anda Ideal!'})
    }
    else if (imt >= 25.0 && imt <= 29.9) {
      this.setState({info: 'BB Anda Berlebih!'})
    }
    else if (imt >= 30.0 && imt <= 39.9) {
      this.setState({info: 'BB Anda sangat berlebih!'})
    }
    else {this.setState({info: 'Anda Obesitas!'})}
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Menghitung Indeks Massa Tubuh(IMT)</Title>
          </Body>
        </Header>
        <Content style={styles.containerStyle}>
          <Form>
            <Item floatingLabel>
              <Label>Massa (kg)</Label>
                <Input
                  type=""
                  onChangeText = {(x) => {this.setState({massa: x})}}
                  value = {this.state.massa}
                />
            </Item>
            <Item floatingLabel>
              <Label>Tinggi (cm)</Label>
                <Input
                  onChangeText = {(x) => {this.setState({tinggi: x})}}
                  value = {this.state.tinggi}
                />
            </Item>
          </Form>
          <TouchableOpacity
              style={styles.buttonStyle}
              onPress = {() => {this.hitung()}}
          >
              <Text style={styles.buttonText}>Hitung IMT</Text>
          </TouchableOpacity>

          <View style={styles.hasilContainer}>
            <Text style={styles.hasil1}>Massa Tubuh</Text>
            <Text style={styles.hasil2}>{this.state.massa}</Text>
            <Text style={styles.hasil1}>Tinggi Badan</Text>
            <Text style={styles.hasil2}>{this.state.tinggi/100} m</Text>
            <Text style={styles.hasil1}>Indeks Massa Tubuh</Text>
            <Text style={styles.hasil2}>{this.state.imt}</Text>
            <Text style={styles.hasil1}>Diagnosa</Text>
            <Text style={styles.hasil2}>{this.state.info}</Text>
          </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    color:'blue',
    marginLeft: 20,
    marginRight: 20
  },
  formContainer: {
    flexDirection: 'row'
  },
  buttonStyle: {
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: 'lime',
    padding: 10,
    width: '100%',
    borderRadius: 5
  },
  buttonText: {
    color: 'black',
    fontWeight: '800'
  },
  hasilContainer: {
    marginTop: 30,
    alignItems: 'center'
  },
  hasil1: {
    marginBottom: 5,
    fontSize: 16
  },
  hasil2: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: '800'
  }
})

export default App;
