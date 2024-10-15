import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("notes").collect();
  },
});

export const addNote = mutation({
  args: {text: v.string()},
  handler: async (ctx, args) => {
    const newData = await ctx.db.insert("notes", { text: args.text });
    return newData;
  },
});
