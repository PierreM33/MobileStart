import {StyleSheet} from "react-native";

const NameAppColor = {

    //FakeColorApp
    Orange10: "#ffc5a0",
    Orange50: "#ff4900",

    Grey10: "#d9d9d9",
    Grey50: "#9FA4A4",
    Grey90: "#131919",
    Disabled: "#9FA4A4",

    //Linear exemple
    LinearWhite: ["#E8DDFC", "#FFFFFF"],
    LinearPurple: ["#4E329C", "#664CB5", "#9A7FEC"],

    Black: "#000000",
    White: "#FFFFFF",
}

const ErrorColor = {
    Error1: "#EA635E",
    Error2: "#EFABA9",
    Error3: "#FDEFEF"
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
        color: NameAppColor.Grey90
    },
    H5: {
        fontFamily: font,
        fontSize: 18,
        color: NameAppColor.Grey90
    },
    errorMessage: {
        fontFamily: "Sequel",
        fontSize: 14,
        color: ErrorColor.Error1
    }
});


export {
    NameAppColor,
    ErrorColor,
    MainStyle,
};
