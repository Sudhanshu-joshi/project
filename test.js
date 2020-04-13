class person{ 
    constructor(name,id){ 
       this.name = name; 
        this.id = id; 
    } 
    add_Address(add){ 
       this.add = add; 
} 
getDetails(){ 
       console.log(`Name is ${this.name},Address is: ${this.add}`); 
    } 
} 
  
let person1 = new person('rahul thakur',25); 
person1.add_Address('chandigarh'); 

person1.getDetails(); 
class Vehicle { 
    constructor(name, maker, engine) { 
      this.name = name; 
      this.maker =  maker; 
      this.engine = engine; 
    } 
    getDetails(){ 
        return (`The Name of the bike is ${this.name}.`) 
    } 
  } 
  
  let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc'); 
  let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc'); 
    
  console.log(bike1.name);     
  console.log(bike2.maker);   
  console.log(bike1.getDetails()); 
 
  class info{ 
    constructor(name){ 
        this.name = name; 
    } 
    //method to return the string 
    toString(){ 
        return (`Name of Person: ${this.name}`); 
    } 
} 
class student extends info{ 
    constructor(name,id){ 
        
        super(name); 
        this.id=id; 
    } 
    toString(){ 
        return (`${super.toString()},Student ID: ${this.id}`); 
    } 
} 
let student1 = new student('Mayank abrol',24); 
console.log(student1.toString()); 