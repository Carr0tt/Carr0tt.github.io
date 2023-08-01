cameraLatitude = 23.133266;
cameraLongitude = 113.283274;
// 创建 <a-camera> 元素
var newEntity = document.createElement('a-camera');
// 设置属性
newEntity.setAttribute('arjs-device-orientation-controls', 'smoothingFactor: 0.8');
newEntity.setAttribute('gps-camera', 'simulateLatitude: ' + 23.132468 + '; simulateLongitude: ' + 113.282826);
newEntity.setAttribute('cursor', 'rayOrigin: mouse');
newEntity.setAttribute('id', 'camm');
document.querySelector('a-scene').appendChild(newEntity);
