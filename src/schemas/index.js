import * as Yup from 'yup';


export const LoginSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('Password is required')
});


export const SignUpSchema = Yup.object({
    firstName: Yup.string().required('FirstName is required').min(1).max(60),
    lastName: Yup.string().required('LastName is required').min(1).max(60),
    displayName: Yup.string().required('DisplayName is required').min(1).max(60),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('Password is required'),
    passConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please re-enter password'),
    role: Yup.string().oneOf(['buyer', 'creator']).required(),
    subscribe: Yup.boolean()
});
