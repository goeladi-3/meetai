import { agentsRouter } from '@/modules/agents/server/procedures';
import { createTRPCRouter } from '../init';
 
export const appRouter = createTRPCRouter({
  //Here are all the operations my application exposes through tRPC.
  agents: agentsRouter,
});
 
// export type definition of API
export type AppRouter = typeof appRouter;