import { Application } from 'express';
import http from 'http';
import { Server } from 'socket.io';

const sockets = (app: Application) => {
    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on('joinRoom', (roomCode) => {
            socket.join(roomCode);
            console.log(`User ${socket.id} joined room: ${roomCode}`);
        });

        socket.on('editorDataUpdated', ({ roomCode, editorData }) => {
            console.log(`Room ${roomCode} updated editor data`);
            socket.to(roomCode).emit('editorDataUpdate', editorData);
        });

        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });

    return server;
};

export default sockets;
