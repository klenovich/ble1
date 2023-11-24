var noble = require('noble');

noble.startScanning(); // any service UUID, no duplicates


noble.startScanning([], true); // any service UUID, allow duplicates


var serviceUUIDs = ["12345678-1234-5678-1234-56789abcdef0", "87654321-4321-8765-4321-87654321fedcba"];
var allowDuplicates = true; // default: false

noble.startScanning(serviceUUIDs, allowDuplicates); // particular UUID's