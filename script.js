roll_no = parseInt(prompt("Enter Roll No"));
console.log("Roll Number : "+roll_no);
student_name = prompt("Enter Name");
console.log("Name : ",student_name);
mark = parseInt(prompt("Enter Mark"));
console.log("Student Mark : "+mark);
if(mark > 90){
    console.log("A Grade");
}
else if(mark > 80){
    console.log("B Grade");
}
else if(mark > 60){
    console.log("C Grade");
}
else if(mark == 50){
    console.log("just pass");
}
else{
    console.log("Fail");
}
