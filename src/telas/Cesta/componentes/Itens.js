import { View, Image, StyleSheet } from 'react-native';
import Texto from "../../../componentes/Texto";

export default ({ titulo, lista }) => {
  return (
    <>
      <Texto style={ estilos.titulo }>{ titulo }</Texto>
      { lista.map(({ nome, imagem }) => (
        <View style={ estilos.item } key={ nome }>
          <Image style={ estilos.imagem } source={ imagem } />
          <Texto style={ estilos.nome }>{ nome }</Texto>
        </View>
      )) }
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    alignItems: 'center',
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  },
});
