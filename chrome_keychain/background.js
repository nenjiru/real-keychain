function getValues( list ){
    console.log( list );
    for( var i in list ){
        list[i] = getValue( i , list[i] );
    }

    return localStorage['USERNAME'];

    return list ;
}

function getValue( name , def ){
    if( !localStorage[ name ] ){
        localStorage[ name ] = def;
    }
    return localStorage[name];
}
