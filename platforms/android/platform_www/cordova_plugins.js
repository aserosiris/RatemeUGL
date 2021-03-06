cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-bluetooth-serial.bluetoothSerial",
    "file": "plugins/cordova-plugin-bluetooth-serial/www/bluetoothSerial.js",
    "pluginId": "cordova-plugin-bluetooth-serial",
    "clobbers": [
      "window.bluetoothSerial"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "cordova-plugin-x-toast.Toast",
    "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
    "pluginId": "cordova-plugin-x-toast",
    "clobbers": [
      "window.plugins.toast"
    ]
  },
  {
    "id": "uk.co.workingedge.cordova.plugin.sqliteporter.sqlitePorter",
    "file": "plugins/uk.co.workingedge.cordova.plugin.sqliteporter/www/sqlitePorter.js",
    "pluginId": "uk.co.workingedge.cordova.plugin.sqliteporter",
    "clobbers": [
      "cordova.plugins.sqlitePorter"
    ]
  },
  {
    "id": "cordova-plugin-sqlserver.plugin",
    "file": "plugins/cordova-plugin-sqlserver/www/plugin.js",
    "pluginId": "cordova-plugin-sqlserver",
    "clobbers": [
      "SqlServer"
    ],
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-bluetooth-serial": "0.4.7",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-ionic-webview": "2.3.2",
  "cordova-plugin-ionic-keyboard": "2.1.3",
  "cordova-sqlite-storage": "2.6.0",
  "cordova-plugin-x-toast": "2.7.2",
  "uk.co.workingedge.cordova.plugin.sqliteporter": "1.1.0",
  "cordova-plugin-sqlserver": "1.0.0"
};
// BOTTOM OF METADATA
});