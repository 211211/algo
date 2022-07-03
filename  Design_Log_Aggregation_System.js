/**
 * @param {number} machines
 * @param {number} services
 */
 var LogAggregator = function (machines, services) {
    this.machines = {}
    this.services = {}
    this.logs = new Map()
    for (let i = 0; i < machines; i++) {
        // "i" stands for machine name
        this.machines[i] = []
    }

    for (let j = 0; j < services; j++) {
        // "j" stands for service name
        this.services[j] = []
    }
};

/** 
 * @param {number} logId 
 * @param {number} machineId 
 * @param {number} serviceId 
 * @param {string} message
 * @return {void}
 */
LogAggregator.prototype.pushLog = function (logId, machineId, serviceId, message) {
    if (this.services[serviceId] && this.machines[machineId]) {
        this.machines[machineId].push(logId)
        this.services[serviceId].push(logId)
        this.logs.set(logId, String(message))    
    }
};

/** 
 * @param {number} machineId
 * @return {number[]}
 */
LogAggregator.prototype.getLogsFromMachine = function (machineId) {
    if (this.machines[machineId]) {
        return this.machines[machineId]
    }

    return []
};

/** 
 * @param {number} serviceId
 * @return {number[]}
 */
LogAggregator.prototype.getLogsOfService = function (serviceId) {
    if (this.services[serviceId]) {
        return this.services[serviceId]
    }

    return []
};

const logAggregator = new LogAggregator(7, 2); // There are 3 machines and 3 services
// console.log(logAggregator)
logAggregator.pushLog(57007, 1, 1, "Machine 1 Service 1 Log 1");
logAggregator.pushLog(2312, 1, 1, "Machine 1 Service 1 Log 2");
logAggregator.pushLog(2352, 1, 1, "Machine 1 Service 1 Log 3");
logAggregator.pushLog(2298, 1, 1, "Machine 1 Service 1 Log 4");
logAggregator.pushLog(23221, 1, 2, "Machine 1 Service 2 Log 1");
logAggregator.pushLog(23121, 1, 2, "Machine 1 Service 2 Log 2");
logAggregator.pushLog(23222, 2, 2, "Machine 2 Service 2 Log 1");
logAggregator.pushLog(23122, 2, 2, "Machine 2 Service 2 Log 2");
logAggregator.pushLog(23521, 1, 2, "Machine 1 Service 2 Log 3");
logAggregator.pushLog(22981, 1, 2, "Machine 1 Service 2 Log 4");
logAggregator.pushLog(23522, 2, 2, "Machine 2 Service 2 Log 3");
logAggregator.pushLog(22982, 2, 2, "Machine 2 Service 2 Log 4");
logAggregator.getLogsFromMachine(2); // return [23222, 23122, 23522, 22982]
// Machine 2 added 4 logs, so we return them in the order
// they were added.
logAggregator.getLogsOfService(2); // return [23221, 23121, 23222, 23122, 23521, 22981, 23522, 22982]
// 8 logs were added while running service 2 on a machine.
logAggregator.search(1, "Log 1"); // return ["Machine 1 Service 1 Log 1"]
// There is only one log that was added while running service 1
// and contains "Log 1".
logAggregator.search(2, "Log 3"); // return ["Machine 1 Service 2 Log 3", "Machine 2 Service 2 Log 3"]

["LogAggregator", "getLogsOfService", "pushLog", "getLogsFromMachine"]
[[4, 6], [3], [83303, 3, 1, "Cgd"], [0]]

// logAggregator.pushLog(2322, 1, 1, "Machine 1 Service 1 Log 1");
// logAggregator.pushLog(2312, 1, 1, "Machine 1 Service 1 Log 2");
// logAggregator.pushLog(2352, 1, 1, "Machine 1 Service 1 Log 3");
// logAggregator.pushLog(2298, 1, 1, "Machine 1 Service 1 Log 4");
// logAggregator.pushLog(23221, 1, 2, "Machine 1 Service 2 Log 1");
// logAggregator.pushLog(23121, 1, 2, "Machine 1 Service 2 Log 2");
// logAggregator.pushLog(23222, 2, 2, "Machine 2 Service 2 Log 1");
// logAggregator.pushLog(23122, 2, 2, "Machine 2 Service 2 Log 2");
// logAggregator.pushLog(23521, 1, 2, "Machine 1 Service 2 Log 3");
// logAggregator.pushLog(22981, 1, 2, "Machine 1 Service 2 Log 4");
// logAggregator.pushLog(23522, 2, 2, "Machine 2 Service 2 Log 3");
// logAggregator.pushLog(22982, 2, 2, "Machine 2 Service 2 Log 4");
// logAggregator.getLogsFromMachine(2); // return [23222, 23122, 23522, 22982]
//                                      // Machine 2 added 4 logs, so we return them in the order
//                                      // they were added.
// logAggregator.getLogsOfService(2); // return [23221, 23121, 23222, 23122, 23521, 22981, 23522, 22982]
//                                    // 8 logs were added while running service 2 on a machine.
// logAggregator.search(1, "Log 1"); // return ["Machine 1 Service 1 Log 1"]
//                                   // There is only one log that was added while running service 1
//                                   // and contains "Log 1".
// logAggregator.search(2, "Log 3"); // return ["Machine 1 Service 2 Log 3", "Machine 2 Service 2 Log 3"]
                                  // 2 logs were added while running service 2 that contain "Log 3".
// console.log(logAggregator.getLogsFromMachine(2)); // return [23222, 23122, 23522, 22982]


// var obj = new LogAggregator(['machine1', 'machine2'], ['service1', 'service2'])
// obj.pushLog(2322, 'machine1', 'service1', "Machine 1 Service 1 Log 1");

// // obj.pushLog(logId,machineId,serviceId,message)
// var param_2 = obj.getLogsFromMachine('machine1')
// var param_3 = obj.getLogsOfService('service1')
// var param_4 = obj.search('service1', 2322)
// console.log({
//     obj,
//     param_2,
//     param_3,
//     param_4,
// })