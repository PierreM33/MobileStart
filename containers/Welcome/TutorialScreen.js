import {View} from "react-native";
import BackButton from "../../components/Buttons/BackButton";


const TutorialScreen = ({ navigation }) => {

    const onPress = () => {
        navigation.goBack()
    }

    return (
        <View style={{flex:1, backgroundColor: "#ffffff"}}>
            <View style={{position: "absolute", top: 75, left: 15}}>
                <BackButton onPress={onPress}/>
            </View>
        </View>
    )
}

export default TutorialScreen;
