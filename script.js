const body = document.querySelector('body')
const content = document.createElement('content')
const figure = document.createElement('figure')
const img = document.createElement('img')
const figcaption = document.createElement('figcaption')
const div_1 = document.createElement('div')
const div_2 = document.createElement('div')
const div_3 = document.createElement('div')
const div_4 = document.createElement('div')
content.setAttribute('id', 'content')
img.setAttribute('id','logo')
img.setAttribute('src','./image/logo2.jpg')
div_1.setAttribute('class','flower')
div_2.setAttribute('class','flower')
div_3.setAttribute('class','flower')
div_4.setAttribute('class','flower')

figcaption.innerText = 'Life FLOWERS'
div_1.innerHTML = '<p>Rosa do deserto</p>'
div_2.innerHTML = '<p>Bromélia</p>'
div_3.innerHTML = '<p>Crisântemo</p>'
div_4.innerHTML = '<p>Hibisco</p>'

body.appendChild(content)
content.appendChild(figure)
figure.appendChild(img)
figure.appendChild(figcaption)
content.appendChild(div_1)
content.appendChild(div_2)
content.appendChild(div_3)
content.appendChild(div_4)