function iPhone1(ASIN, model, display, OS, storage, color, lens, camera) {
    return {
        ASIN: ASIN,
        model: model,
        display: display,
        OS: OS,
        storage: storage,
        color: color,
        lens: lens,
        camera: camera,
        dial: function() {
            return "tring... tring..."; 
        },
        sendMessage: function() {
            return "Sending message...";
        },
        cameraClick: function() {
            return "Camera clicked";
        }
    };
}

// Test case
let i1 = iPhone1(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP"
);

// Accessing properties
console.log(i1.ASIN); // 1
console.log(i1.model); // "B09X67JBQV"
console.log(i1.display); // 7.8
console.log(i1.OS); // "IOS"
console.log(i1.storage); // "128mb"
console.log(i1.color); // "Gray"
console.log(i1.lens); // "90mm"
console.log(i1.camera); // "2.0 MP"

// Accessing methods
console.log(i1.dial()); // "tring... tring..."
console.log(i1.sendMessage()); // "Sending message..."
console.log(i1.cameraClick()); // "Camera clicked"
