import React, { useState } from 'react';
import { View, ToastAndroid } from 'react-native';
import { Icon, Text, Form, Item, Input, Button, Picker } from 'native-base';
import base from '../public/utils/baseStyles';
import styles from '../public/utils/styles';

const localStyle = {
  title: { alignItems: 'center', padding: 10 },
  bold: { fontWeight: 'bold' }
};

const FormScreen = props => {
  const [name, setName] = useState('');
  const [old, setOld] = useState('');
  const [job, setJob] = useState('');
  const [selectedPicker, setSelected] = useState('0');

  const submitData = () => {
    if (name && old && job && selectedPicker !== '0') {
      props.navigation.navigate('After');
      // ToastAndroid.show(name, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Data Harus diisi Lengkap', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.formFlexer}>
      <View style={localStyle.title}>
        <Text style={localStyle.bold}>Mohon isi Data Diri Sebelum Survey</Text>
      </View>
      <Form>
        <Item style={styles.formMarginBottom}>
          <Input
            placeholder="Nama"
            value={name}
            onChangeText={text => {
              setName(text);
            }}
          />
        </Item>
        <Item style={styles.formMarginBottom}>
          <Input
            placeholder="Usia"
            value={old}
            onChangeText={text => {
              setOld(text);
            }}
          />
        </Item>
        <Item style={styles.formMarginBottom}>
          <Input
            placeholder="Perkerjaan"
            value={job}
            onChangeText={text => {
              setJob(text);
            }}
          />
        </Item>
        <Item style={styles.formMarginBottom}>
          <Picker
            mode="dropdown"
            style={{ width: undefined }}
            selectedValue={selectedPicker}
            onValueChange={value => {
              setSelected(value);
            }}>
            <Picker.Item label="Jenis Kelamin" value="0" />
            <Picker.Item label="Laki - Laki" value="L" />
            <Picker.Item label="Perempuan" value="P" />
          </Picker>
        </Item>
      </Form>
      <Button
        block
        iconLeft
        success
        style={styles.buttonSetting}
        onPress={() => {
          submitData();
        }}>
        <Icon type="Entypo" name="check" style={base.fontSettings} />
        <Text style={styles.whiteBoldText}>Submit</Text>
      </Button>
    </View>
  );
};

export default FormScreen;
