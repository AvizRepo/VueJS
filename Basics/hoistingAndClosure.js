function closure(a,b){
    var x;
    function add(){
        console.log(a+b+x);
    }
    x = 5;
    return add();
}

closure(3,4);
