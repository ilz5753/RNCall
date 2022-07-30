import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { Button, cWhite, ks, ParallaxHeaderScreen } from "../../components";
import {
  aic,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  color,
  fontSize,
  fullWidth,
  fw,
  height,
  jcsb,
  margin,
  padding,
  row,
  squareLayout,
} from "../../styles";
export default function Search() {
  let { goBack } = useNavigation();
  let searches = [
    {
      text: "kate",
      time: "28 July",
    },
    {
      text: "be",
      time: "14 June",
    },
    {
      text: "tay",
      time: "17 April",
    },
    {
      text: "davi",
      time: "5 Agust",
    },
    {
      text: "kate",
      time: "28 July",
    },
    {
      text: "be",
      time: "14 June",
    },
    {
      text: "tay",
      time: "17 April",
    },
    {
      text: "davi",
      time: "5 Agust",
    },
    {
      text: "kate",
      time: "28 July",
    },
    {
      text: "be",
      time: "14 June",
    },
    {
      text: "tay",
      time: "17 April",
    },
    {
      text: "davi",
      time: "5 Agust",
    },
    {
      text: "kate",
      time: "28 July",
    },
    {
      text: "be",
      time: "14 June",
    },
    {
      text: "tay",
      time: "17 April",
    },
    {
      text: "davi",
      time: "5 Agust",
    },
    {
      text: "kate",
      time: "28 July",
    },
    {
      text: "be",
      time: "14 June",
    },
    {
      text: "tay",
      time: "17 April",
    },
    {
      text: "davi",
      time: "5 Agust",
    },
  ];
  return (
    <ParallaxHeaderScreen
      {...{
        scrollable: true,
        expandable: true,
        searchMode: true,
        backButton: {
          onPress: goBack,
        },
        scrollableExpand: true,
      }}
    >
      <Animated.View style={[margin("t", 20), borderRadius("", 20)]}>
        <Animated.Text
          style={[
            fontSize(16),
            color("gray"),
            margin("b", 10),
            margin("l", 16),
          ]}
        >
          Recent searches
        </Animated.Text>
        <Animated.View
          style={[
            backgroundColor("#181818"),
            borderRadius("", 20),
            padding("h", 16),
          ]}
        >
          {searches.map(({ text, time }, i) => (
            <Button key={i} style={[fw, height(60), row, aic, jcsb]}>
              <Animated.Text style={[fontSize(22.5), cWhite]}>
                {text}
              </Animated.Text>
              <Animated.View style={[row, aic]}>
                <Animated.Text style={[fontSize(15), color("gray")]}>
                  {time}
                </Animated.Text>
                <Button
                  style={[
                    squareLayout(36),
                    borderRadius("", 18),
                    margin("l", 10),
                  ]}
                >
                  <Ionicons
                    {...{
                      name: "close",
                      size: 27,
                      ...cWhite,
                    }}
                  />
                </Button>
              </Animated.View>
            </Button>
          ))}
          <Button
            style={[
              fw,
              height(67.5),
              borderWidth("t", 1),
              borderColor("t", "gray"),
            ]}
          >
            <Animated.Text style={[fontSize(19.5), color("gray")]}>
              Clear search history
            </Animated.Text>
          </Button>
        </Animated.View>
      </Animated.View>
    </ParallaxHeaderScreen>
  );
}
