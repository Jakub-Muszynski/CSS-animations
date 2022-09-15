const	body = document.querySelector('body')


twitter.addEventListener("mouseover", function () {
    body.classList.add('linked')
},false)

twitter.addEventListener("mouseout", function () {
    body.classList.remove('linked')
}, false)
