import {ScrollView, Text, View, StyleSheet} from "react-native";
import BackButton from "../../components/Buttons/BackButton";


const DiscoverScreen = ({ navigation }) => {

    const onPress = () => {
        navigation.goBack()
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{position: "absolute", top: 15, left: 0}}>
                <BackButton onPress={onPress}/>
            </View>

                <View style={{...styles.section, marginTop: 75}}>
                    <Text style={styles.title}>Référence</Text>
                    <Text style={styles.text}>Il s'agit du starter Pack, l'application ne possède pas de nom, ses fichiers commencent donc par nameApp ou NameApp</Text>
                </View>
                <View style={{...styles.section}}>
                    <Text style={styles.title}>Welcome Page</Text>
                    <Text style={styles.text}>Elle contient 3 boutons qui sont Login, codeSms et Découvrir</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.text}>Elle contient un système de connexion avec email et password.</Text>
                    <Text style={styles.text}>Une API avec la route ( login_check ).</Text>
                    <Text style={styles.text}>Une API avec la route ( login_phone ).</Text>
                    <Text style={styles.text}>Validation fictive de la connexion qui renvoie sur HomeScreen.</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>SmsCode</Text>
                    <Text style={styles.text}>Elle contient, l'écriture du code à 6 chiffres et la réception d'un code à 6 chiffres par SMS.</Text>
                    <Text style={styles.text}>Un bouton de reSendCode avec une fonction vide.</Text>
                    <Text style={styles.text}>Un bouton de validation qui console.log le code saisie.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Redux</Text>
                    <Text style={styles.text}>initialStateLogger contient : user: {}, token, refreshToken</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Navigation</Text>
                    <Text style={styles.text}>Possède deux navigation, une externe et une interne.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Bottom Bar</Text>
                    <Text style={styles.text}>Possède une bottom Bar pour la navigation interne (en cours...).</Text>
                </View>

                <View style={{...styles.section,  paddingBottom: 50}}>
                    <Text style={styles.title}>Composants</Text>
                    <Text style={styles.text}>Bouton : Possède un type, titre et un disabled, avec trois couleur blanc, noir gris.</Text>
                    <Text style={styles.text}>Input avec différentes props.</Text>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    section: {
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default DiscoverScreen;
