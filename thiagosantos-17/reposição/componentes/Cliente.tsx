import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface propCliente {
  id: number;
  nome: String;
  cpf: String;
  saldo: number;
  onEditar?: () => void;
  onExcluir?: () => void;
}

export default function Cliente({
  id,
  nome,
  cpf,
  saldo,
  onEditar,
  onExcluir,
}: propCliente) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.texto}>Cod.: {id}</Text>
        <Text style={styles.texto}>Nome.: {nome}</Text>
        <Text style={styles.texto}>CPF.: {cpf}</Text>
        <Text style={styles.texto}>Saldo.: {saldo}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn2} onPress={onEditar}>
          <Text style={styles.txtBtn}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1} onPress={onExcluir}>
          <Text style={styles.txtBtn}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginLeft: "10%",
  },
  texto: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    marginTop: 10,
    marginBottom: 30,
  },
  btn1: {
    flex: 1,
    backgroundColor: "#f12b2bff",
    padding: 15,
    borderRadius: 10,
    marginRight: 50,
  },
  btn2: {
    flex: 1,
    backgroundColor: "#323f93ff",
    padding: 15,
    borderRadius: 10,
    marginLeft: 50,
  },
  txtBtn: {
    textAlign: "center",
    color: "#fff",
  },
});
