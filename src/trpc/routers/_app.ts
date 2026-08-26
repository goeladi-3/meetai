import { createTRPCRouter } from '../init';
import { agentsRouter } from '@/modules/agents/server/procedures';
import { meetingsRouter } from '@/modules/meetings/server/procedures';

 
export const appRouter = createTRPCRouter({
  //Here are all the operations my application exposes through tRPC.
  agents: agentsRouter,
  meetings: meetingsRouter,
});
 
// export type definition of API
export type AppRouter = typeof appRouter;