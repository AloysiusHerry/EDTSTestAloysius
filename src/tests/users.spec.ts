import { expect } from "chai";
import { UserFlow } from "../flows/user.flow";
import { updateUserPayload } from "../data/userData";

describe("Reqres API E2E Flow", () => {

    let userId: string;

    it("1. Create User", async () => {
        const res = await UserFlow.createUser();

        expect(res.status).to.equal(201);
        expect(res.data.name).to.exist;
        expect(res.data.job).to.exist;

        userId = res.data.id;
    });

    it("2. Get All Users (Page 2)", async () => {
        const res = await UserFlow.getAllUsers();

        expect(res.status).to.equal(200);
        expect(res.data.data).to.be.an("array");
    });

    it("3. Update User", async () => {
        const res = await UserFlow.updateUser(userId);

        expect(res.status).to.equal(200);
        expect(res.data.job).to.equal(updateUserPayload.job);
    });

    it("4. Get Single User", async () => {
        const res = await UserFlow.getSingleUser("2");

        expect(res.status).to.equal(200);
        expect(res.data.data).to.have.property("id");
    });

    it("5. Delete User", async () => {
        const res = await UserFlow.deleteUser(userId);

        expect(res.status).to.equal(204);
    });

});