function changegps() {
    navigator.geolocation.watchPosition(successCallback, errorCallback);
}

function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
    var heading = position.coords.heading;
    document.getElementById('aaa').textContent = 'output:'+latitude;

}

function errorCallback()
{
    document.getElementById('aaa').textContent = 'output: error' ;

}