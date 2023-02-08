// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// function Product(name, price, stock){
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//     this.toJSON = JSON.stringify(this);
// }
// function sum(price, stock){
//     return price * stock;
// }

// let doll = new Product('인형', 3000, 5);
// let backpack = new Product('가방', 9000, 3);
// let hat = new Product('모자', 5000, 6);

// 3개의 Object를 1개의 Array객체에 모두 담는다.
// let objs = new Array(doll, backpack, hat);

// JSON으로 변경시킨다.
// let objJSON = JSON.stringify(objs);
// console.log(objJSON);

// 각 상품별 총 가격을 구한 뒤 출력한다.
// objs.map(e => sum(e.price, e.stock)).forEach(e => console.log(e));

// objs.forEach(e => console.log(e.sum));

// console.dir("=====");
// console.log(JSON.stringify(objs));

// let arSum = new Array();
// objs.forEach(e => {
    //     arSum.push(e.price * e.stock);
    // });
    // console.log(arSum);
    
    // callback 함수를 사용한다.
    // 외부에서는 JSON 데이터가 전달된다.
    // console.log(JSON.stringify(objs));
    
    // ===========================================================================
    // 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
    // function Product(name, price, stock){
    //     this.name = name;
    //     this.price = price;
    //     this.stock = stock;
    //     this.toJSON = JSON.stringify(this);
    // }
    
    // let products = new Array();
    // with(products){
    //     push(new Product('참후레쉬', 1500, 90).toJSON);
    //     push(new Product('막걸리', 1900, 30).toJSON);
    //     push(new Product('돔페리뇽', 2000000, 1).toJSON);
    // }
    
    // console.log(`${products.toString()}`);
        
    // 각 상품별 총 가격을 구한 뒤 출력한다.
    // callback 함수를 사용한다.
    // 외부에서는 JSON 데이터가 전달된다.
// function(products, callback){
//     let totals;
//     products = JSON.parse(products);
//     if(callback){
//         totlas = products.map(product => )
//     }
// }



// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// function Product(name, price, stock){
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//     this.toJSON = JSON.stringify(this);
// }

// // 3개의 Object를 1개의 Array객체에 모두 담는다.
// // JSON으로 변경시킨다.
// let products = new Array(new Product('인형', 3000, 20).toJSON,
// new Product('가방', 50000, 15).toJSON,
// new Product('신발', 90000, 27).toJSON);

// // 각 상품별 총 가격을 구한 뒤 출력한다.
// function getTotal(inputProducts){
//     inputProducts = JSON.parse(inputProducts);
//     inputProducts.map(e => e.price * e.stock).forEach(total => console.log(total));
// }

// getTotal(products);

// // callback 함수를 사용한다.
// // 외부에서는 JSON 데이터가 전달된다.


// // =====================================================================================

// // 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// // 3개의 Object를 1개의 Array 객체에 모두 담는다.
// // JSON으로 변경시킨다.
// function Product(name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
// }

// let products = [
//     new Product('참후레쉬', 1500, 90),
//     new Product('참후레쉬', 1500, 60),
//     new Product('참후레쉬', 1500, 30)
// ];

// let productsJSON = JSON.stringify(products);

// // 각 상품별 총 가격을 구한 뒤 출력한다.
// // callback 함수를 사용한다.
// // 외부에서는 JSON 데이터가 전달된다.
// function getTotals(inputProductsJSON, callback) {
//     let products = JSON.parse(inputProductsJSON);
//     let totals = products.map(product => product.price * product.stock);
//     if(callback){
//         callback(totals);
//     }
//     return totals;
// }

// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});



// JSON으로 변경시킨다.
/* shop.json에 변환된 JSON 형식의 문자열을 작성한다.
shop.json을 읽어 온 뒤 Array 객체로 변환한다.
총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다. */


function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product('참후레쉬', 1500, 90),
    new Product('참이슬', 1500, 60),
    new Product('진로', 1500, 30)
];

let productsJSON = JSON.stringify(products);

var file = require('fs');
var arContent = new Array();
/* shop.json 파일 출력 */
file.writeFile('shop.json', productsJSON, error => console.log(error ? error : "shop.json 출력 성공!"));
/* shop.json 파일 읽기  */
file.readFile('shop.json', 'utf-8', (error, content) => {
    // let files = require('fs');
    if(error){
        console.log(error);
    }else {
        /* shop.json의 형식이 JSON이므로 parse하여 객체화 한다. */
        arContent = JSON.parse(content);
        /*  shop.json에서 읽어온 각 가격과 재고의 합을 Array에 담음 */
        let arInfo = [
            /* 누적 가격 */
            arContent.map(e => e.price).reduce((totalPrice, price) => totalPrice + price),   
        
            /* 누적 재고 */
            arContent.map(e => e.stock).reduce((totalStock, stock) => totalStock + stock)    
        ]
        file.writeFile('sum.json', JSON.stringify(arInfo), 'utf-8', error => console.log(error ? error : "성공!"));
    }
});

// console.log("arInfo: " + arInfo);

/* sum.json 파일 출력 */
// file.writeFile('sum.json', JSON.stringify(arInfo), 'utf-8', error => console.log(error ? error : "성공!"));

/* sum.json 파일 읽기 */
// file.readFile('sum.json', 'utf-8', (error, content) => console.log(error ? error : content));