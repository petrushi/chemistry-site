function handleClick(e) {
    let target = '#' + e.target.id.split('-')[0]
    let arr = ['#work', '#pastworks', '#diag', '#ind', '#homework', '#practice']
    $target = document.querySelector(target)
    arr.forEach(item => {
        document.querySelector(item).style.display = 'none'
    });
    $target.style.display = 'block';
}
const $worksBtn = document.querySelector('#work-btn')
const $editBtn = document.querySelector('#pastworks-btn')
const $diagBtn = document.querySelector('#diag-btn')
const $indBtn = document.querySelector('#ind-btn')
const $homeworkBtn = document.querySelector('#homework-btn')
const $practiceBtn = document.querySelector('#practice-btn')


$worksBtn.addEventListener('click', handleClick)
$editBtn.addEventListener('click', handleClick)
$diagBtn.addEventListener('click', handleClick)
$indBtn.addEventListener('click', handleClick)
$homeworkBtn.addEventListener('click', handleClick)
$practiceBtn.addEventListener('click', handleClick)