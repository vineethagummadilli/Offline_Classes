console.log('Program is started');
try{
    // greet(); // Reference Error
    //let str = null; // Type Error
   //console.log(str.toUpperCase());
   //let studentName = 'Rajan'; // SyntaxError:
    console.log(empName);
}
catch (e) {
    throw new Error('Emp name is not Defined');
}
finally {
    console.log('Iam from finally block');
}
console.log('Program is Ended');