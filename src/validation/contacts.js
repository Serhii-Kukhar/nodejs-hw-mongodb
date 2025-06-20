import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.number().integer().min(6).max(16).required(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  email: Joi.string().min(2).max(12).required(),
  isFavourite: Joi.boolean(),
});
