import React from 'react'
import { useForm } from "react-hook-form";
import "../../styles/RegistrationForm.css"


const RegistrationForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    async function onSubmit(data) {
        await new Promise((r) => setTimeout(r, 2000));
        console.log("Form Data:", data);
    }

    const inputStyle = (error) =>
        `w-full border rounded-md px-3 py-2 outline-none 
        ${error ? "border-red-500" : "border-gray-300"}
        focus:ring-2 focus:ring-indigo-400 `;


    return (
        <section className="min-h-screen flex justify-center bg-gray-100 py-12 px-4">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8">

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    User Registration
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Name + Surname */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                className={inputStyle(errors.name)}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Surname</label>
                            <input
                                {...register("surname", { required: "Surname is required" })}
                                className={inputStyle(errors.surname)}
                            />
                            {errors.surname && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.surname.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Mobile + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Mobile Number
                            </label>
                            <input
                                {...register("mobile", {
                                    required: "Mobile number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter a valid 10-digit number",
                                    },
                                })}
                                className={inputStyle(errors.mobile)}
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.mobile.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Enter a valid email",
                                    },
                                })}
                                className={inputStyle(errors.email)}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Password + Gender */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Minimum 6 characters required",
                                    },
                                })}
                                className={inputStyle(errors.password)}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Gender
                            </label>
                            <select
                                {...register("gender", { required: "Gender is required" })}
                                className={inputStyle(errors.gender)}
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.gender.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Aadhaar + PAN */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Aadhaar Card
                            </label>
                            <input
                                {...register("aadhaar", {
                                    required: "Aadhaar is required",
                                    pattern: {
                                        value: /^[0-9]{12}$/,
                                        message: "Enter valid 12-digit Aadhaar",
                                    },
                                })}
                                className={inputStyle(errors.aadhaar)}
                            />
                            {errors.aadhaar && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.aadhaar.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                PAN Card
                            </label>
                            <input
                                {...register("pan", {
                                    required: "PAN is required",
                                    pattern: {
                                        value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                                        message: "Invalid PAN format",
                                    },
                                })}
                                className={inputStyle(errors.pan)}
                            />
                            {errors.pan && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.pan.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Profile Photo */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Profile Photo
                        </label>
                        <input
                            type="file"
                            {...register("profilePhoto", {
                                required: "Profile photo is required",
                            })}
                            className="w-full text-sm"
                        />
                        {errors.profilePhoto && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.profilePhoto.message}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 rounded-md font-semibold text-white
                            ${isSubmitting ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"}
                        `}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>

                </form>
            </div>
        </section>
    );
};

export default RegistrationForm;
