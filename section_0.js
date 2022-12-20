// 1. 변수, 상수 and 데이터 타입 기초
console.log(1); // 1
console.log(10 + 20); // 30
console.log(121401 * 1); // 121401

// 변수 :: 데이터를 담아주는 박스
let box = 121401 * 1;
console.log(box); // 121401

let word = "abc";
console.log(word); // "abc"

let num = 123;
console.log(num); // 123

// 변수 선언 키워드 :: 변수 명 만으로도 어떤 변수인지 알 수 있어야한다.
// 1. var : 재선언 , 재할당 가능
// 2. let : 재할당 가능, 재선언 불가능, 변수
// 3. const :  재선언 , 재할당 불가능, 상수

let box1;
box1 = 123; // 변수 할당 , = <- 할당

console.log(box1); // 123
console.log(box1 * 3); // 369
 
const word1;
const word1 = "abc" // 재선언불가능
word1 = 'sinwon' // 재할당 불가능

// camelCase : 띄어쓰기 대신 대문자로 구분
// snake_case : 띄어쓰기 대신 언더바(_)로 구분
// PascalCase : 첫글자도 대문자, 띄어쓰기 대신 대문자로 구분


// 데이터 타입 : string, number, boolean, nudefined, null, symbol, bigint, object
// 1. 문자열 string
let box2 = 1;
console.log(box2) // 1
console.log('box2') //'box2'

console.log("Hello " + 'world') // Hello world

// 2. 숫자number
console.log(1); // 1
console.log(10 + 20); // 30
console.log(121401 * 1); // 121401
console.log(10 / 2) // 5


console.log('a' + 1)  // "a1" <- 숫자가 문자열로 반환
console.log('1' + 1) // "11"
console.log('' + 1) // "1"
console.log('a' * 1) // NaN -> not a number
console.log("2" * 2) // 4 -> 숫자로 반환

// 산술 연산자 : + - * /