function convertHexToRgb() {
    // Get the input value
    const hexInput = document.getElementById("hexInput").value;
    // Remove the # symbol if present
    const hexCode = hexInput.replace("#", "");
    // Convert HEX to RGB
    const r = parseInt(hexCode.substring(0, 2), 16);
    const g = parseInt(hexCode.substring(2, 4), 16);
    const b = parseInt(hexCode.substring(4, 6), 16);
    // Display the RGB value
    const rgbOutput = document.getElementById("rgbOutput");
    rgbOutput.textContent = `RGB: ${r}, ${g}, ${b}`;
  }