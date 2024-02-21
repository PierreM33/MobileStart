// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
//
// module.exports = (async () => {
//
//     const conf = await mergeConfig(getDefaultConfig(__dirname))
//
//     const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts
//     const otherExt = [ 'jsx', 'js', 'ts', 'tsx', 'json', 'svg', 'd.ts', 'mjs', 'cjs' ].concat(defaultSourceExts)
//
//
//     const config = {
//         transformer: {
//             babelTransformerPath: require.resolve("react-native-svg-transformer"),
//             assetPlugins: ['expo-asset/tools/hashAssetFiles'],
//         },
//         resolver: {
//             assetExts: conf.resolver.assetExts.filter(ext => ext !== "svg"),
//             sourceExts: [...conf.resolver.sourceExts, ...otherExt, "svg", "json"]
//         }
//     }
//
//     return await mergeConfig(getDefaultConfig(__dirname), config)
// })();
