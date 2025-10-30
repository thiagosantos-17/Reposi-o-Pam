// In App.js in a new project

import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./telas/Home";
import ListarClientes from "./telas/ListarClientes";
import TelaCadCliente from "./telas/TelaCadCliente";
import TelaEditCliente from "./telas/TelaEditCliente";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    ListarClientes: ListarClientes,
    TelaCadCliente: TelaCadCliente,
    TelaEditCliente: TelaEditCliente,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
