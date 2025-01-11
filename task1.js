/*task1*/
let arr=[1,2,3,4,5]
document.write(arr.length);
document.write("<br>")

/*task2*/
let array=[1, 2, 3, 4, 5]
for (let element of array){ 
    document.write(element)
}

document.write("<br>")
/*task3*/

let array2=[1, 2, 3, 4, 5]
for (let index in array){ 
    if(index ==array2.length){
        document.write(array2[index-1])
    }
  else{
    document.write(array2[index]+",")  
  }

}
document.write("<br>")

/*task4*/
let array3 = [1, 2, 3, 4, 5]
document.write(array3[1])
document.write("<br>")

/*task5*/
let array5 = [1, 2, 3, 4, 5]
let number = array5.join();
document.write(array5);
document.write("<br>")
/*task6*/
const str = "1, 2, 3, 4, 5"
const st = str.split(","); 

document.write(arr[arr.length - 1]);

/*task7*/
const array7 = Array.of(1, 2, 3);
document.write(array7);