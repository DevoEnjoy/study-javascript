/* JS에서는 오버로딩을 지원하지 않는다. */
/* 대신 함수 사용 시 매개변수의 개수를 맞출 필요 없다. */

/* 비밀번호 변경 */
/* 1. 로그인 후 비밀번호 변경 페이지 */
/* 2. 마이페이지에서 내 정보 수정 페이지 */
/* ※ ??는 DB라고 가정한다. */
// function update(user, originalPassword){
//     if(??.userId == user.userId){
//         if(??.password == originalPassword){
//             ??.password = user.password;
//         }
//     }
// }

// callback 함수
// 하나의 함수에 여러 연산이 섞여 있다.

/* 객체 선언 방법 */
// 1. {}
// 2. new Object()
// 3. prototype: 딱 한번만 선언하자

// function User(name, age){
//     this.name = name;
//     this.age = age;
// }

// let user1 = new User('hds', 20);

// User.prototype.number = 1;
// console.log(user1.number);

/* Array */
let datas = new Array(5).fill(0);

for (let i = 0; i < datas.length; i++) {
    datas[i] = i + 1;
}

console.log(datas);

datas.length++;

console.log(datas.join(","));
console.log(datas.indexOf(3));

datas.forEach(data => console.log(data));
console.log(datas.filter(data => data % 2 == 0).join(","));
console.log(datas.map(data => data * 2));
