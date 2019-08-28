let nama = 'Zero';
let peran = 'Penyihir';

if (nama === 'Mikael' && peran === '') {
    console.log ('Halo ' + nama +', pilih peranmu untuk memulai game!')

} else if (nama === 'Nina' && peran === 'Ksatria') {
    console.log ('Selamat datang di Dunia Proxytia, Nina')
    console.log ('Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!')

} else if (nama === 'Danu' && peran === 'Tabib') {
    console.log ('Selamat datang di Dunia Proxytia, Danu')
    console.log ('Halo Tabib Danu, kamu akan membantu temanmu yang terluka.')

} else if (nama === 'Zero' && peran === 'Penyihir') {
    console.log ('Selamat datang di Dunia Proxytia, Zero')
    console.log ('Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!')

} else {
    console.log ("Nama harus diisi!")
}


/*
if (nama === 'Mikael', 'Nina', 'Danu', 'Zero' && peran === '') {
    console.log ('Halo ' + nama +', pilih peranmu untuk memulai game!') {

} else if (nama === 'Mikael', 'Nina', 'Danu', 'Zero' && peran === 'Ksatria') {
    console.log ('Selamat datang di Dunia Proxytia, ' + nama)
    console.log ('Halo ' + peran + nama + ', kamu dapat menyerang dengan senjatamu!')

} else {
    console.log ("Nama harus diisi!")
}
*/