import React, { useState } from "react";
import SignUpForm from '../components/SignUpForm'

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

const SignUp = () => {
    return (
        <SignUpForm></SignUpForm>
    )
}

export default SignUp;