/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let name = prompt("Geben Sie Ihren Namen ein:");


let age = parseInt(prompt("Geben Sie Ihr Alter ein:"));
      if (age >= 0 && age <= 5) 
        {
      console.log(name + " trinkt Milch.");
    }
         
      else if (age >= 6 && age <= 12) 
        {
      console.log(name + " trinkt Saft.");
    }

      else if (age >= 13 && age <= 17) 
        {
      console.log(name + " trinkt Cola.");
    }     

    else if (age >= 18) 
        {
      console.log(name + " trinkt Wein.");
    }     

else 
        {
      console.log("Ungültiges Alter!");
    }

