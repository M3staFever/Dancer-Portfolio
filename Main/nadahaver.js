var str = "amigo";

/*var rvs = str.split("").reverse().join("");

console.log(rvs);*/

var arr;

var len = str.length;

for(int i=0; i < len; i++){
	
	var arr[i] = str.charAt((str.length-1)-i);
}

arr.toString();

console.log(arr);