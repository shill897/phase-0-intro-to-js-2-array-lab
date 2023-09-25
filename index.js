const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {


    cats.push(name)


}
function destructivelyPrependCat(name) {

    cats.unshift(name)
}

function destructivelyRemoveLastCat() {

    cats.pop()
}

function destructivelyRemoveFirstCat() {

    cats.shift()
}

function appendCat(name) {
    
    const newArray = cats.slice();
    
    newArray.push(name);
  
    return newArray;
  }

function  prependCat(name) {

    const newArray = cats.slice(name) ;

    newArray.unshift(name) ;

    return newArray ;

}

function removeLastCat() {

    const newArray = cats.slice() ;

    newArray.pop() ;

    return newArray ;
}

function removeFirstCat() {

    const newArray = cats.slice() ;

    newArray.shift() ;

    return newArray ;
}


  
