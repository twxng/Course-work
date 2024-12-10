import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import Register from '../Register/Register';

const Login = ({ onClose, onLogin }) => {
    const initialValues = { email: '', password: '' };
    const validationSchema = Yup.object({
        email: Yup.string().email('Невірний формат електронної пошти').required('Обов\'язкове поле'),
        password: Yup.string().required('Обов\'язкове поле'),
    });

    const [isLogin, setIsLogin] = useState(true);

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", values);
            if (response.status === 200) {
                // Отримуємо додаткові дані користувача з сервера
                const userData = {
                    email: values.email,
                    id: response.data.id,
                    firstName: response.data.firstName, // Ім'я
                    lastName: response.data.lastName,   // Прізвище
                    phone: response.data.phone,         // Телефон
                };
                onLogin(userData); // Передаємо усі дані користувача
                onClose();
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("Невірні дані для входу. Спробуйте зареєструватись.");
            } else {
                console.error("Помилка при вході", error);
            }
        }
    };

    return (
        <div className="login-container">
            <div style={{ alignSelf: 'flex-end' }}>
                <IconButton className="close-button" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            {isLogin ? (
                <div className="log-in-form">
                    <h2>Log In</h2>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form>
                            <div className="form-group">
                                <Field name="email" type="email" placeholder="Email" />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>
                            <div className="form-group">
                                <Field name="password" type="password" placeholder="Password" />
                                <ErrorMessage name="password" component="div" className="error-message" />
                            </div>
                            <button type="submit" className="submit-button">Log In</button>
                        </Form>
                    </Formik>
                </div>
            ) : (
                <Register onClose={onClose} handleToggleForm={handleToggleForm} onRegister={onLogin} />
            )}
            <div className="sign-up-prompt">
                <div onClick={handleToggleForm} className="sign-up-link">
                    {isLogin ? (
                        <>
                            Don&apos;t have an account? <strong>Sign Up</strong>
                        </>
                    ) : (
                        <>
                            Already have an account? <strong>Log In</strong>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
