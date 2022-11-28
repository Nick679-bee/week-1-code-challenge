function speedDetector(speed)
//using else if function to find exceeded speed
    {
    if(speed <= 70){
        console.log("Ok")
    }
    //if input is less or equal to 70 it prints ok
    else{
       let points = (speed-70)/5;
        if(points >= 12){
            console.log("License suspended")
        }
        //if greater than 70,subtract 70 from the number then divide by 5
        //if the division is greater than 12 print lincese suspended
        else{
        console.log(`${points}`)
        }
        //if the division is less than 12,print the number of points

    }
}

speedDetector(100)