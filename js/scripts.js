function rysujChoinke() {
    for ( i = 0 ; i < 5; i++) {
        var star = ' ';
        for ( n = 0 ; n < i*2-1 ; n++) {
                star += '*';
        }
        console.log(star);
    }
} 
rysujChoinke();