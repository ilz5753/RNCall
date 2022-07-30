import { isEqual } from "lodash";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Keypad from "./keypad/keypad";
import Recents from "./recents/recents";
import Contacts from "./contacts/contacts";
import Search from "./search/search";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  FadeOutDown,
} from "react-native-reanimated";
import {
  AnimatedTouchableOpacity,
  bcAllWhite,
  bgBlack,
  Button,
  bwAllH,
  cWhite,
  overlay,
  tr,
} from "../components";
import {
  aic,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  bottom,
  center,
  display,
  fh,
  fontSize,
  full,
  fullWidth,
  height,
  jcse,
  squareLayout,
  textDecorationLine,
  width,
} from "../styles";
import { useContext, useState } from "react";
import NewContact from "./newContact/newContact";
import { _slice, updateKeypadState } from "./slice";
import { useDispatch, useSelector } from "react-redux";

let Stack = createStackNavigator();
export default function SM() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="NewContact" component={NewContact} />
    </Stack.Navigator>
  );
}

let BottomTabs = createBottomTabNavigator();
let TabBarLabel = ({ focused = false, color, label }) => {
  let [isReady, setIsReady] = useState(false);
  let [textWidth, setTextWidth] = useState(0);
  if (!isReady)
    return (
      <Animated.View style={[full, center]}>
        <Animated.Text
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => {
            setTextWidth(width);
            setIsReady(true);
          }}
          style={[fontSize(15.3), { color }]}
        >
          {label}
        </Animated.Text>
      </Animated.View>
    );
  return (
    <Animated.View style={[full, jcse, aic]}>
      <Animated.Text style={[fontSize(15.3), { color }]}>{label}</Animated.Text>
      {focused && (
        <Animated.View
          style={[width(textWidth), height(1), backgroundColor(color)]}
          entering={FadeInUp}
          exiting={FadeOutDown}
        />
      )}
    </Animated.View>
  );
};
let Home = () => {
  let dis = useDispatch();
  let data = useSelector(_slice);
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => <Animated.View style={[bgBlack]} />,
        tabBarItemStyle: [center],
        tabBarIconStyle: [display(true)],
        tabBarButton: Button,
        tabBarStyle: [bgBlack, borderColor("t", tr)],
      }}
      tabBar={(p) =>
        isEqual(data?.keypadState, "undetermined") ? (
          <BottomTabBar {...p} />
        ) : (
          isEqual(data?.keypadState, "deactive") && (
            <Animated.View
              style={[fullWidth, height(data?.bottomHeight), bgBlack]}
              entering={FadeInDown}
              exiting={FadeOutDown}
            />
          )
        )
      }
      // tabBar={(p) => (
      //   <>
      //     {isEqual(data?.keypadState, "active") ? (
      //       <Animated.View
      //         style={[fullWidth, height(data?.bottomHeight), bgBlack, center]}
      //         entering={FadeIn}
      //         exiting={FadeOut}
      //       >
      //         <Button
      //           style={[
      //             squareLayout(data?.bottomHeight / 1.75),
      //             borderRadius("", data?.bottomHeight / 3.5),
      //             backgroundColor("#007aff"),
      //           ]}
      //           onPress={() => dis(updateKeypadState("undetermined"))}
      //         >
      //           <Ionicons
      //             {...{
      //               name: "keypad",
      //               size: data?.bottomHeight / 4,
      //               ...cWhite,
      //             }}
      //           />
      //         </Button>
      //       </Animated.View>
      //     ) : (
      //       <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
      //         <BottomTabBar {...p} />
      //       </Animated.View>
      //     )}
      //   </>
      // )}
    >
      <BottomTabs.Screen
        name="Keypad"
        component={Keypad}
        options={{
          tabBarLabel: (p) => <TabBarLabel {...{ label: "Keypad", ...p }} />,
        }}
      />
      <BottomTabs.Screen
        name="Recents"
        component={Recents}
        options={{
          tabBarLabel: (p) => <TabBarLabel {...{ label: "Recents", ...p }} />,
        }}
      />
      <BottomTabs.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: (p) => <TabBarLabel {...{ label: "Contacts", ...p }} />,
        }}
      />
    </BottomTabs.Navigator>
  );
};
