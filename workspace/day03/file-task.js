// 상품명, 가격, 재고를 JS객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.

/* 파일 시스템 */
let file = require('fs');

/* 프로토타입 (굳이) 선언 */
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

/* 객체 생성 */
let products = [
    new Product('인형', 3000, 16),
    new Product('가방', 9000, 26),
    new Product('모자', 5000, 6)
]

/* JSON형식으로 변환 */
let productJSON = JSON.stringify(products);

/* 파일 쓰기 */
// file.writeFile('product.json', productJSON, 'utf-8', error => console.log(error ? error : "성공!"));

/* 파일 읽기 */
// file.readFile('product.json', 'utf-8', (error, content) => console.log(error ? error : JSON.parse(content)));
