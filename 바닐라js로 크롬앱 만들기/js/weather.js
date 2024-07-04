// 위치를 성공적으로 가져왔을 때의 함수

const API_KEY = "3652e627b15c8915e561cb5d551b1358";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.weather[0].main);
            console.log(data.name);
        })
}

//위치를 성공적으로 가져오지 못했을 때의 함수
function onGeoError(){
    alert("Can't find your geolocation");
}

// 위치를 성공적으로 가져왔을 땐, 첫번째 함수 실행 / 실패했을 땐 두번째 함수 실행
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);