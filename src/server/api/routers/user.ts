import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getAvatar: publicProcedure.query(({ ctx }) => {
    return ctx.session?.user.image;
  }),
});
