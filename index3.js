function app(img1, name, li1,li2,li3,li4,li5,li6,li7,li8,li9,li10,li11,li12) {
        const cart = document.querySelector('.root2');
        const h1 = document.querySelector('.h1')
        const id = document.createElement('div')
        const img = document.createElement('img')
        const cartText = document.createElement('div')
        const h2 = document.createElement('h2')
        const ul = document.createElement('ul')
        const l1 = document.createElement('li')
        const l2 = document.createElement('li')
        const l3 = document.createElement('li')
        const l4 = document.createElement('li')
        const l5 = document.createElement('li')
        const l6 = document.createElement('li')
        const l7 = document.createElement('li')
        const l8 = document.createElement('li')
        const l9 = document.createElement('li')
        const l10 = document.createElement('li')
        const l11 = document.createElement('li')
        const l12 = document.createElement('li')
        const span = document.createElement('span')
        const button = document.createElement('button');
        cart.appendChild(id)
        // mean.style.display = 'none'
        // new_root.style.display = 'block'
        // new_root.appendChild(id)
        // h1.innerText = 'welcome to our shoping cart'
        id.setAttribute('class', 'one_root')
        id.appendChild(img)
        img.setAttribute('id', 'iimm')
        img.src = img1
        id.appendChild(cartText)
        cartText.setAttribute('class', 'cartText')
        cartText.appendChild(h2)
        h2.setAttribute('class', 'cart_note')
        h2.innerText = name
        cartText.appendChild(l1)
        l1.appendChild(span)
        span.innerText = li1
        cartText.appendChild(l2)
        l2.innerText = li2
        cartText.appendChild(l3)
        l3.innerText = li3
        cartText.appendChild(l4)
        l4.innerText = li4
        cartText.appendChild(l5)
        l5.innerText = li5
        cartText.appendChild(l6)
        l6.innerText = li6
        cartText.appendChild(l7)
        l7.innerText = li7
        cartText.appendChild(l8)
        l8.innerText = li8
        cartText.appendChild(l9)
        l9.innerText = li9
        cartText.appendChild(l10)
        l10.innerText = li10
        cartText.appendChild(l11)
        l11.innerText=li11
        cartText.appendChild(l12)
        l2.innerText =li12

        cartText.appendChild(button)
        button.innerText = 'pay'
        button.setAttribute('class', 'cart_btn')
        }
export default app