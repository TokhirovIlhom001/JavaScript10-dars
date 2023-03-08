



let stocks = {
    menu : ['Burger','Hotdog','Lavash','Donar'],
    masaliqlar : ['tovuq','gosht','kolbasa'],
    pishirish : ['mangal','pech'],
    taksi : ['yandex','xususiy'],
    joylashuv : ['Chilonzor 5 minut', 'Orikzor 15 minut', 'Amerika ozin pishirib yegin'],
    tolov : ['online', 'naqt']
    
};


let order = (product) => {
    console.log('Evosga buyurtma');
    setTimeout(product,1000)
};

let product = () => {
    setTimeout(() => {
        console.log('Xizmat korsatish');
        setTimeout(() => {
            console.log(' Burger, Hotdog, Lavash, Donar');
            setTimeout(() => {
                console.log(`${stocks.menu[0]} tanlandi`);
                setTimeout(() => {
                    console.log('tovuqli,goshtli,kolbasali');
                    setTimeout(() => {
                        console.log(`${stocks.masaliqlar[0]}', 'sizning tanlovingiz`);
                        setTimeout(() => {
                            console.log('mangal,pech');
                            setTimeout(() => {
                                console.log(`${stocks.pishirish[0]}', 'pishirish usuli`);
                                setTimeout(() => {
                                    console.log('pishish vaqti 15 minut');
                                    setTimeout(() => {
                                        console.log('Yetkazg berish');
                                        setTimeout(() => {
                                            console.log(`${stocks.taksi[0]}, 'yetkazish turi'`);
                                            setTimeout(() => {
                                                console.log(`${stocks.joylashuv[0]}`,'yetib boradi');
                                                setTimeout(() => {
                                                    console.log(`${stocks.tolov[0]}`, 'tolaysiz');
                                                    setTimeout(() => {
                                                        console.log('Barchasi uchun raxmat');
                                                    },2000)
                                                },1500)
                                            },1000)
                                        },1000)
                                    },700)
                                },1000)
                            },1000)
                        },2000)
                    },1500)
                },1500)
            },1500)
        },1000)
    }, 2000)
};


order(product)