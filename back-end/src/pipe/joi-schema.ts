import * as Joi from 'joi';

export const signupSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().max(255).required(),
  password: Joi.string().min(8).required(),
});

export const signinSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  password: Joi.string().min(8).required(),
});
