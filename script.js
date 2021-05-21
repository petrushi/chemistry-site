function handleClick(e) {
    let target = '#' + e.target.id.split('-')[0]
    let arr = ['#works', '#edit', '#diag']
    $target = document.querySelector(target)
    arr.forEach(item => {
        document.querySelector(item).style.display = 'none'
    });
    $target.style.display = 'block';
}
const $worksBtn = document.querySelector('#works-btn')
const $editBtn = document.querySelector('#edit-btn')
const $diagBtn = document.querySelector('#diag-btn')
const $studTable = document.querySelectorAll('.stud-table')
$worksBtn.addEventListener('click', handleClick)
$editBtn.addEventListener('click', handleClick)
$diagBtn.addEventListener('click', handleClick)

const studs =`Ученик 1 	0,93 	
Ученик 2 	0,82 	
Ученик 3 	0,93 	
Ученик 4 	0,86 	
Ученик 5 	0,86 	
Ученик 6 	0,62 	
Ученик 7 	0,75 	
Ученик 8 	0,68 	
Ученик 9 	0,65 	
Ученик 10 	0,72 	
Ученик 11 	0,62 	
Ученик 12 	0,62 	
Ученик 13 	0,65 	
Ученик 14 	0,75 	
Ученик 15 	0,79 	
Ученик 16 	0,72 	
Ученик 17 	0,58 	
Ученик 18 	0,41 	
Ученик 19 	0,52 	
Ученик 20 	0,34 	
Ученик 21 	0,58 	
Ученик 22 	0,48`
let arr1  = studs.split('\t\n')
let arr2 = []
arr1.forEach(item => arr2.push(item.split(' \t')))

arr2.forEach(stud =>{
    let bg = 'bg-success'
    let ki = +(stud[1]).replace(',', '.');
    if (ki < 0.8) {
        bg = 'bg-warning';
    };
    if (ki < 0.6) {
        bg = 'bg-danger'
    }
    $studTable.forEach(function(table) {
        table.insertAdjacentHTML('beforeend', `<td><a href="work.html">${stud[0]}</a></td>
        <td>${stud[1]}</td>
        <td>
        <div class="progress">
            <div class="progress-bar ${bg}" role="progressbar" style="width: ${ki * 100}%" aria-valuenow="93"
            aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </td>
        </tr>`
)})})
