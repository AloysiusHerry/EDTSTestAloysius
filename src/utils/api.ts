import axios from "axios";

export const api = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "free_user_3FWjCakUFMde0vmAvWVzrI04EKT"
    }
});