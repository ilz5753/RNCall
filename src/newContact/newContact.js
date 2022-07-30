import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { bgBlack, Button, cWhite } from "../../components";
import { center, color, flex, fontSize, margin, padding } from "../../styles";

export default function NewContact() {
  let { goBack } = useNavigation();
  return (
    <Animated.View style={[flex(1), center, bgBlack]}>
      <Animated.Text style={[fontSize(24), cWhite]}>
        New Contact Screen
      </Animated.Text>
      <Button style={[padding("", 15), margin("t", 30)]} onPress={goBack}>
        <Animated.Text style={[color("#007aff"), fontSize(18)]}>
          Go back
        </Animated.Text>
      </Button>
    </Animated.View>
  );
}
