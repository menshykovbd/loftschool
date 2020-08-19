/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  let arr2 = [];
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
    arr2[i] = array[i];
  }
  return arr2;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial = array[0]) {
  let prev = initial;

  for (let i = 0; i < array.length; i++) {
    prev += array[i];
    fn(initial, array[i], i, array);
  }
  return prev;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  let arr = [];
  for(let name in obj) {
    arr.push(name.toLocaleUpperCase());
  }
  return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
  let newArr = [];

  if (to > array.length){
    to = array.length;
  } else if (to < -array.length-1){
    to = -array.length-1;
  }

  if(to < 0 && from < 0){
    for(let i = from + array.length; i > to + array.length; i--){
      newArr.push(array[i]);
    }
  } else {
    for(let i = from; i < to; i++){
      newArr.push(array[i]);
    }
  }  

  return newArr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
