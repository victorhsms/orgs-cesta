import { View, StyleSheet } from 'react-native';

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";

export default ({ topo, detalhes}) => {
  return (
    <>
      <Topo {...topo} />
      
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});