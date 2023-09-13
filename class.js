class Person {
    constructor(name,mobilenumber,email,city){
        this.name=name;
        this.mobilenumber=mobilenumber;
        this.email=email;
        this.city=city;
    }
    getpersondetails(){
        console.log("Name          :",this.name);
        console.log("Mobile Number :",this.mobilenumber);
        console.log("Email         :",this.email);
        console.log("City          :",this.city);
    }
}
let person1=new Person("Dhanasekaran",123214141,"xyz@gmail.com","Chennai")
person1.getpersondetails();
let person2=new Person("Sharu",232214141,"abc@gmail.com","Madurai")
person2.getpersondetails();

