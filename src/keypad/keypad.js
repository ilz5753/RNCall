import * as Contacts from "expo-contacts";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  Feather,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  chunk,
  includes,
  isEmpty,
  isEqual,
  isNull,
  isUndefined,
  noop,
} from "lodash";
import {
  AnimatedTextInput,
  bgBlack,
  Button,
  cWhite,
  duration,
  ks,
  overlay,
  ParallaxHeaderScreen,
  SwipableRow,
  tac,
} from "../../components";
import {
  aic,
  backgroundColor,
  borderRadius,
  bottom,
  center,
  color,
  fontSize,
  fullWidth,
  fw,
  height,
  jcse,
  row,
  squareLayout,
} from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";
import { _slice, updateBottomHeight, updateKeypadState } from "../slice";
import { useDispatch, useSelector } from "react-redux";

let StartSelection = {
  start: 0,
  end: 0,
};
export default function Keypad() {
  let dis = useDispatch();
  let { navigate, addListener, removeListener } = useNavigation();
  let data = useSelector(_slice);
  let ref = useRef();
  let bottomHeight = useBottomTabBarHeight();
  let max = 5 * 90 + 100 + bottomHeight;
  let [CONTACTS, setCONTACTS] = useState([]);
  let [PhoneNumber, setPhoneNumber] = useState("");
  let [NumberPosition, setNumberPosition] = useState(null);
  let isPhoneNumberEmpty = isEmpty(PhoneNumber);
  let rightButtons = [
    {
      isShow: !isPhoneNumberEmpty,
      Provider: Entypo,
      name: "plus",
      onPress: () => navigate("NewContact"),
      size: 60,
    },
    {
      Provider: Ionicons,
      name: "ios-search",
      onPress: () => navigate("Search"),
    },
    {
      Provider: Feather,
      name: "more-vertical",
    },
  ];
  let fs = useAnimatedStyle(() => ({
    fontSize: withTiming(
      54 - (PhoneNumber.length > 30 ? 30 : PhoneNumber.length),
      duration,
    ),
  }));
  useEffect(() => {
    if (!isEqual(data?.bottomHeight, bottomHeight))
      dis(updateBottomHeight(bottomHeight));
    if (!isEqual(data?.keypadState, "active"))
      dis(updateKeypadState(isPhoneNumberEmpty ? "undetermined" : "deactive"));
    let s = Keyboard.addListener(ks, Keyboard.dismiss);
    let nl = addListener("blur", s.remove);
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync();
        setCONTACTS(data);
      }
    })();
    return () => {
      removeListener(nl);
    };
  }, [PhoneNumber, data?.bottomHeight, data?.keypadState]);
  let hideKeypad = () => {
    if (!isEqual(data?.keypadState, "active") && !isPhoneNumberEmpty) {
      // ref.current?.blur();
      dis(updateKeypadState("active"));
    }
  };
  let onPhoneNumberPress = (character = "") => {
    if (isPhoneNumberEmpty || !ref.current?.isFocused()) ref.current?.focus();
    let pn = PhoneNumber;
    let np = NumberPosition;
    if (isNull(NumberPosition)) pn += character;
    else {
      // if (np?.end - np?.start > 0) {
      //   let del = pn.slice(np?.start, np?.end);
      //   pn = pn.replace(del, character);
      //   np = {
      //     start: np?.start,
      //     end: np?.start,
      //   };
      // } else
      {
        let prev = pn.slice(0, np?.start);
        let next = pn.slice(np?.start, pn.length);
        pn = prev + character + next;
        np = {
          start: np?.start + 1,
          end: np?.end + 1,
        };
      }
    }
    setPhoneNumber(pn);
    setNumberPosition(np);
  };
  let Backspace = () => {
    if (!isEqual(StartSelection, NumberPosition)) {
      let np = "";
      if (isNull(NumberPosition)) {
        np = PhoneNumber;
        np = np.slice(0, np.length - 1);
        setPhoneNumber(np);
      } else {
        let prev = PhoneNumber.slice(0, NumberPosition?.start);
        let next = PhoneNumber.slice(NumberPosition?.start, PhoneNumber.length);
        prev = prev.slice(0, prev.length - 1);
        np = prev + next;
        setNumberPosition((p) => ({
          start: p?.start - 1,
          end: p?.end - 1,
        }));
      }
      setPhoneNumber(np);
      if (isEmpty(np)) ref.current?.blur();
    }
  };
  let Buttons = [
    {
      textNumber: "1",
      subTextIcon: (
        <Feather
          {...{
            name: "voicemail",
            color: "gray",
            size: 18,
          }}
        />
      ),
    },
    {
      textNumber: "2",
      subText: "ABC",
    },
    {
      textNumber: "3",
      subText: "DEF",
    },
    {
      textNumber: "4",
      subText: "GHI",
    },
    {
      textNumber: "5",
      subText: "JKL",
    },
    {
      textNumber: "6",
      subText: "MNO",
    },
    {
      textNumber: "7",
      subText: "PQRS",
    },
    {
      textNumber: "8",
      subText: "TUV",
    },
    {
      textNumber: "9",
      subText: "WXYZ",
    },
    {
      textIcon: <Animated.Text style={[fontSize(54), cWhite]}>*</Animated.Text>,
      onPress: () => onPhoneNumberPress("*"),
    },
    {
      textNumber: "0",
      subTextIcon: (
        <Entypo
          {...{
            name: "plus",
            color: "gray",
            size: 18,
          }}
        />
      ),
    },
    {
      // textIcon: <Animated.Text style={[fontSize(36), cWhite]}>#</Animated.Text>,
      // onPress: () => onPhoneNumberPress("#"),
      textNumber: "#",
    },
  ];
  return (
    <>
      <ParallaxHeaderScreen
        {...{
          showHeaderTitle: true,
          headerTitle: "Phone",
          scrollable: true,
          rightButtons,
          extraHeights: bottomHeight,
          OnScroll: hideKeypad,
        }}
      >
        {CONTACTS.filter(
          (contact) =>
            (isEqual(PhoneNumber.length, 1) &&
              !isEqual(
                0,
                Buttons.find(
                  (btn) =>
                    !isUndefined(btn.subText) &&
                    isEqual(btn.textNumber, PhoneNumber),
                )
                  ?.subText?.split("")
                  ?.filter((t) => includes(contact?.name, t)),
              )) ||
            includes(contact?.phoneNumbers, PhoneNumber),
        ).map((contact, i) => (
          <SwipableRow
            {...{
              key: i,
              isContactView: true,
              ...contact,
              showPhoneNumberInRight: true,
              phoneNumber: contact?.phoneNumbers[0]?.number,
              btnBg: "black",
            }}
          />
        ))}
      </ParallaxHeaderScreen>
      {!isEqual(data?.keypadState, "active") && (
        <Animated.View
          style={[fullWidth, height(5 * 90 + 100), bgBlack, overlay, bottom(0)]}
          entering={SlideInDown}
          exiting={SlideOutDown}
        >
          <AnimatedTextInput
            {...{
              ref,
              style: [fw, height(100), tac, cWhite, fs],
              value: PhoneNumber,
              onChangeText: setPhoneNumber,
              onSelectionChange: ({ nativeEvent: { selection } }) =>
                setNumberPosition(selection),
              maxLength: 60,
            }}
          />
          <Animated.View style={[fw, height(5 * 90), bgBlack]}>
            {chunk(Buttons, 3).map((Row, i) => (
              <Animated.View
                key={i}
                style={[fullWidth, height(90), row, aic, jcse]}
              >
                {Row.map((button, j) => (
                  <Button
                    key={i * 3 + j}
                    style={[squareLayout(84), borderRadius("", 42)]}
                    onPress={
                      isUndefined(button.onPress)
                        ? () => onPhoneNumberPress(button.textNumber)
                        : button.onPress
                    }
                  >
                    {isUndefined(button.textNumber) ? (
                      button.textIcon
                    ) : (
                      <Animated.Text style={[fontSize(30), cWhite]}>
                        {button.textNumber}
                      </Animated.Text>
                    )}
                    {isUndefined(button.subText) ? (
                      button.subTextIcon
                    ) : (
                      <Animated.Text style={[fontSize(15.6), color("gray")]}>
                        {button.subText}
                      </Animated.Text>
                    )}
                  </Button>
                ))}
              </Animated.View>
            ))}
            <Animated.View style={[fullWidth, height(90), row, aic, jcse]}>
              {!isPhoneNumberEmpty && (
                <Button
                  style={[squareLayout(84), borderRadius("", 42)]}
                  onPress={noop}
                  entering={FadeIn}
                  exiting={FadeOut}
                >
                  <Animated.View
                    style={[
                      squareLayout(40),
                      borderRadius("btl", 20),
                      backgroundColor("#007aff"),
                      center,
                    ]}
                  >
                    <FontAwesome
                      {...{
                        name: "video-camera",
                        size: 18,
                      }}
                    />
                  </Animated.View>
                </Button>
              )}
              <Button
                style={[
                  squareLayout(70),
                  borderRadius("", 35),
                  backgroundColor("#00e57f"),
                ]}
                onPress={noop}
              >
                <Ionicons
                  {...{
                    name: "ios-call",
                    size: 40,
                    ...cWhite,
                  }}
                />
              </Button>
              {!isPhoneNumberEmpty && (
                <Button
                  style={[squareLayout(84), borderRadius("", 42)]}
                  onPress={Backspace}
                  onLongPress={() => {
                    setPhoneNumber("");
                    ref.current?.blur();
                  }}
                  entering={FadeIn}
                  exiting={FadeOut}
                >
                  <FontAwesome5
                    {...{
                      name: "backspace",
                      size: 30,
                      ...cWhite,
                    }}
                  />
                </Button>
              )}
            </Animated.View>
          </Animated.View>
        </Animated.View>
      )}
      {isEqual(data?.keypadState, "active") && (
        <Animated.View
          style={[
            fullWidth,
            height(bottomHeight),
            overlay,
            bottom(0),
            bgBlack,
            center,
          ]}
          entering={FadeInDown}
          exiting={FadeOutDown}
        >
          <Button
            style={[
              squareLayout(bottomHeight / 1.75),
              borderRadius("", bottomHeight / 3.5),
              backgroundColor("#007aff"),
            ]}
            onPress={() => {
              dis(updateKeypadState("undetermined"));
            }}
          >
            <Ionicons
              {...{
                name: "keypad",
                size: bottomHeight / 4,
                ...cWhite,
              }}
            />
          </Button>
        </Animated.View>
      )}
    </>
  );
}
