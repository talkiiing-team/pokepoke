import { flow } from 'fp-ts/lib/function'
import { Server, Socket } from 'socket.io'
import { Crud } from './useTable'

const emit = (eventName: string, sock: Socket) => (obj: any) =>
  sock.emit(eventName, obj)

export const exposeCrud =
  (store: Crud<any, any>) =>
  (basePrefix: string) =>
  (io: Server, sock: Socket) => {
    const prefix = (name: string) => `${basePrefix}/${name}`

    Object.entries(store)
      .filter(([name]) => !name.includes('find'))
      .forEach(([methodName, method]) =>
        sock.on(
          prefix(methodName),
          // @ts-ignore
          flow(method.bind(store), emit(prefix(`${methodName}.done`), sock)),
        ),
      )
  }
