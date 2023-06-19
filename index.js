import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = new express();
app.use(express.json);
app.use((req, res, next) => {
    res.status(404);
    return res.json({
        success: false,
        payload: null,
        message: `API SAYS: Endpoint not found for path: ${req.path}`, 
    });
});

app.listen(process.env.PORT || 8000, () => 
    console.log(`miercoles ready at: http://localhost:8000`)
)