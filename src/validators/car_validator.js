// import Joi from "joi";
//
// export const carValidator = Joi.object({
//     model:Joi.string().min(1).max(20).required().messages({
//         'string.empty':'Model не може бути пустим',
//         'string.min':'Model має бути мінімум 2 символи'
//     }),
//     price: Joi.number().min(1).max(1000000).required(),
//     year:Joi.number().min(1990).max(new Date().getFullYear()).required()
// });