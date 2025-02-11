import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import logo from "../../Assets/Logo_Game_Story.png";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const Cliente = () => {
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Image style={styles.logo} source={logo} />
        <Text style={styles.textoLogo}>Editar Perfil</Text>
        <View style={styles.areaLogin}>
          <TextInput
            placeholder="CPF"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
          <TextInput
            placeholder="Nome de Usuário"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
          <TextInput
            placeholder="Data de Nascimento"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
        </View>
        {/* Colocar aqui um ALERT ''perfil atualizado com sucesso   */}
        <TouchableOpacity style={styles.botao} onPress={() => Home()}>
          <Text style={styles.textoBotao}>Atualizar</Text>
        </TouchableOpacity>
        {/* Colocar aqui um ALERT ''perfil Deletado com sucesso */}
        <TouchableOpacity style={styles.botao} onPress={() => Home()}>
          <Text style={styles.textoBotao}>Deletar</Text>
        </TouchableOpacity>
        </View>
      
    </ScrollView>
  );
};