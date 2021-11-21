import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";

import styles from "./style";

export default function Home() {
  const [hasCameraPermssion, setHasCameraPermssion] = useState(true);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Não foi scaneado ainda");

  function askForCameraPermission() {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();

      setHasCameraPermssion(status === "granted");
    })();
  }

  const handleBarCodeScanned = ({ type, data }) => {
    alert("Scanned");

    setScanned(true);
    setText(data);
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  console.log(`scanned`, scanned);
  console.log(`text`, text);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {hasCameraPermssion === null ? (
        <View>
          <Text>Esperando a permissão de uso da câmera</Text>
        </View>
      ) : hasCameraPermssion === false ? (
        <View>
          <Text>Acesso a câmera negada</Text>
          <TouchableOpacity onPress={askForCameraPermission}>
            <Text>Permitir acesso</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.barCode}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 500, width: 500 }}
            />
          </View>
          <Text style={styles.barCodeText}>{text}</Text>

          {scanned && (
            <TouchableOpacity onPress={() => setScanned(false)} color="tomato">
              Scannear denovo?
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}
