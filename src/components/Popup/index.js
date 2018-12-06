import React from 'react';
import Modal from "react-native-modal";
import {View, Text } from 'react-native';
import { Button } from 'native-base';


const Popup = ({ children, onToggle, isVisible, title }) => (
    <Modal
        isVisible={isVisible}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
                {children}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button
                        transparent
                        onPress={onToggle}>
                        <Text style={{ fontSize: 18 }}>CANCEL</Text>
                    </Button>
                    <Button
                        style={{ marginLeft: 40 }}
                        transparent
                        onPress={()=>onToggle(true)}>
                        <Text style={{ fontSize: 18 }}>OK</Text>
                    </Button>
                </View>

            </View>
        </View>
    </Modal>
);

export default Popup