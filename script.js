//your JS code here. If required.
// Define the student object
const student = {
  name: "John"
};

// Adding a method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Test the method
console.log(student.getKeys()); // Output: ["name"]
