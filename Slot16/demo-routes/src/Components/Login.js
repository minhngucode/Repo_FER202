import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        if (data.username === "admin" && data.password === "123456") {
            localStorage.setItem("isAuthenticated", "true");
            alert("Login successful!");
            navigate("/posts");
        } else {
            alert("Invalid username or password");
        }
    };
    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username:</label>
                    <input
                        {...register("username", { required: "Username is required" })}
                        type="text"
                    />
                    {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                        type="password"
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
