const labels=document.querySelectorAll('.form-control label')

labels.forEach(label => {
    laels.innerHTML = label.innerText
    .split('')
    .map((letter,idx) => `<span>${letter}</span>`)
    .join('')

})