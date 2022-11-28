function studentGrade(grade) 
//this fuction uses if else to find  the grades
	{
	if (grade <= 100) {


		if (grade > 79) {
			console.log(`The grade is A`);
		}
		//if the input is greater than 79 

		else if (grade >= 60) {
			console.log(`The grade is B`);
		} 
		//if the input is greater than 60
		
		else if (grade > 49) {
			console.log(`The grade is C`);
		} 
		//if the input is greater than 49
		
		else if (grade >= 40) {
			console.log(`The grade is D`);
		} 
		//if the  input is greater than 40
		
		else if (grade < 40) {
			console.log(`The grade is E`);
		}
		//if the input is less than 40
		
		else{
			return "invalid!"
		}
		//if input is not a number or is a string
    }
}
	

studentGrade(34)


