//1. Menyusun barisan bintang

    var rows1 = 5;

    for (i = 1; i <= rows1; i++) {
        console.log ('*')
    }

    console.log('\n')

//2. Menyusun barisan bintang dengan nested looping

    var rows2 = 5;

    for (i = 1; i <= rows2; i++) {
        var star = '*';
        for (j = 1; j <= rows2; j++) {
            star = star + '*';        
            }
        console.log (star)
    }

    console.log('\n')

//3. Menyusun barisan tangga bintang dengan nested looping

    var rows3 = 5;
    var star = '';

    for (i = 1; i <= rows3; i++) {
        for (j = 1; j <= rows3; j += rows3) {
            star = star + '*';        
            }
        console.log (star)
    }