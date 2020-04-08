import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1
  },
  buttonSetting: { marginTop: 10, width: '90%', alignSelf: 'center' },
  formFlexer: { justifyContent: 'center', flex: 1, margin: 16 },
  formMarginBottom: { marginBottom: 16 },
  flexer: { flex: 1 },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  homeFlexerFooter: {
    flex: 1,
    margin: 16,
    justifyContent: 'flex-end'
  },
  homeFlexerHeader: {
    flex: 1,
    margin: 16,
    justifyContent: 'flex-start'
  },
  bold: { fontWeight: 'bold' }
});

export default styles;
