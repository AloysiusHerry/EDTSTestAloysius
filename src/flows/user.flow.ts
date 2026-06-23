import { api } from "../utils/api";
import { newUser } from "../data/userData";
import { updateUserPayload } from "../data/userData";

export class UserFlow {

    static async createUser() {
        return await api.post("/users", newUser);
    }

    static async getAllUsers() {
        return await api.get("/users?page=2");
    }

    static async updateUser(id: string) {
        return await api.put(`/users/${id}`, updateUserPayload);
    }

    static async getSingleUser(id: string) {
        return await api.get(`/users/${id}`);
    }

    static async deleteUser(id: string) {
        return await api.delete(`/users/${id}`);
    }
}