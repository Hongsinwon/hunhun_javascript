// 배열 array : 여러개의 데이터를 순서와 함께 저장하고 싶을때 사용 하는 기다란 저장 창고
// ['데이터1'(0), '데이터2'(1), '데이터3'(2), '데이터4'(3), '데이터5'(4)] <- 데이터 하나하나 : 요소(element)

let ranking = ["데이터1", "데이터2", "데이터3", "데이터4", "데이터5"];
console.log(ranking[2]); // 데이터3

// Property : 데이터 타입마다 가지고 있는 고유한 속성들
// array.length <- 배열 내 요소의 개수
console.log(ranking.length); // 5

// 배열의 메소드 method : 어떠한 기능을 가지고 있는 명령어
// 1. push() : 배열 맨 뒤에 데이터 추가
ranking.push("데이터6");
console.log(ranking); //"데이터1", "데이터2", "데이터3", "데이터4", "데이터5", "데이터6"

// 2. pop() : 배열 맨 뒤에 데이터 삭제
ranking.pop();
console.log(ranking); //"데이터1", "데이터2", "데이터3", "데이터4", "데이터5"

// 3. indexof() : 특정 데이터에 주어진 index값을 찾아 반환
ranking.indexOf("데이터2"); // 1
ranking.indexOf("0"); //-1

// 4. includes() : 특정 배열에 주어진 데이터가 포함되어있는지 확인하는 메소드
ranking.includes("데이터1"); // true
ranking.includes("0"); // false
