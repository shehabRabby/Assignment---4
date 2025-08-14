function  onlyCharacter( str ) {
    if( typeof str !== 'string'){
        return 'Invalid';
    }
        const removeSpace = str.toUpperCase().replace(/\s+/g,'');
        return removeSpace;
}
console.log(onlyCharacter("Serv er :  : Do wn"));

