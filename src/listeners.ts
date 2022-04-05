import { Server } from 'socket.io'
import { registerUsersController } from './controllers/users.controller'

export const registerListeners = (io: Server) => {
  io.on('connection', sock => {
    registerUsersController(io, sock)
  })
}
