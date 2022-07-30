import { useEffect, useState } from "react";
import {
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Entypo,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import Svg, { G, Path } from "react-native-svg";
import {
  noop,
  min,
  max,
  isUndefined,
  isNull,
  isEqual,
  isFunction,
  isString,
  toUpper,
} from "lodash";
import {
  aic,
  aife,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  center,
  color,
  dim,
  display,
  fh,
  flexDirection,
  fontSize,
  fontWeight,
  full,
  fullWidth,
  fw,
  height,
  jcc,
  jcsb,
  jcse,
  layout,
  margin,
  minHeight,
  padding,
  position,
  root,
  row,
  squareLayout,
  textAlign,
  textTransform,
  top,
  width,
  zIndex,
} from "../styles";
let CAC = Animated.createAnimatedComponent;
export let AnimatedTextInput = CAC(TextInput);
export let AnimatedTouchableOpacity = CAC(TouchableOpacity);
export let AnimatedTouchableHighlight = CAC(TouchableHighlight);
export let durationTime = 400;
export let overlay = [position(), zIndex(1)];
export let overlayColor = "rgba(255,255,255,0.15)";
export let duration = {
  duration: durationTime,
};
export let { OS } = Platform;
export let isAndroid = isEqual(OS, "android");
export let bgBlack = backgroundColor("black");
export let bgWhite = backgroundColor("white");
export let cBlack = color("black");
export let cWhite = color("white");
export let bwAllH = borderWidth("", 0.5);
export let bwAll1 = borderWidth("", 1);
export let bwAll3 = borderWidth("", 3);
export let bcAllBlack = borderColor("", "black");
export let bcAllWhite = borderColor("", "white");
export let pl16 = padding("l", 16);
export let pr16 = padding("r", 16);
export let ph16 = [pl16, pr16];
export let tr = "transparent";
export let tac = textAlign("c");
export let ks = isAndroid ? "keyboardDidShow" : "keyboardWillShow";
export let kh = isAndroid ? "keyboardDidHide" : "keyboardWillHide";
export let clamp = (value, lower, upper) => {
  "worklet";
  return max([lower, min([value, upper])]);
};
export let Button = ({ style, disabled = false, children, ...props }) => {
  return (
    <AnimatedTouchableOpacity
      {...{
        style: [center, style],
        disabled,
        activeOpacity: 0.75,
        ...props,
      }}
    >
      {children}
      {disabled && (
        <Animated.View
          style={[style, overlay, backgroundColor(overlayColor)]}
        />
      )}
    </AnimatedTouchableOpacity>
  );
};
export let WrappedButton = ({ parentStyle, btnStyle, brs = 16, ...props }) => {
  let br = borderRadius("", brs);
  return (
    <Animated.View style={[br, parentStyle]}>
      <Button style={[full, btnStyle]} {...props} />
    </Animated.View>
  );
};
export let IconButton = ({ Provider, name, size, color, bg, ...props }) => {
  return (
    <Button
      {...{
        style: [
          squareLayout(size),
          borderRadius("", size * 0.5),
          backgroundColor(bg),
        ],
        ...props,
      }}
    >
      <Provider
        {...{
          name,
          size: size * 0.54,
          color,
        }}
      />
    </Button>
  );
};
export let HeaderButton = ({ isShow = true, ...props }) =>
  isShow && (
    <IconButton
      {...{
        size: 50,
        ...cWhite,
        ...props,
      }}
    />
  );
export let DefaultHeaderComponent = ({ title }) => (
  <Animated.Text style={[cWhite, fontSize(45), fontWeight("3")]}>
    {title}
  </Animated.Text>
);
export let ParallaxHeaderScreen = ({
  scrollable = false,
  scrollableExpand = false,
  expandable = false,
  HeaderComponent,
  showHeaderTitle = false,
  headerTitle = "Test",
  backButton,
  rightButtons = [],
  searchMode = false,
  searchText,
  onSearchTextChange,
  extraHeights = 0,
  OnScroll = noop,
  children,
}) => {
  let insets = useSafeAreaInsets();
  //  statics
  let parallaxHeight = 300;
  let headerHeight = 60;
  let maxTranslationY = insets.top - parallaxHeight;
  let maxHeight = dim.height - extraHeights;
  // states
  let [SearchText, setSearchText] = useState(
    isString(searchText) ? searchText : "",
  );
  let rootHeight = useSharedValue(maxHeight);
  let translateY = useSharedValue(0);
  let helpTranslateY = useSharedValue(0);
  let pan = Gesture.Pan()
    .onUpdate(({ translationY }) => {
      if (expandable) {
        translateY.value = clamp(
          helpTranslateY.value + translationY,
          maxTranslationY,
          0,
        );
      }
    })
    .onEnd(() => {
      if (expandable) {
        let cond = translateY.value <= maxTranslationY / 2;
        let end = cond ? maxTranslationY : 0;
        translateY.value = withTiming(end, duration);
        helpTranslateY.value = end;
      }
    });
  /**
   *
   * @param {string} text
   */
  let onChangeText = (text) => {
    setSearchText(text);
    if (isFunction(onSearchTextChange)) onSearchTextChange(text);
  };
  let translationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));
  let childHeight = useAnimatedStyle(() => ({
    height:
      rootHeight.value -
      (expandable ? parallaxHeight + translateY.value : insets.top) -
      headerHeight,
  }));
  let KHStyle = useAnimatedStyle(() => ({
    height: rootHeight.value,
  }));
  let HeaderComponentOpacity = useAnimatedStyle(() => ({
    opacity: 1 - (2 * translateY.value) / maxTranslationY,
  }));
  let HeaderTitleOpacity = useAnimatedStyle(() => ({
    opacity: (2 * translateY.value) / maxTranslationY - 1,
  }));
  let scrollHandler = useAnimatedScrollHandler({
    onScroll() {
      runOnJS(OnScroll)();
    },
  });
  useEffect(() => {
    let s = Keyboard.addListener(
      ks,
      ({ duration, endCoordinates: { height } }) => {
        rootHeight.value = withTiming(
          maxHeight - height + (searchMode ? 20 : 0),
          {
            duration,
          },
        );
      },
    );
    let h = Keyboard.addListener(kh, ({ duration }) => {
      rootHeight.value = withTiming(dim.height, { duration });
    });
    return () => {
      s.remove();
      h.remove();
    };
  }, []);
  let ExpandableHeader = !isUndefined(HeaderComponent) ? (
    <HeaderComponent />
  ) : (
    <DefaultHeaderComponent title={searchMode ? "Search" : headerTitle} />
  );
  let isBackButtonExist = !isUndefined(backButton);
  let searchWidth = dim.width - (isBackButtonExist ? 50 : 16) - 50;
  let headerTitleFs = fontSize(22.5);
  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          fullWidth,
          KHStyle,
          bgBlack,
          !expandable && padding("t", insets.top),
        ]}
      >
        <Animated.View
          style={[fw, height(dim.height - insets.top), translationStyle]}
        >
          {expandable && (
            <Animated.View
              style={[
                fw,
                height(parallaxHeight),
                center,
                padding("t", insets.top),
                HeaderComponentOpacity,
              ]}
            >
              {ExpandableHeader}
            </Animated.View>
          )}
          <Animated.View style={[fw, height(headerHeight), row, aic]}>
            {isBackButtonExist && (
              <HeaderButton
                {...{
                  Provider: Entypo,
                  name: "chevron-left",
                  ...backButton,
                }}
              />
            )}
            <Animated.View
              style={[
                width(dim.width - (isBackButtonExist ? 50 : 0)),
                fh,
                row,
                aic,
                !searchMode && jcsb,
                !isBackButtonExist && pl16,
              ]}
            >
              {searchMode ? (
                <>
                  <AnimatedTextInput
                    {...{
                      style: [width(searchWidth), fh, headerTitleFs, cWhite],
                      value: SearchText,
                      onChangeText,
                      placeholder: "Search",
                      placeholderTextColor: "gray",
                    }}
                  />
                  <HeaderButton
                    {...{
                      Provider: MaterialIcons,
                      name: "keyboard-voice",
                    }}
                  />
                </>
              ) : (
                <>
                  {showHeaderTitle && (
                    <Animated.Text
                      style={[
                        cWhite,
                        headerTitleFs,
                        expandable && HeaderTitleOpacity,
                      ]}
                    >
                      {headerTitle}
                    </Animated.Text>
                  )}
                  <Animated.View style={[row, aic]}>
                    {!isUndefined(rightButtons) &&
                      rightButtons.map((rightButton, i) => (
                        <HeaderButton
                          {...{
                            key: i,
                            ...rightButton,
                          }}
                        />
                      ))}
                  </Animated.View>
                </>
              )}
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={[
              fw,
              childHeight,
              bgBlack,
              padding("b", isEqual(extraHeights, 0) ? 20 : extraHeights),
            ]}
          >
            {scrollableExpand ? (
              <Animated.ScrollView
                onScroll={scrollHandler}
                indicatorStyle="white"
                scrollEnabled={scrollable}
              >
                {children}
              </Animated.ScrollView>
            ) : (
              children
            )}
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};
export let RowView = ({ text, Provider, name, isReverse = false, style }) => {
  let icon = (
    <Provider
      {...{
        name,
        size: 33,
        ...cWhite,
      }}
    />
  );
  return (
    <Animated.View style={[row, aic, jcsb, style]}>
      {!isReverse && icon}
      <Animated.Text
        style={[margin(isReverse ? "r" : "l", 30), fontSize(21), cWhite]}
      >
        {text}
      </Animated.Text>
      {isReverse && icon}
    </Animated.View>
  );
};
export let CallIn = () => (
  <Svg width={22} height={22} xmlns="http://www.w3.org/2000/svg">
    <G
      stroke="#007AFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m2.8 11.2 4.08-2.51a2 2 0 0 0 .93-2l-.56-4A2 2 0 0 0 5.27 1H3a2 2 0 0 0-2 2v1c0 9.389 7.611 17 17 17h1a2 2 0 0 0 2-2v-2.27a2 2 0 0 0-1.72-2l-4-.56a2 2 0 0 0-2 .93l-2.48 4.1M14 2v6h6M21 1l-6.75 6.75" />
    </G>
  </Svg>
);
export let CallOut = () => (
  <Svg width={22} height={22} xmlns="http://www.w3.org/2000/svg">
    <G
      stroke="#007AFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m2.8 11.2 4.08-2.51a2 2 0 0 0 .93-2l-.56-4A2 2 0 0 0 5.27 1H3a2 2 0 0 0-2 2v1c0 9.389 7.611 17 17 17h1a2 2 0 0 0 2-2v-2.27a2 2 0 0 0-1.72-2l-4-.56a2 2 0 0 0-2 .93l-2.48 4.1M21 7V1h-6M14 8l6.75-6.75" />
    </G>
  </Svg>
);
export let MissCall = () => (
  <Svg width={22} height={23} xmlns="http://www.w3.org/2000/svg">
    <G
      stroke="#007AFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m14.8 8.193-.957 3.122c-.16.522-.005 1.045.397 1.327l2.004 1.444c.496.344 1.226.233 1.718-.262l1.135-1.135c.553-.552.614-1.385.138-1.862l-.43-.43C14.756 6.348 7.67 6.873 2.975 11.568l-.5.5c-.552.552-.614 1.386-.138 1.862l.979.978c.428.438 1.164.439 1.722.002l2.241-1.758c.448-.346.684-.897.6-1.401l-.528-3.008M9.09 1H5.13v3.414M5.13 1l5.657 4.877M10.787 5.876l5.42-4.267" />
    </G>
  </Svg>
);
export let ReceiveMessage = () => (
  <Svg width={22} height={23} xmlns="http://www.w3.org/2000/svg">
    <G
      stroke="#007AFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M16 10.263v6.316c0 .698-.672 1.263-1.5 1.263H10L5.5 21v-3.158h-3c-.828 0-1.5-.565-1.5-1.263v-6.316C1 9.566 1.672 9 2.5 9h12c.828 0 1.5.566 1.5 1.263ZM15 2.516v3.537h4.2M15 6.053 21 1" />
    </G>
  </Svg>
);
export let SendMessage = () => (
  <Svg width={22} height={23} xmlns="http://www.w3.org/2000/svg">
    <G
      stroke="#007AFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M15.286 10.263v6.316c0 .698-.64 1.263-1.429 1.263H9.571L5.286 21v-3.158H2.429c-.79 0-1.429-.565-1.429-1.263v-6.316C1 9.566 1.64 9 2.429 9h11.428c.79 0 1.429.566 1.429 1.263ZM21 4.368V1h-4.156M15.286 6.053 21 1" />
    </G>
  </Svg>
);

export let PhoneActionTypes = {
  CallIn,
  CallOut,
  MissCall,
  ReceiveMessage,
  SendMessage,
};

export let SwipableRow = ({
  isContactView = false,
  image,
  phoneActionType,
  name,
  simCardNumber,
  time,
  onSwipeLeft = noop,
  onSwipeRight = noop,
  showPhoneNumberInRight = false,
  phoneNumbers = [],
  btnBg,
}) => {
  let max = dim.width;
  let maxChildHeight = 120 + (isContactView ? 0 : 30);
  let [isExpanded, setIsExpanded] = useState(false);
  let tx = useSharedValue(0);
  let htx = useSharedValue(0);
  let childHeight = useSharedValue(0);
  let RowPan = Gesture.Pan()
    .onUpdate(({ translationX }) => {
      if (!isExpanded) {
        tx.value = clamp(translationX + htx.value, -max, max);
      }
    })
    .onEnd(() => {
      let TX = tx.value;
      let h = max / 2;
      let HTX = TX;
      let Time = 500;
      if (TX > h) {
        HTX = max;
        runOnJS(onSwipeRight)();
      } else if (TX < -h) {
        HTX = -max;
        runOnJS(onSwipeLeft)();
      } else Time = 0;
      tx.value = withTiming(HTX, duration);
      runOnJS(setTimeout)(() => {
        tx.value = withTiming(0, duration);
        htx.value = 0;
      }, Time);
    });
  let translationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: tx.value,
      },
    ],
    opacity: 1 - Math.abs(tx.value) / max,
  }));
  let bgStyle = useAnimatedStyle(() => ({
    backgroundColor: tx.value > 0 ? `#00ff00` : tx.value < 0 ? `#007aff` : tr,
  }));
  let LeftSwipStyle = useAnimatedStyle(() => ({
    opacity: tx.value <= 0 ? 0 : 1,
  }));
  let RightSwipStyle = useAnimatedStyle(() => ({
    opacity: tx.value >= 0 ? 0 : 1,
  }));
  let childHeightStyle = useAnimatedStyle(() => ({
    height: withTiming(childHeight.value, duration),
    opacity: withTiming(childHeight.value / maxChildHeight, duration),
  }));
  let pn0 = phoneNumbers[0];
  let phoneNumber = ` ` + pn0?.number;
  let actions = [
    {
      Provider: Ionicons,
      name: "ios-call",
    },
    {
      Provider: Ionicons,
      name: "chatbubble",
    },
    {
      Provider: FontAwesome,
      name: "video-camera",
    },
    {
      Provider: Entypo,
      name: "info-with-circle",
    },
  ];
  return (
    <Animated.View style={[fullWidth, minHeight(66)]}>
      <GestureDetector gesture={RowPan}>
        <Animated.View style={[fw, minHeight(66)]}>
          <Animated.View style={[fw, height(66)]}>
            <Animated.View
              style={[
                full,
                bgStyle,
                row,
                aic,
                jcsb,
                ph16,
                borderRadius("", 16),
              ]}
            >
              <RowView
                {...{
                  text: "Call",
                  Provider: Ionicons,
                  name: "ios-call",
                  style: LeftSwipStyle,
                }}
              />
              <RowView
                {...{
                  text: "Message",
                  Provider: Ionicons,
                  name: "chatbubble",
                  isReverse: true,
                  style: RightSwipStyle,
                }}
              />
            </Animated.View>
            <Animated.View style={[full, overlay, top(0), translationStyle]}>
              <WrappedButton
                activeOpacity={0.8}
                parentStyle={[full, overlay, top(0), backgroundColor(btnBg)]}
                btnStyle={[row, aic, padding("h", 19)]}
                onPress={() => {
                  childHeight.value = isExpanded ? 0 : maxChildHeight;
                  setIsExpanded((i) => !i);
                }}
              >
                <>
                  <Animated.View
                    style={[
                      squareLayout(40),
                      borderRadius("", 20),
                      isContactView && [
                        bwAll1,
                        borderColor("", "#777"),
                        backgroundColor("#333"),
                      ],
                      center,
                    ]}
                  >
                    {isContactView ? (
                      isUndefined(image?.durationTime) ? (
                        <Animated.Text style={[fontSize(24), color("#777")]}>
                          {toUpper(name[0])}
                        </Animated.Text>
                      ) : (
                        <Animated.Image
                          source={{ uri: image?.uri }}
                          style={[full, borderRadius("", 25)]}
                        />
                      )
                    ) : (
                      PhoneActionTypes[phoneActionType]()
                    )}
                  </Animated.View>
                  <Animated.View
                    style={[width(dim.width - 48 - 40), row, aic, jcsb, pl16]}
                  >
                    <Animated.Text style={[fontSize(22.5), cWhite]}>
                      {name}
                    </Animated.Text>
                    {showPhoneNumberInRight && (
                      <Animated.Text style={[fontSize(14), color("#777")]}>
                        {phoneNumber}
                      </Animated.Text>
                    )}
                    {!isUndefined(time) && (
                      <Animated.View style={[jcse, aife]}>
                        {!isUndefined(simCardNumber) && (
                          <Animated.View
                            style={[
                              layout(16, 20),
                              backgroundColor("#007aff"),
                              borderRadius("tr", 10),
                              borderRadius("btl", 1.5),
                              center,
                            ]}
                          >
                            <Animated.Text
                              style={[fontSize(12), fontWeight("6"), cWhite]}
                            >
                              {simCardNumber}
                            </Animated.Text>
                          </Animated.View>
                        )}
                        <Animated.Text style={[fontSize(13.5), color("gray")]}>
                          {time}
                        </Animated.Text>
                      </Animated.View>
                    )}
                  </Animated.View>
                </>
              </WrappedButton>
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={[
              fullWidth,
              childHeightStyle,
              padding("l", 80),
              padding("r", 48),
            ]}
          >
            <Animated.Text
              style={[fontWeight("5"), cWhite, textTransform("c")]}
            >
              {pn0?.label} {phoneNumber}
            </Animated.Text>
            {!isContactView && (
              <Animated.Text style={[cWhite, margin("t", 5)]}>
                {phoneActionType}
              </Animated.Text>
            )}
            <Animated.View
              style={[fw, height(70), margin("t", 25), row, aic, jcsb]}
            >
              {actions.map(({ Provider, name }, i) => (
                <IconButton
                  {...{
                    key: i,
                    Provider,
                    name,
                    size: 51,
                    bg: "#007aff",
                    onPress: () => console.log(name),
                  }}
                />
              ))}
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
};

export let SectionListContacts = ({
  section,
  isContactView = false,
  onSwipeLeft = noop,
  onSwipeRight = noop,
}) => {
  return (
    <Animated.View style={[margin("t", 15)]}>
      <Animated.View style={[height(30), jcc, pl16]}>
        <Animated.Text style={[fontSize(14), color("#777")]}>
          {section?.title}
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={[backgroundColor("#181818"), borderRadius("", 20), fw]}
      >
        {section?.data?.map((contact, i) => (
          <Animated.View key={i}>
            <SwipableRow
              {...{
                isContactView,
                btnBg: "#181818",
                onSwipeLeft: () => onSwipeLeft(contact),
                onSwipeRight: () => onSwipeRight(contact),
                ...contact,
              }}
            />
            {!isEqual(section?.data?.length - 1, i) && (
              <Animated.View
                style={[
                  margin("l", 82),
                  width(dim.width - 48 - 50),
                  height(1),
                  backgroundColor("gray"),
                  margin("v", 0.5),
                ]}
              />
            )}
          </Animated.View>
        ))}
      </Animated.View>
    </Animated.View>
  );
};
