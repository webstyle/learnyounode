var pro = process.argv;
var mul = 0;

for (var i = 2; i < pro.length; i++) {
  var num = +pro[i];
  mul += num;
}

console.log(mul);
