/**
  *
  * Implement a `map` method and any other necessary methods on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */

// Implement a map method and other(if needed) on tree class
// map has one argument which is a mapping funcion and it generates a newTree with result;
//
var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value){
 console.log(value);
 //pushing the values to the roots children
 this.children.push(value);
};

Tree.prototype.map = function(mapping){
//for every root proprty's value, pass it to the cb
for(var key in this){
  mapping(key);
}

};

var root1 = new Tree(1);
console.log(root1);
var branch2 = root1.addChild(2);
console.log(branch2);
var branch3 = root1.addChild(3);
console.log(branch3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var newTree = root1.map(function (value) {
return value * 2;
})
console.log(newTree.value) // 2
console.log(newTree.children[0].value) // 4
console.log(newTree.children[1].value) // 6
console.log(newTree.children[0].children[1].value )// 10
console.log(newTree.children[1].children[1].value) // 14
console.log(root1.value) // still 1






