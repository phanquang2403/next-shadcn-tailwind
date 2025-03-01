import { z } from 'zod';

/**
 * Register
 */
export const RegisterBody = z
  .object({
    name: z.string().trim().min(2).max(256),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100),
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Mật khẩu không khớp',
        path: ['confirmPassword'],
      });
    }
  });

export const RegisterRes = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    }),
  }),
  message: z.string(),
});
export type RegisterBodyType = z.TypeOf<typeof RegisterBody>;
export type RegisterResType = z.TypeOf<typeof RegisterRes>;

/**
 * Login
 */
export const LoginBody = z
  .object({
    email: z.string().email(),
    password: z.string().min(6).max(100),
  })
  .strict();

export type LoginBodyType = z.TypeOf<typeof LoginBody>;
export const LoginRes = RegisterRes;
export type LoginResType = z.TypeOf<typeof LoginRes>;

/**
 * Account me
 */
export const AccountRes = z
  .object({
    data: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    }),
    message: z.string(),
  })
  .strict();

export type AccountResType = z.TypeOf<typeof AccountRes>;

export const UpdateMeBody = z.object({
  name: z.string().trim().min(2).max(256),
});

export type UpdateMeBodyType = z.TypeOf<typeof UpdateMeBody>;
