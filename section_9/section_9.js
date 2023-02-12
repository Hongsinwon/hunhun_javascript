let todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const savedTodoList = JSON.parse(localStorage.getItem("save-items"));
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));

const createTodo = (storageData) => {
  let todoContents = todoInput.value;
  if (storageData) {
    todoContents = storageData.contents;
  }

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList?.appendChild(newLi);
  todoInput.value = "";
  saveItemsFn();
};

const keyCodeCkeck = () => {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "") {
    createTodo();
  }
};

const deleteAll = () => {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
  saveItemsFn();
};

const saveItemsFn = () => {
  const saveItems = [];

  for (let i = 0; i < todoList?.children?.length; i++) {
    const todoObj = {
      contents: todoList?.children[i].querySelector("span")?.textContent,
      complete: todoList?.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }
  saveItems.length === 0
    ? localStorage.removeItem("save-items")
    : localStorage.setItem("save-items", JSON.stringify(saveItems));
};

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}

const weatherDataActive = ({ location, weather }) => {
  const wratherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Thumderstorm",
  ];

  weatherData = wratherMainList.includes(weather) ? weather : "Fog";
  const locationName = document.querySelector("#location-name");
  locationName.textContent = location;
  document.body.style.backgroundImage = `url(./images/${weatherData}.jpg)`;
  //console.log(location, weather);

  if (
    savedWeatherData ||
    savedWeatherData?.location !== location ||
    savedWeatherData?.weather !== weather
  ) {
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }
};

const weatherSearch = ({ latitude, longitude }) => {
  //7bb9e553479391c5d2eee3f9647cbdc3
  //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

  const openWeather = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8a6122f0f8a1e299a9fc6f9a0692e07c`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      //console.log(json.name, json.weather[0].main);
      const weatherDate = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherDate);
    })
    .catch((err) => {
      console.log(err);
    });
};

const accessToGeo = ({ coords }) => {
  const { latitude, longitude } = coords;
  const positionObj = {
    latitude,
    longitude,
  };

  weatherSearch(positionObj);
};

const askForLoation = () => {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};

askForLoation();

if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}
