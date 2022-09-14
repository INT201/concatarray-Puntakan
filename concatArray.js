const { template } = require('@babel/core')

function concatArray(array1, array2) {
  var a1 = new Array()
  a1 = array1
  var a2 = new Array()
  a2 = array2
  
  if (a1 === null || a1 === undefined && a2 === null || a2 === undefined){
    return undefined
  }
  else if(a1 === null || a1 === undefined || a2 === null || a2 === undefined || a1.length === 0 || a2.length === 0){
    if (a1 === null){
      return a2
    }
    else if (a1 === undefined){
      return a2
    }
    else if (a2 === null){
      return a1
    }
    else if (a2 === undefined){
      return a1
    }
    else if (a1.length == a2.length){
      return []
    } 
    else if (a1.length > a2.length){
      return a1
    }
    else if (a1.length <  a2.length){
      return a2
    }
  }
  else {
    return a1.concat(a2)
  }
}
module.exports = concatArray
