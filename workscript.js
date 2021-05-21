const $table = document.querySelector('#work-table')
let rightAnswers = [3, 4, 1, 2, 4, 3, 2, 1, 2, 1, 3, 1, 1, 4, 2, 25, 14, 331, 241]
let work1 = [3, 4, 1, 2, 3, 3, 2, 2, 2, 1, 3, 1, 1, 4, 2, 24, 14, 332, 241]


for (let i = 0; i < rightAnswers.length; i++){
    let score = false
    if (rightAnswers[i] == work1[i]){
        score = true
    }
    score ? $table.innerHTML +=`<tr bgcolor='#90ee90'><td>${i}</td><td>${work1[i]}</td><td>${rightAnswers[i]}</td><td>${+score}</td></tr>` : $table.innerHTML +=`<tr bgcolor='#f08080'><td>${i}</td><td>${work1[i]}</td><td>${rightAnswers[i]}</td><td>${+score}</td></tr>`
}
