import Joi from 'joi';

const phonePattern = /^[0-9+\-() ]{6,16}$/;

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least {#limit} characters',
    'string.max': 'Name must be at most {#limit} characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().pattern(phonePattern).required().messages({
    'string.pattern.base':
      'Phone number must contain 6-16 digits and may include +, -, (, ) or space',
    'any.required': 'Phone number is required',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'any.only': 'Contact type must be one of: work, home, personal',
      'any.required': 'Contact type is required',
    }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is required',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean value',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least {#limit} characters',
    'string.max': 'Name must be at most {#limit} characters',
  }),
  phoneNumber: Joi.string().pattern(phonePattern).messages({
    'string.pattern.base':
      'Phone number must contain 6-16 digits and may include +, -, (, ) or space',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only': 'Contact type must be one of: work, home, personal',
  }),
  email: Joi.string().email().messages({
    'string.email': 'Email must be a valid email address',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean value',
  }),
});
