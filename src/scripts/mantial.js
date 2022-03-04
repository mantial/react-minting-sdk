export function initMantialConfig(frameId, config) {
  const frame = document.getElementById(frameId);
  frame.onload = () => {
    frame.contentWindow.postMessage(
      {
        ...config,
        type: 'mantial-config',
      },
      '*'
    );
  };
}

export function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
