import { exposeCrud } from '@/common/exposeCrud'
import { userStore } from '@/store/user.store'
import { flow, pipe } from 'fp-ts/lib/function'
import { Server, Socket } from 'socket.io'
const basePrefix = 'users'

export const registerUsersController = (io: Server, sock: Socket) => {
  /*sock.on(
    prefix('create'),
    flow(userStore.create.bind(userStore), emit(prefix('created'), sock)),
  )*/

  exposeCrud(userStore)('users')(io, sock)
}
