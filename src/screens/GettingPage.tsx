import { Image, ImageBackground, StyleSheet } from "react-native";
import {
  useFonts,
  Farro_500Medium,
  Farro_400Regular,
} from "@expo-google-fonts/farro";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";

import { SafeAreaView } from "react-native-safe-area-context";
import { imageBG, imageLogo } from "../constants/Images";

import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { tintColorGreen_200 } from "../constants/Colors";
import { dataSlides } from "../constants/dataSlide";
import { useNavigation } from "@react-navigation/native";

export default function GettingPage() {

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Farro_500Medium,
    Farro_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const renderSlides = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );
  };

  return (
    <ImageBackground
      resizeMode="contain"
      source={imageBG}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={imageLogo}
          resizeMode="contain"
          style={styles.imageLogo}
        />
        <View style={styles.slide}>
          <AppIntroSlider
            renderItem={renderSlides}
            data={dataSlides}
            showNextButton={false}
            showDoneButton={false}
            activeDotStyle={{
              backgroundColor: tintColorGreen_200,
              width: 30,
            }}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Root')} style={styles.buttonStart}>
          <Text style={styles.buttonTitle}>Get started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imageLogo: {
    marginTop: 80,
  },
  slide: {
    flex: 1,
    backgroundColor: "transparent",
    maxHeight: 250,
    marginTop: 20,
  },
  message: {
    fontSize: 16,
    marginHorizontal: 30,
    textAlign: 'center',
    fontFamily: 'Farro_400Regular',
    marginTop: 15,
  },
  title: {
    fontSize: 30,
    marginHorizontal: 60,
    textAlign: 'center',
    fontFamily: 'Farro_500Medium',
    fontWeight: "bold",
  },
  buttonStart: {
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    borderRadius: 40,
    marginTop: 50,
    backgroundColor: tintColorGreen_200,
  },
  buttonTitle: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Farro_500Medium'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
