import { Ionicons, Feather } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { ParallaxHeaderScreen, SectionListContacts } from "../../components";

export default function Recents() {
  let { navigate } = useNavigation();
  let bottomHeight = useBottomTabBarHeight();
  let rightButtons = [
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
  let recents = [
    {
      title: "Today",
      data: [
        {
          phoneActionType: "CallIn",
          name: "Kate Bell",
          simCardNumber: 1,
          time: "19:54",
          phoneNumbers: [
            {
              label: "mobile",
              number: "(555) 564-8583",
            },
          ],
        },
      ],
    },
    {
      title: "Yesterday",
      data: [
        {
          phoneActionType: "CallOut",
          name: "Daniel Higgins Jr.",
          simCardNumber: 2,
          time: "17:27",
          phoneNumbers: [
            {
              label: "home",
              number: "555-478-7672",
            },
          ],
        },
        {
          phoneActionType: "CallIn",
          name: "Daniel Higgins Jr.",
          simCardNumber: 2,
          time: "17:00",
          phoneNumbers: [
            {
              label: "home",
              number: "555-478-7672",
            },
          ],
        },
        {
          phoneActionType: "ReceiveMessage",
          name: "Daniel Higgins Jr.",
          simCardNumber: 2,
          time: "16:19",
          phoneNumbers: [
            {
              label: "home",
              number: "555-478-7672",
            },
          ],
        },
      ],
    },
    {
      title: "27 July 2022",
      data: [
        {
          phoneActionType: "SendMessage",
          name: "Daniel Higgins Jr.",
          simCardNumber: 2,
          time: "11:02",
          phoneNumbers: [
            {
              label: "home",
              number: "555-478-7672",
            },
          ],
        },
      ],
    },
    {
      title: "26 July 2022",
      data: [
        {
          phoneActionType: "ReceiveMessage",
          name: "Anna Haro",
          simCardNumber: 1,
          time: "22:58",
          phoneNumbers: [
            {
              label: "home",
              number: "555-522-8243",
            },
          ],
        },
        {
          phoneActionType: "CallOut",
          name: "Anna Haro",
          simCardNumber: 1,
          time: "21:43",
          phoneNumbers: [
            {
              label: "home",
              number: "555-522-8243",
            },
          ],
        },
        {
          phoneActionType: "SendMessage",
          name: "John Appleseed",
          simCardNumber: 2,
          time: "21:41",
          phoneNumbers: [
            {
              label: "mobile",
              number: "888-555-5512",
            },
          ],
        },
        {
          phoneActionType: "ReceiveMessage",
          name: "Anna Haro",
          simCardNumber: 1,
          time: "21:34",
          phoneNumbers: [
            {
              label: "home",
              number: "555-522-8243",
            },
          ],
        },
        {
          phoneActionType: "CallIn",
          name: "Kate Bell",
          simCardNumber: 1,
          time: "20:07",
          phoneNumbers: [
            {
              label: "mobile",
              number: "(555) 564-8583",
            },
          ],
        },
        {
          phoneActionType: "MissCall",
          name: "Anna Haro",
          simCardNumber: 1,
          time: "20:00",
          phoneNumbers: [
            {
              label: "home",
              number: "555-522-8243",
            },
          ],
        },
        {
          phoneActionType: "SendMessage",
          name: "Kate Bell",
          simCardNumber: 1,
          time: "18:59",
          phoneNumbers: [
            {
              label: "mobile",
              number: "(555) 564-8583",
            },
          ],
        },
        {
          phoneActionType: "MissCall",
          name: "John Appleseed",
          simCardNumber: 2,
          time: "17:39",
          phoneNumbers: [
            {
              label: "mobile",
              number: "888-555-5512",
            },
          ],
        },
      ],
    },
  ];
  return (
    <ParallaxHeaderScreen
      {...{
        expandable: true,
        showHeaderTitle: true,
        headerTitle: "Phone",
        scrollable: true,
        rightButtons,
        scrollableExpand: true,
        extraHeights: bottomHeight,
      }}
    >
      {recents.map((section, i) => (
        <SectionListContacts
          {...{
            key: i,
            section,
            onSwipeRight: console.log,
          }}
        />
      ))}
    </ParallaxHeaderScreen>
  );
}
