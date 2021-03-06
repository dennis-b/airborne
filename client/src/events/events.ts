import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:5000');

function subscribeToData(cb) {
    socket.on('data', data => cb(null, data));
}

export { subscribeToData };
