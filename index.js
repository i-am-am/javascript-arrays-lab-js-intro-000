// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var n = kittens.concat(name)
  return n
}

function prependKitten(name){
  kittens.splice(0, 0, name)
  return kittens
}

function removeLastKitten(){

}

function removeFirstKitten(){

}
