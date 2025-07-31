//Explain how you can use JavaScript to create a class representing a task with properties such as description and
// is Completed and methods to toggle the completion status and display the task functionality.
class Task {
    constructor(description) {
        this.description = description;
        this.isCompleted = false;
    }

    // Toggle the completion status
    toggleStatus() {
        this.isCompleted = !this.isCompleted;
    }

    // Display task info
    display() {
        const status = this.isCompleted ? "Completed" : "Incomplete";
        console.log(`Task: ${this.description} | Status: ${status}`);
    }
}
const task1 = new Task("Learn JavaScript OOP");
task1.display();            // Task: Learn JavaScript OOP | Status: Incomplete
task1.toggleStatus();
task1.display();            // Task: Learn JavaScript OOP | Status: Completed




//Discuss how inheritance can be used to extend this class to create a PriorityTask class with an additional priority property.
class PriorityTask extends Task {
    constructor(description, priority) {
        super(description);          // call the parent constructor
        this.priority = priority;    // additional property
    }

    // Override display to include priority
    display() {
        const status = this.isCompleted ? "Completed" : "Incomplete";
        console.log(
            `Task: ${this.description} | Priority: ${this.priority} | Status: ${status}`
        );
    }
}

const pTask = new PriorityTask("Fix production bug", "High");
pTask.display();           // Task: Fix production bug | Priority: High | Status: Incomplete
pTask.toggleStatus();
pTask.display();           // Task: Fix production bug | Priority: High | Status: Completed



//Describe the advantages of using object-oriented principles in this scenario and any potential limitations.

//✅ Advantages of Using Object-Oriented Principles
// | Advantage         | Explanation                                                                                  |
// | ----------------- | -------------------------------------------------------------------------------------------- |
// | **Encapsulation** | Groups task properties and behavior together, improving maintainability and readability.     |
// | **Reusability**   | Base class methods like `toggleStatus()` can be reused in derived classes.                   |
// | **Inheritance**   | Allows creation of extended, specialized behavior (`PriorityTask`) without code duplication. |
// | **Polymorphism**  | We can override methods (e.g., `display`) to change behavior in derived classes.             |
// | **Scalability**   | Adding more task types (e.g., `DeadlineTask`, `RecurringTask`) becomes easy.                 |


//⚠️ Limitations & Potential Issues
// | Limitation                | Explanation                                                                                                     |
// | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
// | **Overhead**              | For very simple apps, class-based structure may feel overengineered.                                            |
// | **Tight Coupling**        | Poor design could tightly bind classes, reducing flexibility.                                                   |
// | **Inheritance Pitfalls**  | Deep inheritance trees can become complex and harder to debug.                                                  |
// | **Browser Compatibility** | While modern browsers support ES6 classes, older environments may need transpilation.                           |
// | **Less Functional**       | JavaScript supports functional programming; some devs prefer using pure functions and composition over classes. |


//✅ Summary
// Using classes in JavaScript to manage a Task system brings clarity and scalability via encapsulation, 
// inheritance, and polymorphism.It's perfect for scenarios where tasks have shared and extendable behavior
//  (e.g., priorities, deadlines, recurrence).

// However, for small apps, consider if OOP is necessary—or if simpler functional or factory patterns might suffice.
// Always choose the paradigm that best fits your project’s complexity.