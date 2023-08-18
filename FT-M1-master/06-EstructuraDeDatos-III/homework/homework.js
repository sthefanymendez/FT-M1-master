'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
this.value = value
this.right = null
this.left = null
}

BinarySearchTree.prototype.insert = function(value){

let newTree = new BinarySearchTree(value)
if(value <= this.value){
   if(!this.left){
      this.left = newTree
   } else {
      this.left.insert(value)
   }
} else {
   if(!this.right) this.right = newTree
   else this.right.insert(value)
}

}

BinarySearchTree.prototype.contains = function(value){

   if(this.value === value) return true
   if(this.value < value) {
      if(this.right) return this.right.contains(value)

   } else { 
      if(this.left) return this.left.contains(value)
     }
   return false
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
      if(order === "pre-order") cb(this.value)
      if(this.left) this.left.depthFirstForEach(cb,order)
      if(!order || order === "in-order") cb(this.value)
      if(this.right) this.right.depthFirstForEach(cb,order)
      if(order === "post-order") cb(this.value)
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr=[]){
   cb(this.value)
   if(this.left) arr.push(this.left)
   if(this.right) arr.push(this.right)
   if(arr.length) arr.shift().breadthFirstForEach(cb, arr)
}

BinarySearchTree.prototype.size = function(){
   if(!this.right && !this.left) return 1
   if(!this.right && this.left) return 1 + this.left.size()
   if(this.right && !this.left) return 1 + this.right.size()
   return 1 + this.left.size() + this.right.size()
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
