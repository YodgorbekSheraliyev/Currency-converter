const url = 'https://api.frankfurter.app/currencies';
const currency = document.querySelectorAll('.currency');
let input = document.getElementById('input');
let btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    let curr1 = currency[0].value;
    let curr2 = currency[1].value;

    let inputValue = input.value;
    
    if(curr1 === curr2){
        alert("Choose different values")
    }
    convert(curr1, curr2, inputValue)
})


fetch(url).then(response => response.json()).then((data) => dropdown(data)).catch(error =>console.error(error));

function dropdown(res){
    let curr = Object.entries(res);

    for(let i=0; i<=curr.length; i++){

        let opt = `<option value="${curr[i][0]}">${curr[i][1]}</option>}`;

        currency[0].innerHTML += opt;
        currency[1].innerHTML += opt;
    }
}

function convert(curr1, curr2, inputValue){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${input.value}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value = Object.values(data.rates)
    // console.log(data.rates);
  });
}
