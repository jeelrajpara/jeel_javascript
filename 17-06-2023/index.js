let obj1={
    name:"jeel",
    uid:217,
    college:{
        deg:"B.Tech",
        location:"Silver oak university",
    },
    calculateAge:function(){
        return 19;
    },
    joiningDate: new Date()
}

// let obj2=Object.assign({},obj1);
// let obj2={...obj1}
let obj2=JSON.parse(JSON.stringify(obj1))
obj2.name="hello";
obj2.deg="+C.E";
console.log(obj1);
console.log(typeof(obj1.joiningDate));
console.log(obj2);
console.log(typeof(obj2.joiningDate));