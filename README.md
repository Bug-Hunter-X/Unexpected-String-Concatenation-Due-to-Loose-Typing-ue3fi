# Unexpected String Concatenation in JavaScript

This example demonstrates a common issue in JavaScript stemming from its dynamic typing system.  When you perform addition with a number and a string, JavaScript will implicitly convert the number to a string and concatenate the two strings. This behavior can be unexpected if you're expecting numerical addition.

**bug.js** shows the erroneous code, resulting in unexpected string concatenation.  **bugSolution.js** presents the corrected version utilizing explicit type checking or conversion to ensure correct numerical addition.