cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-fcm/www/FCMPlugin.js",
        "id": "cordova-plugin-fcm.FCMPlugin",
        "pluginId": "cordova-plugin-fcm",
        "clobbers": [
            "FCMPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-firebase/www/firebase-browser.js",
        "id": "cordova-plugin-firebase.FirebasePlugin",
        "pluginId": "cordova-plugin-firebase",
        "clobbers": [
            "FirebasePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-firebase-messaging/www/FirebaseMessaging.js",
        "id": "cordova-plugin-firebase-messaging.FirebaseMessaging",
        "pluginId": "cordova-plugin-firebase-messaging",
        "merges": [
            "cordova.plugins.firebase.messaging"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-console": "1.0.5",
    "cordova-plugin-statusbar": "1.0.1",
    "cordova-plugin-fcm": "2.1.1",
    "cordova-plugin-firebase": "0.1.19",
    "cordova-plugin-cocoapod-support": "1.2.14",
    "cordova-plugin-firebase-hooks": "0.9.6",
    "cordova-plugin-firebase-messaging": "0.9.0"
}
// BOTTOM OF METADATA
});