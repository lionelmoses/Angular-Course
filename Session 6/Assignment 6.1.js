function CalculateArea(){
        var radius = document.form1.txtRadius.value; //Reading radius from user
        console.log("<P>The area of the circle is " + (radius * radius * Math.PI) + "</p>"); // Calculating
        
    }

CalculateArea();