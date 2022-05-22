var notaMensal = document.getElementById("notamensal");
const btn = document.getElementById('botao');

function CaucularNota(m,a,t){
    m *= 0.4;
    a *= 0.1;
    t *= 0.5;
    sum = m + a + t
    console.log(sum.toFixed(2));
}
if(btn){
    btn.addEventListener("click",function(e){
        e.preventDefault();
        const notaMensal = document.querySelector('#notamensal').value;
        console.log(value);
    });
}

console.log(btn)