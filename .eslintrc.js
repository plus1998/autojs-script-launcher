module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'rules': {
    'prefer-const': 0, // Rhino bug 不能使用const
  },
  'globals': {
    auto: 'readonly',
    ui: 'readonly',
    context: 'readonly',
    app: 'readonly',
    engines: 'readonly',
    exit: 'readonly',
    device: 'readonly',
    files: 'readonly',
    events: 'readonly',
    threads: 'readonly',
    floaty: 'readonly',
    importPackage: 'readonly',
    importClass: 'readonly',
    Packages: 'readonly',
    currentActivity: 'readonly',
    currentPackage: 'readonly',
    back: 'readonly',
    home: 'readonly',
    swipe: 'readonly',
    toast: 'readonly',
    sleep: 'readonly',
    click: 'readonly',
    longClick: 'readonly',
    scrollDown: 'readonly',
    scrollUp: 'readonly',
    id: 'readonly',
    text: 'readonly',
    textMatches: 'readonly',
    textStartsWith: 'readonly',
    desc: 'readonly',
    descEndsWith: 'readonly',
    descContains: 'readonly',
    descStartsWith: 'readonly',
    textContains: 'readonly',
    className: 'readonly',
    storages: 'readonly',
    http: 'readonly',
    dialogs: 'readonly',
    images: 'readonly',
    // 函数
    requestScreenCapture: 'readonly',
    captureScreen: 'readonly',
    // importPackage(Packages['org.eclipse.paho.client.mqttv3'])
    // importClass('org.eclipse.paho.android.service.MqttAndroidClient')
    MqttAndroidClient: 'readonly',
    IMqttActionListener: 'readonly',
    MqttConnectOptions: 'readonly',
    MqttCallbackExtended: 'readonly',
    // importClass('android.widget.AdapterView')
    AdapterView: 'readonly',
    CompoundButton: 'readonly',
    // importClass('android.net.Uri')
    Uri: 'readonly',
    colors: 'readonly',
    $crypto: 'readonly',
    descMatches: 'readonly',
    clickable: 'readonly',
    checkable: 'readonly',
    textEndsWith: 'readonly',
    Intent: 'readonly',
    shell: 'readonly',
    Shell: 'readonly',
    mqtt: 'readonly',
    android: 'readonly',
    input: 'readonly',
  },
};
