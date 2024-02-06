import {StyleSheet} from "react-native";

const NameAppColor = {

    //Grey
    Grey0: "#FFFFFF",
    Grey10: "#FAFAFC",
    Grey20: "#F1F2F4",
    Grey30: "#DFE1E1",
    Grey50: "#9FA4A4",
    Grey70: "#5F6667",
    Grey80: "#2E3B3C",
    Grey90: "#131919",
    Disabled: "#9FA4A4",

    //Purple
    Purple10: "#E8DDFC",
    Purple20: "#CEBEFA",
    Purple50: "#734DC2",
    Purple70: "#361485",
    Purple90: "#1F0756",

    //Linear
    Linear50_90: ["#220856", "#6D49BA", "#A47CF6"],
    Linear0_10: ["#E8DDFC", "#FFFFFF"],
    Linear20_50: ["#4E329C", "#664CB5", "#9A7FEC"],

    Black: "#000000",
    Red: "#EA635E",

    //Yellow
    Yellow100: 'yellow',
    Yellow50: 'yellow',
    Yellow10: 'yellow',
}

const ErrorColor = {
    Error1: "#EA635E",
    Error2: "#EFABA9",
    Error3: "#FDEFEF"
}

const WarningColor = {
    Error1: "#F6C14B",
    Error2: "#F4E4C1",
    Error3: "#FDF8EC"
}

const StateColor = {
    Info: '#47A1F8',
    Warning: '#FFB600',
    Error: "#ED4957",
    Success: "#8ED778"
}

const font = "Sequel Bold"

const MainStyle = StyleSheet.create({
    H1: {
        fontFamily: font,
        fontSize: 36,
        color: NameAppColor.Grey90
    },
    H2: {
        fontFamily: font,
        fontSize: 32,
        color: NameAppColor.Grey90
    },
    H3: {
        fontFamily: font,
        fontSize: 24,
        color: NameAppColor.Grey90
    },
    H4: {
        fontFamily: font,
        fontSize: 20,
        color: NameAppColor.Grey80
    },
    H5: {
        fontFamily: font,
        fontSize: 18,
        color: NameAppColor.Grey80
    },
    shadowBox: {
        backgroundColor: 'white',
        shadowColor: "#9167EB",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.3,
        shadowRadius: 6,
        elevation: 15
    },
    errorMessage: {
        fontFamily: "Sequel",
        fontSize: 14,
        color: NameAppColor.Red50
    }
});


export {
    NameAppColor,
    ErrorColor,
    WarningColor,
    MainStyle,
    StateColor
};
