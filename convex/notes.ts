import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

// This is a Convex API file. You can define your API endpoints here.
// You can define your API endpoints here.
// For example, to define a simple endpoint that returns a string:

// get is a query endpoint that returns a list of notes
export const get = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("notes")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
  },
});

// addNote is a mutation endpoint that adds a note
export const addNote = mutation({
  args: { title: v.string(), text: v.string(), userId: v.string() },
  handler: async (ctx, args) => {
    const newData = await ctx.db.insert("notes", {
      title: args.title,
      text: args.text,
      userId: args.userId,
    });
    return newData;
  },
});

// deleteNote is a mutation endpoint that deletes a note
export const deleteNote = mutation({
  args: { _id: v.id("notes") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args._id);
    return true;
  },
});

// updateNote is a mutation endpoint that updates a note
export const updateNote = mutation({
  args: { _id: v.id("notes"), title: v.string(), text: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args._id, {
      title: args.title,
      text: args.text,
    });
    return true;
  },
});
