//  input[type=text]
const inputText = $("#input").;

//  input[type=button]
const inputButton = $("#submit");

//  tr[id=kid]
const trKid = $("#kid");

//  td[id=kidText] value='아동'
const tdKid = $('#kidText');

//  tr[id=teen]
const trTeen = $("#teen");

//  td[id=teen] value='청소년'
const tdTeen = $('#teenText')

//  tr[id=adult] 
const trAdult = $("#adult");

//  td[id=adultText] value='성인'
const tdAdult = $("#adultText");

//  {trKid, trTeen, trAdult}
const arTrs = $("tbody tr");

// const trs = { trKid, trTeen, trAdult };
// with (console) {
//     log(tdKid.innerHTML);
// }

inputButton.addEventListener("click", () => {
    let content = inputText.value;
    arTrs.forEach(tr => tr.css('background-color', 'rgb(255,255,255)'));
    // trKid.style.backgroundColor = 'rgb(255,255,255)';
    // trTeen.style.backgroundColor = 'rgb(255,255,255)';
    // trAdult.style.backgroundColor = 'rgb(255,255,255)';
    tdKid.value('아동');
    tdTeen.value = '청소년';
    tdAdult.value = '성인';
    
    switch (content) {
        case '아동':
            trKid.css('background-color','#ef5350');
            tdKid.innerHTML = "★아동"
            // tdTeen.innerHTML = '청소년';
            // tdAdult.innerHTML = '성인';
            break;
        case '청소년':
            trTeen.css('background-color','#ef5350');
            tdTeen.innerHTML = '★청소년';
            // tdKid.innerHTML = '아동';
            // tdAdult.innerHTML = '성인';
            break;
        case '성인':
            trAdult.css('background-color','#ef5350');
            tdAdult.innerHTML = '★성인';
            // tdKid.innerHTML = '아동';
            // tdTeen.innerHTML = '청소년';
            break;
        default:
            alert("다시 시도해주세요");
            inputText.value = "";
    }
});