for (let i = 1; i <= 10; i++) {
    let ism = prompt('ism kiriting', 'name')
    let age = +prompt('yosh kiriting', '35')

    const abyekt = {

        name: ism,
        age: age
    }
    console.log(`${i} foydalanuvchi
sizning ismingiz ${abyekt.name}
sizning yoshingiz ${abyekt.age}`);
}


allprice = 0
for (const key in cartObj()) {
    const price = cartObj()[key]
    console.log(price);
    for (const k in price) {
      console.log(price[k]);
    }
}
console.log(allprice);





