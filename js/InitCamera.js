var newEntity = document.createElement('a-camera');
newEntity.setAttribute('arjs-device-orientation-controls', 'smoothingFactor: 0.8');
newEntity.setAttribute('gps-camera', 'simulateLatitude: ' + 23.132468 + '; simulateLongitude: ' + 113.282836);
newEntity.setAttribute('cursor', 'rayOrigin: mouse');
newEntity.setAttribute('id', 'camm');
document.querySelector('a-scene').appendChild(newEntity);
