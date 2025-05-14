import { Mongoose } from "mongoose";

// global.d.ts
declare module "*.json" {
  const value: unknown;
  export default value;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

export {};
