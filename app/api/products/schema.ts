import { z } from "zod";

const schema = z.object({
  name: z.string().min(4),
  price: z.number().min(1).max(100),
});

export default schema;
