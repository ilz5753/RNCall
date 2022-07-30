import * as Contacts from "expo-contacts";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ParallaxHeaderScreen, SectionListContacts } from "../../components";
import { useEffect, useState } from "react";
import { toUpper } from "lodash";
import { Combine } from "../../components/utils";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function ContactS() {
  let { navigate } = useNavigation();
  let bottomHeight = useBottomTabBarHeight();
  let [CONTACTS, setCONTACTS] = useState([]);
  let rightButtons = [
    {
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
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync();
        let nc = data.map((contact) => ({
          title: toUpper(contact.name[0]),
          data: contact,
        }));
        nc = Combine(nc);
        setCONTACTS(nc);
      }
    })();
  }, []);
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
      {CONTACTS.map((section, i) => (
        <SectionListContacts
          {...{
            key: i,
            section,
            isContactView: true,
            onSwipeLeft: console.log,
          }}
        />
      ))}
    </ParallaxHeaderScreen>
  );
}
