const btn1= document.querySelector('#btn1');
const btn2= document.querySelector('#btn2');
const btn3= document.querySelector('#btn3');
const btn4= document.querySelector('#btn4');
const btn5= document.querySelector('#btn5');
const btn6= document.querySelector('#btn6');
const btn7= document.querySelector('#btn7');
const btn8= document.querySelector('#btn8');
const btn9= document.querySelector('#btn9');
const btn10= document.querySelector('#btn10');
const btn11= document.querySelector('#btn11');
const btn12= document.querySelector('#btn12');
const btn13= document.querySelector('#btn13');
const btn14= document.querySelector('#btn14');
const btn15= document.querySelector('#btn15');
const btn16= document.querySelector('#btn16');
const btn17= document.querySelector('#btn17');
const btn18= document.querySelector('#btn18');
const btn19= document.querySelector('#btn19');
const btn20= document.querySelector('#btn20');
const btn21= document.querySelector('#btn21');
const btn22= document.querySelector('#btn22');
const btn23= document.querySelector('#btn23');
const btn24= document.querySelector('#btn24');
const btn25= document.querySelector('#btn25');
const btn26= document.querySelector('#btn26');
const btn27= document.querySelector('#btn27');
const num_cart = document.querySelector('.num_cart');
// btn1.addEventListener("click",()=>{
//     num_of_cart()
    
//     btn1.style.backgroundColor = 'green'
//     app(product[6].img1, product[6].name, product[6].li1, product[6].li2, product[6].li3, product[6].li4, product[6].li5, product[6].li6, product[6].li7, product[6].li8, product[6].li9, product[6].li10, product[6].li11, product[6].li12)    // app('shopping (1).webp','Apple iPhone 15 Pro 128GB Single Sim')

    

// });
btn2.addEventListener("click", ()=>{
    num_of_cart()
    btn2.style.backgroundColor = 'green'
    btn2.innerText='-'

});
btn3.addEventListener("click", ()=>{
    num_of_cart()
    btn3.style.backgroundColor = 'green'
    btn3.innerText='-'

});
btn4.addEventListener("click", () => {
    num_of_cart()
    btn4.style.backgroundColor = 'green'
    btn4.innerText = '-'

});
btn5.addEventListener("click", ()=>{
    num_of_cart()
    btn5.style.backgroundColor = 'green'
    btn5.innerText='-'

});
btn6.addEventListener("click", ()=>{
    num_of_cart()
    btn6.style.backgroundColor = 'green'
    btn6.innerText='-'

});
btn7.addEventListener("click", ()=>{
    num_of_cart()
    btn7.style.backgroundColor = 'green'
    btn7.innerText='-'

});
btn8.addEventListener("click", ()=>{
    num_of_cart()
    btn8.style.backgroundColor = 'green'
    btn8.innerText='-'

});
btn9.addEventListener("click", ()=>{
    num_of_cart()
    btn9.style.backgroundColor = 'green'
    btn9.innerText='-'

});
btn10.addEventListener("click", () => {
    num_of_cart()
    btn10.style.backgroundColor = 'green'
    btn10.innerText = '-'

});
btn11.addEventListener("click", ()=>{
    num_of_cart()
    btn11.style.backgroundColor = 'green'
    btn11.innerText='-'

});
btn12.addEventListener("click", ()=>{
    num_of_cart()
    btn12.style.backgroundColor = 'green'
    btn12.innerText='-'

});
btn13.addEventListener("click", ()=>{
    num_of_cart()
    btn13.style.backgroundColor = 'green'
    btn13.innerText='-'

});
btn14.addEventListener("click", ()=>{
    num_of_cart()
    btn14.style.backgroundColor = 'green'
    btn14.innerText='-'

});
btn15.addEventListener("click", () => {
    num_of_cart()
    btn15.style.backgroundColor = 'green'
    btn15.innerText = '-'

});
btn16.addEventListener("click", () => {
    num_of_cart()
    btn16.style.backgroundColor = 'green'
    btn16.innerText = '-'

});
btn17.addEventListener("click", ()=>{
    num_of_cart()
    btn17.style.backgroundColor = 'green'
    btn17.innerText='-'

});
btn18.addEventListener("click", ()=>{
    num_of_cart()
    btn18.style.backgroundColor = 'green'
    btn18.innerText='-'
});
btn19.addEventListener("click", ()=>{
    num_of_cart()
    btn19.style.backgroundColor = 'green'
    btn19.innerText='-'
})
btn20.addEventListener("click", ()=>{
    num_of_cart()
    btn20.style.backgroundColor = 'green'
    btn20.innerText='-'
})
btn21.addEventListener("click", ()=>{
    num_of_cart()
    btn21.style.backgroundColor = 'green'
    btn21.innerText='-'
})
btn22.addEventListener("click", ()=>{
    num_of_cart()
    btn22.style.backgroundColor = 'green'
    btn22.innerText='-'
})
btn23.addEventListener("click", ()=>{
    num_of_cart()
    btn23.style.backgroundColor = 'green'
    btn23.innerText='-'
})
btn24.addEventListener("click", ()=>{
    num_of_cart()
    btn24.style.backgroundColor = 'green'
    btn24.innerText='-'
})
btn25.addEventListener("click", ()=>{
    num_of_cart()
    btn25.style.backgroundColor = 'green'
    btn25.innerText='-'
})
btn26.addEventListener("click", ()=>{
    num_of_cart()
    btn26.style.backgroundColor = 'green'
    btn26.innerText='-'
})
btn27.addEventListener("click", ()=>{
    num_of_cart()
    btn27.style.backgroundColor = 'green'
    btn27.innerTe2btn2t='-'
})
function num_of_cart() {
    function sum(a,b){
        return a+b
    }
    let i = 0
    i++
    num_cart.innerText += i
}
const button =document.querySelector('.button')
const btnlightmode =document.querySelector('.btnlightmode');
const btndarkmode =document.querySelector('.btndarkmode');
const body =document.querySelector(".body")
const link1 =document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3= document.querySelector('#link3')
const link4= document.querySelector('#link4')
const link5= document.querySelector('#link3')
const link_link1 = document.querySelector('#link_link1')
const link_link2 = document.querySelector('#link_link2')
const link_link3= document.querySelector('#link_link3')
const link_link4 = document.querySelector('#link_link4')
button.addEventListener("click",()=>{
    
    if (body.style.backgroundColor === 'white'  ){
        body.style.backgroundColor = 'hwb(240 0% 97% / 0.911)'
        btndarkmode.style.display = 'none'
        btnlightmode.style.display = 'block'
        button.style.backgroundColor = 'black'
        link1.style.color= 'white'
        link2.style.color = 'white'
        link3.style.color = 'white'
        link4.style.color = 'white'
        link5.style.color = 'white'
        link_link1.style.color='black'
        link_link2.style.color = 'black'
        link_link3.style.color = 'black'
        link_link4.style.color = 'black'
        h4.style.backgroundColor = 'blue'
    }else{
        body.style.backgroundColor = 'white'
        btnlightmode.style.display = 'none'
        btndarkmode.style.display = 'block'
        button.style.backgroundColor ='white'
        link1.style.color = 'black'
        link2.style.color = 'black'
        link3.style.color = 'black'
        link4.style.color = 'black'
        link5.style.color = 'black'
        link_link1.style.color = 'white'
        link_link2.style.color = 'white'
        link_link3.style.color = 'white'
        link_link4.style.color = 'white'
        menubutton.style.backgroundColor ='white'
    }
})



// import add from "/index2.js";
// console.log(add(2, 6));
//create the shoping cart
function app(img1, name, li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11, li12 ,img2){
    if (mean.style.display === 'block') {
        
        const h1 = document.querySelector('.h1')
        const id = document.createElement('div')
        const img = document.createElement('img')
        const iMg = document.createElement('img')
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
        cart.src = 'cart1.jpg'
        mean.style.display = 'none'
        new_root.style.display = 'block'
        new_root.appendChild(id)
        h1.innerText = 'welcome to our shoping cart'
        id.setAttribute('class', 'one_root')
        id.appendChild(img)
        img.setAttribute('id', 'iimm')
        img.src =img1
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
        l11.innerText = li11
        cartText.appendChild(l12)
        l12.innerText =li12
        id.appendChild(iMg)
        iMg.setAttribute('id', 'iimm')
        iMg.src = img2
        cartText.appendChild(button)
        button.innerText='pay'
        button.setAttribute('class','cart_btn')
    } else {
        const h1 = document.querySelector('.h1')
        cart.src = 'cart.jpg'
        mean.style.display = 'block'
        new_root.style.display = 'none'
        h1.innerText = 'looking for the best phones we have it here just for you'
    }
}
const cart = document.querySelector('.cart');
const mean = document.querySelector('.mean')
const new_root = document.querySelector('.new_root')

// makeing the function for the Media
const menubutton = document.querySelector('#menu-button');
const main = document.querySelector('.main');
const h4 = document.querySelector('.h4');
menubutton.addEventListener('click',()=>{
    if(h4.style.display === 'none'){
        main.style.display = 'none'
        h4.style.display = 'block'
        menubutton.style.transform= 'translateY(220px)'
    }else{
        main.style.display = 'block'
        h4.style.display = 'none'
        menubutton.style.transform = 'translateY(0px)'
    }
    
})

// create the produces for shoping cart


const product = [
    {
        img1: 'apple-iphone-15-plus-6gb-256gb-5g.jpg',
        name: 'Apple iPhone 15 Plus 6GB+256GB 5G ',
        li1: 'Availability: In Stock',
        li2: 'SKU: 302442',
        li3: 'Apple iPhone 15 Plus Features',
        li4: 'Network: 5G',
        li5: 'Display: 6.7-Inch',
        li6: 'Camera: 48MP',
        li7: 'Battery: 3274 mAh',
        img2: 'apple-iphone-15-plus-6gb-256gb-5g.jpg'


    },
    {
        img1: 'freeyond-m5a-8gb-256gb.webp',
        name: 'freeyond M5a 8GB+256GB',
        li1: '₦140,600.00',
        li2: 'Availability: In Stock',
        li3: 'Freeyond M5a Key Features',
        li4: 'Sim: Dual SIM',
        li5: 'Network: LTE',
        li6: 'Display: 6.6 inches',
        li7: 'Camera: 50MP',
        li8: 'Battery: Li-Po 5000 mA',
        img2: 'freeyond-m5a-8gb-256gb.webp'

    },
    {
        img1: 'honor-x8a-8gb-128gb.jpg',
        name: 'Honor X8a 8GB+128GB',
        li1: '₦246,800.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 302100',
        li4: 'Network: GSM / HSPA',
        li5: 'Sim: Dual SIM',
        li6: 'Memory: 128GB 4GB RAM',
        li7: 'Display: 6.74 inches',
        li8: 'Camera (Rear): v  MP',
        li9: 'Battery: Li-Po 5000  mAh',
        img2: 'honor-x8a-8gb-128gb.jpg'
    },
    {
        img1: 'infinix-note-12-pro-5g-x671b-128gb-8gb.png',
        name: 'INFINIX NOTE 12 PRO 5G X671B 128GB+8GB',
        li1: '₦197,400.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 90007',
        li4: 'INFINIX NOTE 12 PROS (5G)',
        p: `The NOTE 12 PRO has an intelligent function that can seamlessly and automatically switch between 5G/4G networks,
                reduce
                power consumption, and improve the battery life of the phone. It comes with a Dual-channel network acceleration
                technology that allows you to enjoy dual-network anytime, anywhere. Advanced transistor technology, resulting in
                lower
                power consumption and more powerful performance`,
        img2: 'infinix-note-12-pro-5g-x671b-128gb-8gb.png'

    },
    {
        img1: 'infinix-smart-8-64gb-4gb-4g (1).webp',
        name: 'Infinix Smart 8 64GB+4GB 4G Infinix Smart 8 64GB+4GB 4G',
        li1: 'Infinix Smart 8 64GB+4GB 4G',
        li2: '₦86,200.00',
        li3: 'Availability: In Stock',
        li4: 'SKU: 302433',
        li5: 'Infinix Smart 8 Features<',
        li6: 'Sim: Dual SIM',
        li7: 'Network: GSM / HSPA / LTE',
        li8: 'Operating System: Android 13',
        li9: 'Display: 6.6 inches',
        li10: 'Battery: Li-Po 5000 mAh',
        li11: 'Camera: 13 MP',
        img2: 'infinix-smart-8-64gb-4gb-4g (1).webp'

    },
    {
        img1: 'shopping (1).webp',
        name: 'Apple iPhone 15 Pro 128GB Single Sim',
        li1: '₦1,670,000.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 302423',
        li4: 'Apple iPhone 15 Pro',
        li5: 'Sim: Single Sim',
        li6: 'Network: 5G',
        li7: 'Camera: 48MP',
        li8: 'Battery: 3274 mAh',
        li9: 'Display: 6.1 inches',
        li10: 'Operating System: iOS 17',
        p: `   Delivery Period: Delivery to locations in Lagos is within 24 hours after payment confirmation. Other states are
                within
                3–5 business days`,
        img2: 'shopping (1).webp'

    },
    {
        img1: 'itel-a04-2gb-32gb.webp',
        name: 'ITEL A04',
        li1: 'ITEL A04 2GB+32GB',
        li2: '₦58,000.00',
        li3: 'Availability: In Stock',
        li4: 'SKU: 302009',
        li5: 'Itel A04 Specifications:',
        li6: 'SIM: Dual Sim',
        li7: 'Network: LTE',
        li8: 'Chipset: UniSoC Spreadtrum SC9832E',
        li9: 'CPU: Quad-core 1.3 GHz Cortex-A53',
        li10: 'Display: 6.3 Inches',
        li11: 'Rear Camera: 5MP Dual AI Rear Camera',
        li12: 'Battery: Non-removable Li-Ion 4000mAh batter',
        img2: 'itel-a04-2gb-32gb.webp'

    },
    {
        img1: 'shopping.webp',
        name: 'ITEL S23 4GB+128GB',
        li1: '₦80,400.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 302109',
        li4: 'Itel S23 Summary',
        li5: 'OS: Android 12',
        li6: 'Network: LTE',
        li7: 'Display: 6.6″HD',
        li8: 'Camera: 50MP',
        li9: 'RAM: 4 Ram',
        li10: 'ROM: 128GB',
        li11: 'Battery: 5000mAh',
        p: 'Processor: Octa-core (2×1.61 GHz Cortex-A75 CPU and 6×1.4 GHz Cortex-A55)',
        img2: 'shopping.webp'

    },
    {
        img1: 'download (1).webp',
        name: 'ITEL A60 2GB+32GB',
        li1: '₦55,000.00',
        li2: 'Availability: Out Of Stock',
        li3: 'SKU: 301812',
        li4: 'ITEL A60',
        p: `'First in class with a 6.6" IPS display, 5000 mAh battery, and dual security of
                fingerprint and face unlock. This piece of art with curved edges is bold in
                every way and has a free-flowing design. Wait no longer and simply select the
                one that best fits your personality.'`,
        img2: 'download (1).webp'
    },
    {
        img1: 'nokia-c21-2gb-32gb.png',
        name: 'Nokia C21 2GB+32GB',
        li1: '₦88,300.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 61203',
        li4: 'Display: 6.52 inches',
        li5: 'Camera: 8 MP',
        li6: 'SIM: Dual SIM',
        li7: 'Battery: Li-Ion 3000mAh, removable',
        name: 'REVIEW ON NOKIA C21',
        p: ` The Nokia C21 is the C20's direct successor. However, both phones have a lot in common. They both, for example,
                have the
                same screen, the same CPU, and are powered by the same battery capacity. The device has a 6.52-inch display on
                the front
                and a dewdrop notch on the top.
                There is now a fingerprint scanner on the back, and single and dual SIM options are available, as with the
                predecessor.
                Bluetooth 4.2, USB 2.0, a 3000mAh battery, and Google's Android 11 (Go Edition) are all standard features.`,
        img2: 'nokia-c21-2gb-32gb.png'

    },
    {
        img1: 'oppo-a58-8gb-128gb.jpg',
        name: 'Oppo A58 8GB+128GB',
        li1: '₦164,900.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 302339',
        li4: 'Oppo A58  Summary',
        li5: 'Network: 4G',
        li6: 'Sim: Dual SIM',
        li7: 'Android 12, ColorOS 12.1',
        li8: 'Camera: 50  MP',
        li9: 'Battery: Li-Po 5000  mAh',
        img2: 'oppo-a58-8gb-128gb.jpg'

    },
    {
        img1: '20pro_predawn_black_1.png',
        name: 'tecno-camon-19-pro-8gb-256gb-ci7n-5g',
        li1: '₦246,800.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 302100',
        li4: 'Network: GSM / HSPA',
        li5: 'Sim: Dual SIM',
        li6: 'Memory: 128GB 4GB RAM',
        li7: 'Display: 6.74 inches',
        li8: 'Camera (Rear): 50 MP',
        li9: 'Battery: Li-Po 5000 mAh',
        img2: '20pro_predawn_black_1.png'

    },
    {
        img1: 'tecno-camon-19-pro-8gb-256gb-ci7n-5g.jpg',
        name: 'TECNO CAMON 19 PRO 8GB+256GB (CI7n) 5G',
        li1: '₦212,800.00₦252,800.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 11343',
        li4: 'Display: 6.8 inches',
        li5: 'Back Camera: 64 MP',
        li6: 'Front Camera: 16 MP',
        li7: 'Battery: Non-Removable Lithium-Polymer 5000 mAh.',
        li8: 'Network: GSM / HSPA/ LTE/ 5G',
        name: 'REVIEW ON CAMON 19 PRO',
        p: `'The Camon 19 Pro has a 6.8" Full HD+ display with a refresh rate of 120 Hz. There is a single punch hole for the
                selfie camera, while the back has a design of diamond coating, mimicking 200 million crystals. The main camera
                setup is in a double ring, but there are three shooters.
                The most impressive feature of this smartphone is its camera technology. It is the first to feature the ISOCELL
                GWB sensor, a 64 MP sensor with a red-green-blue-white color filter. The white is added so that the camera can
                capture up to 30% more light for better night photos. The trio of cameras also has a 50 MP shooter with 2x
                optical zoom for portrait shots.'`,
        img2: 'tecno-camon-19-pro-8gb-256gb-ci7n-5g.jpg'
    },
    {
        img1: 'xiaomi-poco-m4-pro-6gb-128gb.jpg',
        name: 'XIAOMI POCO M4 PRO 6GB+128GB',
        li1: '₦140,000.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 88528',
        li4: 'POCO M4 PRO',
        p: `'POCO M4 Pro has an excellent light sensor that can detect subtle changes in lighting and automatically adjust
                the display to a comfortable brightness. And for the first time, the POCO Series features a 64MP high-resolution
                mainncamera. The triple-camera setup collaborates to meet your creative needs from all angles. FHD+ AMOLED Dot
                Display at 90Hz'`,
        img2: 'xiaomi-poco-m4-pro-6gb-128gb.jpg'

    },
    {
        img1: 'th (9).jpg',
        name: 'Samsung Galaxy S22 5G 8GB+128GB',
        li1: '₦607,000.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 300819',
        p: `'Make nights epic with Nightography our brightest innovation yet. The sensor pulls in more light, the Super Clear
                Glass
                dials down lens flare, and fast-acting AI delivers near-instant intelligent processing. Possesses Google Duo Live
                Sharing for virtual watch parties Bring the crew together with Google Duo*. There, you can watch movies together,
                streaming high-quality video just like in real life. The 4nm processor, our fastest chip yet our fastest, most
                powerful
                chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone
                technology.
                Fast charge that outlasts the day, the battery intelligently adapts to how you use your phone, so it lasts beyond 24
                hours'`,
        img2: 'th (9).jpg'
    },
    {
        img1: 'th (4).jpg',
        name: 'Samsung Galaxy A13 4GB+128GB',
        li1: '₦133,900.00',
        li2: 'Availability: In Of Stock',
        li3: 'SKU: 300911',
        li4: 'Samsung Galaxy A13',
        li5: 'Display: 6.5 inches',
        li6: 'Processor: Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55</li>',
        li7: 'Camera: 50 MP',
        li8: 'Battery: Li-Po 5000 mAh, non-removable',
        li9: 'Network: GSM / HSPA / LTE',
        img2: 'th (4).jpg'
    },
    {
        img1: 'th (3).jpg',
        name: 'samsung Galaxy A54 8GB+128GB 5G',
        li1: '₦509,000.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 301905',
        li4: 'Samsung A54 Summary',
        li5: 'Sim: Single SIM<',
        li6: 'Network: 5g',
        li7: 'Display: 6.4  inches',
        li8: 'Battery: Li-Po 5000 mAh',
        img2: 'th (3).jpg'

    },
    {
        img1: 'samsung-galaxy-s23-ultra-12gb-512gb-1-year-warranty.webp',
        name: 'SAMSUNG GALAXY S23 ULTRA 12GB+512GB',
        li1: '₦990,000.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 301755-1',
        li4: 'GALAXY S23 ULTRA',
        li5: 'Display: 6.8 inches',
        li6: 'Network: 5G',
        li7: 'Camera: 200 MP',
        li8: 'Battery: Li-Ion 5000 mAh',
        li9: 'Chipset: Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm)',
        img2: 'samsung-galaxy-s23-ultra-12gb-512gb-1-year-warranty.webp'

    },
    {
        img1: 'samsung-galaxy-z-flip-5-512gb.webp',
        name: 'Samsung_Galaxy_Z Flip 5 512GB',
        li1: '₦1,367,000.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 3022351',
        li4: 'Samsung Galaxy Z Flip 5 Summary',
        li5: 'Network: 5G',
        li6: 'Display: 6.7',
        li7: 'camera: 12.0 MP',
        li8: 'Battery: 3700mAh',
        li9: 'Chipset: Octa-Core Snapdragon® 8 Gen 2 Mobile Platform',
        img2: 'samsung-galaxy-z-flip-5-512gb.webp'

    },
    {
        img1: 'samsung-galaxy-z-fold-5-1tb.webp',
        name: 'Samsung Galaxy Z Fold 5 1TB',
        li1: '₦2,519,000.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 302244',
        li4: 'Samsung Galaxy Z Fold 5 Summary',
        li5: 'Network: 5G',
        li6: 'Display: 7.6 inches',
        li7: 'Camera: 50  MP',
        li8: 'Battery: 4400mAh',
        li9: 'Chipset: Qualcomm Snapdragon 888',
        img2: 'samsung-galaxy-z-fold-5-1tb.webp'

    },
    {
        img1: 'download (6).webp',
        name: 'TECNO SPARK 10C (KI5K) 128GB+4GB',
        li1: 'price ₦94,900.00',
        li2: 'Availability: In Stock',
        li2: 'SKU: 301829',
        li2: 'SPARK 10C (KI5K)',
        p: `'The Tecno Spark 10C features 4GB RAM / 8GB RAM and 64GB ROM / 128R ROM, a 6.5-inch IPS LCD capacitive touchscreen
                display, Android 12 OS, dual rear & 8MP front cameras, Unisoc Tiger T606 Chipset, Octa-core CPU, and a 5000-mAh
                non-removable Li-Po battery.'`,
        img2: 'download (6).webp'
    },
    {
        img1: 'vivo-v27-5g-8gb-256gb.jpg',
        name: 'Vivo_V27 5G 8GB+256GB',
        li1: '₦359,900.00',
        li2: 'Availability: In Stock',
        li3: 'SKU:302012',
        li4: 'Vivo v27 Summary',
        li5: 'Network: 5G',
        li6: 'Display: 6.78 inches',
        li7: 'Camera: 50  MP',
        li8: 'Battery: Li-Po 4600  mAh<',
        li9: 'Chipset: Qualcomm Snapdragon 888',
        img2: 'vivo-v27-5g-8gb-256gb.jpg'

    },
    {
        img1: 'vivo-y16-4gb-64gb.jpg',
        name: 'VIVO Y16 4GB+64GB',
        li1: '₦114,000.00',
        li2: 'Availability: In Stock',
        li3: 'SKU:301569',
        li4: 'VIVO Y16',
        p: `The Android smartphone Vivo Y16 comes with a 6.51′′ Display screen, MT6765 Helio P35 Chipset, 5000 MAh Battery,
                64 GB
                Storage, and 4 GB RAM are all included.`,
        img2: 'vivo-y16-4gb-64gb.jpg'

    },
    {
        img1: '118566_1689599261.webp',
        name: 'XIAOMI REDMI NOTE 12 PRO (6GB+128GB)',
        li1: '₦217,800.00₦262,800.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 301974',
        li4: 'XIAOMI REDMI NOTE 12 PRO (6GB+128GB)',
        p: `The Xiaomi Redmi Note 12 Pro is the latest smartphone from the renowned Chinese brand, Xiaomi. This device is part of
            the Redmi Note series and offers a mix of mid-range features at an attractive price. It comes with a 6.67-inch
            AMOLED
            screen, offering 1080x2400 resolution (FHD+) and a 120Hz refresh rate for a smooth experience. The brightness can
            reach
            up to 500 cd/m² (typ) and has a 5000000:1 contrast ratio, with HDR10 support. The audio department benefits from
            stereo
            speakers, while the body is made of plastic`,
        img2: '118566_1689599261.webp',
    },
    {
        img1: 'download (5).webp',
        name: 'Home XIAOMI REDMI 12C 4GB+128GB',
        li1: '₦95,300.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 301813',
        li4: 'REDMI 12C',
        p: `XIAOMI REDMI 12C 4GB+128GB XIAOMI REDMI 12C 4GB+128GB
                XIAOMI REDMI 12C 4GB+128GB
                Xiaomi's Redmi 12C Android phone. It's powered by a MediaTek MT6769Z Helio G85 (12nm) processor and a Mali-G52
                MC2 GPU.
                The phone includes 4 GB of RAM and 128 GB of internal storage, which can be expanded with a microSDXC card
                (dedicated
                slot).`,
        img2: 'download (5).webp'

    },
    {
        img1: 'download (2).webp',
        name: 'XIAOMI REDMI A2 PLUS 3GB+64GB',
        li1: '₦68,800.00₦76,800.00',
        li2: 'Availability: In Stock',
        li3: 'SKU: 302200',
        li4: ' A2 Plus Keyword',
        p: `Technical specifications: Snapdragon 660, 6.52 inches display, 3GB RAM, 64GB internal storage, dual 8MP rear
            cameras, 5
            MP front camera, fingerprint scanner, and 5000 mAh battery are all technical specifications of the Xiaomi
            Redmi A2
            Plus.
            Operating system: The Xiaomi Redmi A2 Plus runs on Android 12 (Go edition) operating system.
            Brand: Xiaomi is the brand of the Xiaomi Redmi A2 Plus.
            Camera features: The Xiaomi Redmi A2 Plus has dual 8 MP rear cameras and a 5 MP front camera.
            Battery life: The Xiaomi Redmi A2 Plus has a 5000 mAh battery, which is a feature related to its battery
            life`,
        img2: 'download (2).webp'

    }
]

cart.addEventListener('click', () => {
    app(product[3].img1, product[3].name, product[3].li1, product[3].li2, product[3].li3, product[3].li4, product[3].li5, product[3].li6, product[3].li7, product[3].li8, product[3].li9, product[3].li10, product[3].li11, product[3].li12)    // app('shopping (1).webp','Apple iPhone 15 Pro 128GB Single Sim')
})
btn1.addEventListener("click", () => {
    
    app(product[20].img1, product[20].name, product[20].li1, product[20].li2, product[20].li3, product[20].li4, product[20].li5, product[20].li6, product[20].li7, product[20].li8, product[20].li9, product[20].li10, product[20].li11, product[20].li12,product[20].img2)    // app('shopping (1).webp','Apple iPhone 15 Pro 128GB Single Sim')

    btn1.style.backgroundColor = 'green'


});