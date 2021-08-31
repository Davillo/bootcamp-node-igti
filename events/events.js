import {EventEmitter} from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('testEvent', object  => {
    console.log(object);
});

export default eventEmitter;