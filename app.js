let array = [
    {title: "Ruffle Front V-Neck Cardigan", price: "$ 299.99", color: "grey", image: "assets/img/pdp-images/PG.10216885.JJ169XX.PZ-small.jpg", id: 0},
    {title: "Ruffle Front V-Neck Cardigan", price: "$ 299.99", color: "grey", image: "assets/img/pdp-images/PG.10216885.JJ169XX.PZ-small.jpg", id: 0},
    {title: "Ruffle Front V-Neck Cardigan", price: "$ 299.99", color: "grey", image: "assets/img/pdp-images/PG.10216885.JJ169XX.PZ-small.jpg", id: 0},
    {title: "Ruffle Front V-Neck Cardigan", price: "$ 299.99", color: "grey", image: "assets/img/pdp-images/PG.10216885.JJ169XX.PZ-small.jpg", id: 0},
    {title: "Kristina Dam Oak Table With White Marble Top", price: "$ 799.55", image: "assets/img/product1.png", id: 1},
    {title: "Activate Facial Mask and Charcoal Soap ", price: "$ 129.55", image: "assets/img/product3.png", id: 3},
    {title: "Activate Facial Mask and Charcoal Soap ", price: "$ 129.55", image: "assets/img/product3.png", id: 3},
    {title: "Activate Facial Mask and Charcoal Soap ", price: "$ 129.55", image: "assets/img/product3.png", id: 3},
    {title: "Hay - About A Lounge Chair AAL 93", price: "$ 659.55", image: "assets/img/product5.png", id: 5},
    {title: "CH445 Wing Chair on SUITE NY", price: "$ 330.55", image: "assets/img/product7.png", id: 7}
];

console.log('zdraste');

function compressArray(original) {

    const compressed = [];
    const copy = original.slice(0);
    for (let i = 0; i < original.length; i++) {
        let myCount = 0;
        for (let w = 0; w < copy.length; w++) {
            if (JSON.stringify(original[i]) === JSON.stringify(copy[w])) {
                myCount++;
                delete copy[w];
            }
        }

        if (myCount > 0) {
            let a = new Object();
            a.value = original[i];
            a.count = myCount;
            compressed.push(a);
        }
    }

    return compressed;
};

var newArray = compressArray(array);

console.log(newArray);