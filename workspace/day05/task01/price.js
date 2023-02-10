//  input[type=text]
const inputText = document.querySelector("#input");

//  input[type=button]
const inputButton = document.querySelector("#submit");

//  tr[id=kid]
const trKid = document.querySelector("#kid");

//  td[id=kidText] value='아동'
const tdKid = document.querySelector('#kidText');

//  tr[id=teen]
const trTeen = document.querySelector("#teen");

//  td[id=teen] value='청소년'
const tdTeen = document.querySelector('#teenText')

//  tr[id=adult] 
const trAdult = document.querySelector("#adult");

//  td[id=adultText] value='성인'
const tdAdult = document.querySelector("#adultText");

//  {trKid, trTeen, trAdult}
const arTrs = document.querySelectorAll("tbody tr");

// const trs = { trKid, trTeen, trAdult };
// with (console) {
//     log(tdKid.innerHTML);
// }

inputButton.addEventListener("click", () => {
    let content = inputText.value;
    arTrs.forEach(tr => tr.style.backgroundColor = 'rgb(255,255,255)');
    // trKid.style.backgroundColor = 'rgb(255,255,255)';
    // trTeen.style.backgroundColor = 'rgb(255,255,255)';
    // trAdult.style.backgroundColor = 'rgb(255,255,255)';
    tdKid.innerHTML = '아동';
    tdTeen.innerHTML = '청소년';
    tdAdult.innerHTML = '성인';

    switch (content) {
        case '아동':
            trKid.style.backgroundColor = '#ef5350';
            tdKid.innerHTML = "★아동"
            // tdTeen.innerHTML = '청소년';
            // tdAdult.innerHTML = '성인';
            break;
        case '청소년':
            trTeen.style.backgroundColor = '#ef5350';
            tdTeen.innerHTML = '★청소년';
            // tdKid.innerHTML = '아동';
            // tdAdult.innerHTML = '성인';
            break;
        case '성인':
            trAdult.style.backgroundColor = '#ef5350';
            tdAdult.innerHTML = '★성인';
            // tdKid.innerHTML = '아동';
            // tdTeen.innerHTML = '청소년';
            break;
        default:
            alert("다시 시도해주세요");
            inputText.value = "";
    }
});