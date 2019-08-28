//1. Melakukan looping menggunakan while

    console.log('LOOPING PERTAMA')

    var i = 0;

    while (i < 20) {
        i += 2; 
        console.log (i + ' - I love coding')
    }

    console.log('LOOPING KEDUA')

    var i = 22;

    while (i > 2) {
        i -= 2; 
        console.log (i + ' - I will become fullstack developer')
    }

    console.log('\n')


//2. Melakukan looping menggunakan for

    console.log('LOOPING PERTAMA')

    var i = 1;

    for (var i = 1; i < 21; i++) {
        console.log (i + ' - I love coding')
    }

    console.log('LOOPING KEDUA')

    var i = 20;

    for (var i = 20; i > 0; i--) {
        console.log (i + ' - I will become fullstack developer')
    }

    console.log('\n')

    
//3. Angka ganjil dan genap

    console.log('LOOPING GANJIL GENAP')

    var i = 1;

    for (var i = 1; i < 101; i++) {
        if (i % 2 === 0) {
            console.log ('GENAP')
        } else {
            console.log ('GANJIL')
        }
    } 

    var i = 1;

    for (var i = 1; i < 101; i+=2) {
        if (i % 3 === 0) {
            console.log (i +' KELIPATAN 3')
        } else {
            
        }
    }
    
    var i = 1;

    for (var i = 1; i < 101; i+=5) {
        if (i % 6 === 0) {
            console.log (i +' KELIPATAN 6')
        } else {
            
        }
    }
    
    var i = 1;

    for (var i = 1; i < 101; i+=9) {
        if (i % 10 === 0) {
            console.log (i +' KELIPATAN 10')
        } else {
            
        }
    } 