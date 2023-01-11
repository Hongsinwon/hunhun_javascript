const messageContainer = document.querySelector("#d-day-massage");
const container = document.querySelector("#d-day-container");
container.style.display = "none";
messageContainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>";

const savrdDate = localStorage.getItem("saved-date");

const dateFormMaker = () => {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;
  const dataFormat = inputYear + "-" + inputMonth + "-" + inputDate;

  return dataFormat;
};

const counterData = (data) => {
  if (data !== savrdDate) {
    localStorage.setItem("saved-date", data);
  }

  const todayDate = new Date();
  const targetData = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetData - todayDate) / 1000;

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMin = Math.floor(remaining / 60) % 60;
  const remainingSec = Math.floor(remaining) % 60;

  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");
  const min = document.querySelector("#min");
  const sec = document.querySelector("#sec");

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentObj = {
    days: document.querySelector("#days"),
    hours: document.querySelector("#hours"),
    min: document.querySelector("#min"),
    sec: document.querySelector("#sec"),
  };

  const format = (time) => {
    if (time < 10) {
      return "0" + time;
    }

    return time;
  };

  // 만약 remaining이 0이라면 타이머가 종료 되었습니다 출력
  if (remaining < 0) {
    messageContainer.innerHTML = "<h3>타이머가 종료 되었습니다.</h3>";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    //만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다.
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    setClearInterval();
    return;
  } else {
    const timeKeys = Object.keys(remainingObj);
    const docKeys = Object.keys(documentObj);

    container.style.display = "flex";
    messageContainer.style.display = "none";

    for (let i = 0; timeKeys.length > i; i++) {
      const remainingTime = format(remainingObj[timeKeys[i]]);
      documentObj[docKeys[i]].textContent = remainingTime;
      // 같은내용
      // documentObj["days"].textContent = remainingDate;
      // documentObj["hours"].textContent = remainingHours;
      // min.textContent = remainingObj.remainingMin;
      // sec.textContent = remainingObj.remainingSec;
    }
  }
};
const intervalIdArr = [];

const starter = (targetDateInput) => {
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }

  // localStorage.setItem("saved-date", targetDateInput);

  //setClearInterval();
  counterData(savrdDate);
  const intervalId = setInterval(() => counterData(savrdDate), 1000);
  //console.log(intervalId);
  intervalIdArr.push(intervalId);
  //console.log(intervalIdArr);
};

const setClearInterval = () => {
  localStorage.removeItem("saved-date");
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};

const resetTimer = () => {
  container.style.display = "none";
  messageContainer.style.display = "block";
  messageContainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>";
  setClearInterval();
};

if (savrdDate) {
  starter(savrdDate);
} else {
  container.style.display = "none";
  messageContainer.style.display = "block";
  messageContainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>";
}
