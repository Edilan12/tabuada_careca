import { Text, View, StyleSheetm, ScrollView} from 'react-native';
import Styles from '../css/style'

function gerarTabuada(numero){
  tabuada=''
  for (i=1; i<=10; i++) tabuada += numero + ' X '+i+ ' = ' + numero*i + '\n\n'
  return(
   <View stlye={Styles.container}>
    <Text style={Styles.paragraph}>{tabuada}</Text>
   </View>
  )
}


export const Tabuada2 = ()=> gerarTabuada(2)
export const Tabuada3 = ()=> gerarTabuada(3)
export const Tabuada4 = ()=> gerarTabuada(4)
export const Tabuada5 = ()=> gerarTabuada(5)
export const Tabuada6 = ()=> gerarTabuada(6)
export const Tabuada7 = ()=> gerarTabuada(7)
export const Tabuada8 = ()=> gerarTabuada(8)
export const Tabuada9 = ()=> gerarTabuada(9)
export const Tabuada10 = ()=> gerarTabuada(10)
