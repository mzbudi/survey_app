import React from 'react';
import { View, Text } from 'react-native';
import { Button, Content, Accordion, Container, Icon } from 'native-base';
import styles from '../public/utils/styles';

const dataArray = [
  {
    title: 'Apa itu Covid 19 ?',
    content:
      'COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Ini merupakan virus baru dan penyakit yang sebelumnya tidak dikenal sebelum terjadi wabah di Wuhan, Tiongkok, bulan Desember 2019'
  },
  {
    title: 'Tujuan Survey',
    content:
      'Tujuan dari survey ini adalah untuk menemukan dampak Covid 19 yang signifikan terjadi di masyarakat, dikarenakan Covid 19 berdampak ke semua aspek, maka dari itu survey ini dilakukan guna menemukan dampak terparah pada suatu sektor'
  },
  {
    title: 'Tata Cara Survey',
    content: `Survey dilakukan dengan berberapa langkah : 
  1. Isi Data Diri Pada Tab Form
  2. Menyaksikan Video Penyuluhan dan Efek dari survey ini (Diharapkan untuk mengaktifkan suara ponsel atau Menggunakan Earphone)
  3. Jawab Semua Pertanyaan yang diberikan
  4. Hasil dari survey akan ditambahkan dan ditampilkan dalam bentuk grafik di akhir survey `
  }
];

const DisclaimerScreen = props => {
  return (
    // <View style={styles.formFlexer}>
    //   <Button block>
    //     <Text>Yahalo</Text>
    //   </Button>
    // </View>
    <Container>
      <Content>
        <View
          style={[
            styles.formFlexer,
            { ...{ alignItems: 'center', marginTop: 16 } }
          ]}>
          <Button disabled iconLeft block transparent>
            <Icon
              type="Entypo"
              name="warning"
              size={20}
              style={{ ...{ color: 'red' } }}
            />
            <Text style={[styles.bold, { ...{ color: 'red' } }]}>
              Survey Disclaimer
            </Text>
          </Button>
        </View>
        <View style={styles.formFlexer}>
          <Accordion dataArray={dataArray} />
        </View>
      </Content>
    </Container>
  );
};

export default DisclaimerScreen;
