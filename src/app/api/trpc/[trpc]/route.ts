import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { createTRPCContext } from '@/trpc/init';
import { appRouter } from '@/trpc/routers/_app';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });
//When an HTTP request arrives at /api/trpc, let tRPC handle it using appRouter.
export { handler as GET, handler as POST };
