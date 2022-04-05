import { httpServer } from './socket'

const listener = httpServer.listen(import.meta.env.PORT ?? 3030, () => {
  console.log(
    `Listening on http://localhost:${(listener.address() as any).port}`,
  )
})
