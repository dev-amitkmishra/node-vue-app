const express = require('express');
const router = express();
const events = require('events');
const eventEmitter = new events();

router.get('/', (req, res) => {
    const testLoop = genearetEvents(4);
    // testLoop.on('BeforeProcess', (data) => {
    //     console.log('About to start the process for ' + data);
    // });
    
    // testLoop.on('AfterProcess', (data) => {
    //     console.log('Completed processing ' + data);
    // });
})

const genearetEvents = (num) => {
    setInterval(() => {
        for (var i = 1; i <= num; i++) {
            eventEmitter.emit('BeforeProcess', i).then(res => {
                console.log(Res);
            }).catch(err => {
                console.log(err);
            });
            
            console.log('Processing number:' + i);
            
            eventEmitter.emit('AfterProcess', i).then(res => {
                console.log(Res);
            }).catch(err => {
                console.log(err);
            });
        }
    }, 10000);
}

module.exports = router;