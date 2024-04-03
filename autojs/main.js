// 读取云端脚本
let { scriptUrl } = require('./config');

// 图标
let stopIcon = require('./stopIcon');

let e;

let stop = () => {
  toast('停止');
  e.getEngine().forceStop();
  exit();
};

try {
  // 悬浮窗
  if (!floaty.checkPermission()) {
    // 没有悬浮窗权限，提示用户并跳转请求
    alert('本脚本需要悬浮窗权限来显示悬浮窗，请在随后的界面中允许并重新运行本脚本。');
    floaty.requestPermission();
    stop();
  }
  let menuWindow = floaty.window(`
  <vertical id="stop" marginLeft="5">
  <img w="40" h="40" src="${stopIcon}" />
  <text size="6dp" textColor="white" gravity="center_horizontal">退出</text>
  </vertical>`);
  menuWindow.stop.click(stop);
} catch (error) {
  alert(error);
  exit();
}

// 启动脚本
let startTime = Date.now();
let loading = dialogs.build({
  title: '脚本加载中',
  progress: {
    max: -1,
  },
  cancelable: false,
}).show();

threads.start(() => {
  try {
    // 获取脚本
    let script = http.get(scriptUrl).body.string();
    // 动画保证
    let costTime = Date.now() - startTime;
    if (costTime < 1000) {
      sleep(1000 - costTime);
    }
    e = engines.execScript('脚本名称', script);
    // 关闭弹窗
    ui.post(() => {
      loading.dismiss();
    });
  } catch (error) {
    alert('加载脚本失败' + error.message);
    exit();
  }
});
// 屏幕低亮度常量
device.keepScreenDim();

// 检查
while (true) {
  if (!e) {
    sleep(1000);
    continue;
  }
  let engine = e.getEngine();
  if (engine.isDestroyed()) {
    toast('脚本已停止');
    exit();
  }
  sleep(1000);
}
