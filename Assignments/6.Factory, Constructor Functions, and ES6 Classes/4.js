class iPhone {
    constructor(ASIN, color, display, camera, bluetooth) {
      this.ASIN = ASIN;
      this.color = color;
      this.display = display;
      this.camera = camera;
      this.bluetooth = bluetooth;
    }
  
    // Method to simulate dialing
    dial() {
      return "tring... tring...";
    }
  
    // Method to simulate sending a message
    sendMessage() {
      return "Sending message...";
    }
  
    // Method to simulate a camera click
    cameraClick() {
      return "Camera clicked";
    }
  
    // Method to simulate connecting Bluetooth
    connectBluetooth() {
      return "Bluetooth connected successfully...";
    }
  }
  
  // Example usage
  let i4 = new iPhone("B00YB7M0VO", "black", "5.5", "12mp", "5.0");
  
  console.log(i4.ASIN);               // B00YB7M0VO
  console.log(i4.color);              // black
  console.log(i4.display);            // 5.5
  console.log(i4.camera);             // 12mp
  console.log(i4.bluetooth);          // 5.0
  
  // Method usage
  console.log(i4.dial());             // tring... tring...
  console.log(i4.sendMessage());      // Sending message...
  console.log(i4.cameraClick());      // Camera clicked
  console.log(i4.connectBluetooth()); // Bluetooth connected successfully...
  