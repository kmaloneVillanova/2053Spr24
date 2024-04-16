//alert("hello world!");

var hello = "hello!";
console.log("this is good for debugging "+hello);
console.log(document);

function print3Ways() {
    alert("hello!");
    console.log("printing to the console");
    document.write("Hello World!");
}

const a = [1,2,3,4,5];
function funWithArrays() {
    sumArray();
    console.log(sumArray());
    document.write(sumArray());
    document.write("<br>"+findMax());
    document.write(findMin());
}

function findMax() {
    var m=a[0];
    for(let i=1;i<a.length;i++) {
        if (a[i]>m){
            m=a[i];
        }
    }
    return m;
}

function sumArray() {
    let s = 0
    for(let i=0;i<a.length;i++) {
        s+=a[i];
    }
    return s;
}

function first(callBack) {
    callBack();
}

function myCallBackFunction() {
    console.log("this is my callback function");
}

function soManyFunctions() {
    first(myCallBackFunction);

}