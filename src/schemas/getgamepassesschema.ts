import { createYupSchema } from "fastify-yup-schema";

export const changeUserRobloxSchema = createYupSchema((yup) => ({
  body: yup
    .object()
    .shape({
        robloxid: yup.number().required(),
    })
    .noUnknown(),
}));