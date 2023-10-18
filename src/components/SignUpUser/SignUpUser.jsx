import { useForm } from "react-hook-form";

function SignUpUser() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (data.password != data.passwordConfirm) {
            alert(
                'Passwords do not match'
            )
        }
        else {
            alert(
                `First Name: ${data.fname}, Last Name: ${data.lname}, Username: ${data.username}, Email: ${data.email}, Password: ${data.password}, Confirmed Password: ${data.passwordConfirm} `
            );
        }
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="hook">
            <label className="hook__text">First Name</label>
            <input
                type="text"
                className="hook__input"
                {...register("fname", { required: true })}
            />
            <label className="hook__text">Last Name</label>
            <input
                type="text"
                className="hook__input"
                {...register("lname", { required: true })}
            />
            <label className="hook__text">Username</label>
            <input
                type="text"
                className="hook__input"
                {...register("username", { required: true })}
            />

            <label className="hook__text">Email</label>
            <input
                type="email"
                className="hook__input"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
                <p className="hook__error">Email is required and must be valid</p>
            )}

            <label className="hook__text">Password</label>
            <input
                type="password"
                className="hook__input"
                {...register("password", { required: true })}
            />
            {errors.password && <p className="hook__error">Password is required</p>}

            <label className="hook__text"> Confirm Password</label>
            <input
                type="password"
                className="hook__input"
                {...register("passwordConfirm", { required: true })}
            />
            {errors.passwordConfirm && <p className="hook__error">Password confirmation is required</p>}

            <button className="hook__button" type="submit">
                Submit
            </button>
        </form>
    );
}

export default SignUpUser;
