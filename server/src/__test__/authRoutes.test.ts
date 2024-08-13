import request from "supertest";
import express from "express";
import authRoutes from "../routes/authRoutes";
import { registerUser, loginUser } from "../controllers/authController";

// Mock the controller functions
jest.mock("../controllers/authController");

const app = express();
app.use(express.json());
app.use("/auth", authRoutes);

describe("Auth Routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should register a user", async () => {
    (registerUser as jest.Mock).mockImplementation((req, res) => {
      res.status(201).send({ message: "User registered" });
    });

    const response = await request(app)
      .post("/auth/register")
      .send({ username: "testuser", password: "testpassword" });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered");
    expect(registerUser).toHaveBeenCalledTimes(1);
  });

  it("should login a user", async () => {
    (loginUser as jest.Mock).mockImplementation((req, res) => {
      res.status(200).send({ message: "User logged in" });
    });

    const response = await request(app)
      .post("/auth/login")
      .send({ username: "testuser", password: "testpassword" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("User logged in");
    expect(loginUser).toHaveBeenCalledTimes(1);
  });
});