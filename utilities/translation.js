// import {I18n} from "i18n-js";
import memoize from "lodash.memoize";
import {I18nManager} from "react-native";

let i18n;

export const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    fr: () => require("../translations/fr.json"),
};

export const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const setI18nConfig = (lang) => {
    // fallback if no available language fits
    const fallback = { languageTag: lang, isRTL: false };

    let { languageTag, isRTL } = fallback;

    // clear translation cache
    translate.cache.clear();
    // update layout direction
    I18nManager.forceRTL(isRTL);
    // set i18n-js config
    if (languageTag) {
        if (!translationGetters[languageTag]) {
            languageTag = 'fr'
        }
        // i18n = new I18n({ [languageTag]: translationGetters[languageTag]() });
    }
    else {
        // i18n = new I18n({ [languageTag]: translationGetters['fr']() });
    }
    i18n.locale = languageTag;
};
