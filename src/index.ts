class User {
  
    private _courseCount=1
    readonly city:string="Jaipur"
    constructor(public email:string, public name:string)
    {
        this.email=email;
        this.name=name;
    }
    get getAppleEmail():string{
        return `apple${this.email}`
    }
    get courseCount():number{
        return this._courseCount
    }
    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount=courseNum
    }
}
const hitesh =new User("h@h.com", "hitesh");

let age: number= 20;
 if(age<50)
    age=30



 const enum Size { Small=1, Medium,Large};

 let mySize:Size=Size.Medium;
 console.log(mySize);


 function calculateTax(income:number,taxYear:number):number{
    if(taxYear < 2022)
        return income*1.2;
        return income*1.3;
    
 }

 calculateTax(10_000,2022)

let sayHello : (name:string)=>void;


sayHello =(name)=>{
    console.log(`hello ${name}`)
 }

sayHello('Danny');

let Yellow:(name:string)=>void;

Yellow = (name)=>{
    console.log(name);
}

Yellow("kathan")


interface vechile {
    topSpeed:number;
}

interface Train extends vechile {
    type:'Train';
    carriages:number;
}

interface Plane extends vechile {
    type:'Plane'
    wingSpan:number;
}


type PlaneorTrain= Plane | Train;


function getSpeedRatio(v:PlaneorTrain){
   if(v.type==="Train"){
    return v.topSpeed/v.carriages;
   }

   return v.topSpeed/v.wingSpan
    
}

let bigTrain:Plane={
    type:'Plane',
    topSpeed:100,
    wingSpan:25,


}


console.log(getSpeedRatio(bigTrain));