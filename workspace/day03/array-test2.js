// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1~10까지 Array객체에 담은 후 짝수만 출력
    // 1. 제어문
    // let test11 = new Array(10).fill(0).map((data, i) => i + 1);
    // test11.forEach(v => console.log(v));

    // test11.forEach(v => console.log(v));
    // let i = 0;
    // test11.map(v => ++i).forEach(v => console.log(v));

    // for (let i = 0; i < test11.length; i++) {
    //     test11[i] = i + 1;
    // }
    // for (let i = 0; i < test11.length; i++) {
    //     if(test11[i]%2 == 0){
    //         console.log(test11[i]);
    //     }
    // }

    // for (let i = 0; i < test11.length; i++) {
    //     test11[i] = i + 1;
    //     if((i+1)%2==0){
    //         console.log(test11[i]);
    //     }
    // }


    
    // 2. callback 함수
    // function printTest11(start, end, callback){
    //     var array = new Array(end).fill(0);
    //     for (let i = 0; i < end; i++) {
    //         array[i] = start + i + 1;
    //     }
    //     if(callback){
    //         callback(array);
    //         return;
    //     }
    //     return array;
    // }

    // printTest11(0, 10, function(array){
    //     array.filter(v => v%2==0).forEach(v => console.log(v));
    // });


    // 3. arrow expression
    // test11.filter(v => v%2==0).forEach(v => console.log(v));


// 한글을 정수로 변경
    // 1. 제어문
    let hans = "영일이삼사오육칠팔구";
    let splitInput = "일삼이사".split("");

    // let temp = "";

    // for (let i = 0; i < splitInput.length; i++) {
    //     temp += hans.indexOf(splitInput[i]);
    // }
    // console.log(temp);

    // 2. callback 함수
    // function hanToNums(inputHan, callback){
    //     var temp = "";
    //     var split = inputHan.split("");
    //     for (let i = 0; i < split.length; i++) {
    //         temp += hans.indexOf(split[i]);
    //     }
    //     if(callback){
    //         callback(temp);
    //         return;
    //     }
    //     return temp;
    // }

    // hanToNums("일삼이삼", function(temp){
    //     console.log(temp);
    // });

    // 3. arrow expression
    
    // console.log(parseInt("일삼이오".split("").map(v => hans.indexOf(v)).join("")));


// 정수를 한글로 변경
    // 1. 제어문
    // 2. callback 함수
    // 3. arrow expression

// 1~100까지 합 출력
    // 1. 제어문
    // 2. callback 함수
    // 3. arrow expression
    
    // console.log(new Array(100).fill(0).map((data, i) => i + 1).every()));

    // ==========================================================================================
// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1~10까지 Array객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0).map((data, i) => i + 1);
// let datas = new Array(10).fill(0);
// let i = 0;
// datas.forEach(data => datas[i++] = i);
// datas.forEach(function(data, i){
//     datas[i] = i + 1;
// });
// datas.filter(data => data % 2 == 0).forEach(data => console.log(data));

// 한글을 정수로 변경
// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "공공이사".split("");
// let result = input.map(input => hangle.indexOf(input)).join("");

// console.log(parseInt(result));


// 정수를 한글로 변경
// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "1024".split("");
// let result = input.map(input => hangle[input]).join("");

// console.log(result);

// while(input != 0){
//     result = hangle[input % 10] + result;
//     input = parseInt(input / 10);
// }

// console.log(result);

// 1~100까지 합 출력
// let datas = new Array(100).fill(0).map((data, i) => i + 1);
// let result = datas.reduce((variable, data) => variable + data);
// console.log(result);