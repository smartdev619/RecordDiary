import React, { Component } from 'react';
import { StyleSheet, View, Text, Slider } from 'react-native';
import { connect } from 'react-redux';
import { Container, Form, Item, Input, Label, Button, CheckBox, ListItem, Body } from 'native-base';
import { getCurrentDate, getDistress } from '../../utils/methods';
import Swiper from 'react-native-swiper'
import Popup from '../../components/Popup';
import { saveDiary } from '../../store/diaries/reducer'
import { Navigation } from 'react-native-navigation'

class Add extends Component {

  state = {
    modalVisible: false,
    distressModal: false,
    distortionModal: false,
    distressLevel: 0,
    selectedEmotions: [],
    title: '',
    situation: '',
    negative_thought: '',
    selectedDistortions: [],
    challange: '',
    outcome: ''
  };

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'New Entry',
        }
      }
    };
  }

  change = (value) => {
    this.setState(() => {
      return {
        distressLevel: parseFloat(value),
      };
    });
  }

  toggleModal = () => {
    this.setState((state) => ({ modalVisible: !state.modalVisible }));
  }

  distressToggleModal = () => {
    this.setState((state) => ({ distressModal: !state.distressModal }));
  }

  distortionToggleModal = () => {
    this.setState((state) => ({ distortionModal: !state.distortionModal }));
  }

  checkEmotion = (id) => {
    const { selectedEmotions } = this.state
    if (!selectedEmotions.includes(id)) {
      selectedEmotions.push(id)
    } else {
      const emotionIndex = selectedEmotions.findIndex(i => i === id)
      selectedEmotions.splice(emotionIndex, 1)
    }
    this.setState(() => ({ selectedEmotions }))
  }

  checkDistortion = (id) => {
    const { selectedDistortions } = this.state
    if (!selectedDistortions.includes(id)) {
      selectedDistortions.push(id)
    } else {
      const distortionIndex = selectedDistortions.findIndex(i => i === id)
      selectedDistortions.splice(distortionIndex, 1)
    }
    this.setState(() => ({ selectedDistortions }))
  }

  onChangeHandle = (value, field) => {
    this.setState(() => ({
      [field]: value
    }))
  }

  saveDiary = () => {
    const { diaries, saveDiary } = this.props;
    const { distressLevel, selectedEmotions, title, situation, negative_thought, selectedDistortions,
      challange, outcome } = this.state;
    diaries.push({
      distressLevel,
      selectedEmotions,
      title,
      situation,
      negative_thought,
      selectedDistortions,
      challange,
      outcome,
      date: getCurrentDate()
    })

    saveDiary(diaries)
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.HomeScreen',
      }
    });

  }

  render() {
    const { emotions, distortions } = this.props;
    console.log(this.props.diaries)
    const { selectedEmotions, selectedDistortions } = this.state;
    return (
      <Container style={{ backgroundColor: '#F5FCFF' }}>
        <Swiper height={200} horizontal={false} showsPagination={false}>
          <View style={styles.centerText}>
            <Text style={styles.dateText}>{getCurrentDate()} </Text>
            <Form style={{ paddingHorizontal: 20 }}>
              <View>
                <Item stackedLabel style={{ height: 80, marginLeft: 3 }}>
                  <Label style={{ fontSize: 20 }}>Title</Label>
                  <Input placeholder="Enter title here" onChangeText={(e) => this.onChangeHandle(e, 'title')} />
                </Item>
              </View>

              <View style={styles.buttonContainer}>
                <Button primary style={styles.buttonStyle} onPress={this.toggleModal}><Text style={styles.buttonText}> Emotions </Text></Button>
                <Button primary style={styles.buttonStyle} block onPress={this.distressToggleModal}><Text style={styles.buttonText}> Distress </Text></Button>
              </View>
              {selectedEmotions.map(emotion=>(
                <Text key={emotion}>{emotions[emotion].name}</Text>
              ))}

              <View>
                <Item stackedLabel style={{ height: 100, marginLeft: 3 }}>
                  <Label style={{ fontSize: 20 }}>Situation</Label>
                  <Input placeholder="Describe the situation" onChangeText={(e) => this.onChangeHandle(e, 'situation')} />
                </Item>
              </View>
            </Form>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <View>
              <Item stackedLabel style={{ height: 200, marginLeft: 3 }}>
                <Label style={{ fontSize: 20 }}>Negative Thoughts</Label>
                <Input multiline placeholder="Enter the negative thoughts you had about the situations" onChangeText={(e) => this.onChangeHandle(e, 'negative_thought')} />
              </Item>
            </View>
            <View style={[styles.buttonContainer]}>
              <Button primary style={[styles.buttonStyle, { width: '80%' }]} onPress={this.distortionToggleModal}><Text style={styles.buttonText}> Cognitive Distortions </Text></Button>
              <Button transparent primary style={[styles.buttonStyle, { width: '10%' }]} block onPress={this.distressToggleModal}><Text style={[styles.buttonText, { color: 'blue', fontSize: 30 }]}> ? </Text></Button>
            </View>
            {selectedDistortions.map(emotion=>(
                <Text key={emotion}>{distortions[emotion].name}</Text>
              ))}
            <View>
              <Item stackedLabel style={{ height: 200, marginLeft: 3 }}>
                <Label style={{ fontSize: 20 }}>Challange</Label>
                <Input multiline onChangeText={(e) => this.onChangeHandle(e, 'challange')} />
              </Item>
            </View>
            {/* <View style={[styles.buttonContainer]}>
              <Button primary style={[styles.buttonStyle, { width: '50%' }]} onPress={this.toggleModal}><Text style={styles.buttonText}> Examples </Text></Button>
            </View> */}
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <View>
              <Item stackedLabel style={{ height: 200, marginLeft: 3 }}>
                <Label style={{ fontSize: 20 }}>Outcome</Label>
                <Input multiline placeholder="Having a challanged your initail negative thoughts, write an alternative interpertation of the situation" onChangeText={(e) => this.onChangeHandle(e, 'outcome')} />
              </Item>
            </View>
            {/* <View style={[styles.buttonContainer, { justifyContent: 'flex-start' }]}>
              <Button primary style={[styles.buttonStyle, { width: '50%' }]} onPress={this.toggleModal}><Text style={styles.buttonText}> Distress </Text></Button>
            </View> */}
            <View style={[styles.buttonContainer]}>
              <Button primary style={[styles.buttonStyle, { width: '90%' }]} onPress={this.saveDiary}><Text style={styles.buttonText}> Save </Text></Button>
            </View>
          </View>
        </Swiper>
        <Popup title="What Emotions did you feel?" isVisible={this.state.modalVisible} onToggle={this.toggleModal}>
          {emotions.map(emotion => (
            <ListItem style={{ marginLeft: 0, borderBottomWidth: 0 }} key={emotion.id}>
              <CheckBox onPress={() => this.checkEmotion(emotion.id)} checked={selectedEmotions.includes(emotion.id)} />
              <Text style={{ marginLeft: 20, fontSize: 16 }}>{emotion.name}</Text>
            </ListItem>
          ))}
        </Popup>
        <Popup title="Choose your distress level?" isVisible={this.state.distressModal} onToggle={this.distressToggleModal}>
          <View style={{ position: 'relative', top: '40%', height: '80%' }}>
            <Text style={{ textAlign: 'center', marginBottom: 20, fontSize: 20 }}>{getDistress(this.state.distressLevel)}</Text>
            <Slider
              step={1}
              maximumValue={10}
              onValueChange={this.change.bind(this)}
              value={this.state.distressLevel}
            />
          </View>
        </Popup>
        <Popup title="What Emotions did you feel?" isVisible={this.state.distortionModal} onToggle={this.distortionToggleModal}>
          {distortions.map(distortion => (
            <ListItem style={{ marginLeft: 0, borderBottomWidth: 0 }} key={distortion.id}>
              <CheckBox onPress={() => this.checkDistortion(distortion.id)} checked={selectedDistortions.includes(distortion.id)} />
              <Text style={{ marginLeft: 20, fontSize: 16 }}>{distortion.name}</Text>
            </ListItem>
          ))}
        </Popup>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
  },
  dateText: {
    textAlign: 'center', fontSize: 16, marginTop: 5
  },
  buttonContainer: {
    marginBottom: 50, marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'
  },
  buttonStyle: {
    width: '48%',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});

function mapStateToProps(state) {
  return {
    emotions: state.emotionsStore.emotions,
    distortions: state.distortionStore.distortions,
    diaries: state.diariesStore.diaries
  };
}

const mapDispatchToProps = {
  saveDiary: diary => saveDiary(diary)
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);
