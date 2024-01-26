import { View, Text } from "react-native";

import { styles } from "./styles";
import CardView from "../../components/CardView";

export default function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.trianglerCorner}></View>
        <View style={[styles.trianglerCorner, styles.topRight]}></View>
        <View style={[styles.trianglerCorner, styles.bottomLeft]}></View>
        <View style={[styles.trianglerCorner, styles.bottomRight]}></View>
        <CardView />
      </View>
    </View>
  );
}
