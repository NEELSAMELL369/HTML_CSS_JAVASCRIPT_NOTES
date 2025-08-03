
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



