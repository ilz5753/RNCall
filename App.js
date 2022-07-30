import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SM from "./src/sm";
import Keypad from "./src/keypad/keypad";
import store from "./src/app/stroe";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <SM />
        </NavigationContainer>
        {/* <Keypad /> */}
      </Provider>
      <StatusBar style="inverted" />
    </SafeAreaProvider>
  );
}
