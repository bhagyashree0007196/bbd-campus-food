const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

/* =====================================================
   MIDDLEWARE
   ===================================================== */

app.use(
    cors({
        origin: "*"
    })
);

app.use(express.json());


/* =====================================================
   MONGODB CONNECTION
   ===================================================== */

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("❌ MONGO_URI is missing in .env file");
    process.exit(1);
}

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB connected");
    })
    .catch((error) => {
        console.error("❌ MongoDB connection failed:");
        console.error(error.message);
    });


/* =====================================================
   ORDER SCHEMA
   ===================================================== */

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: true
        },

        customer: {
            name: {
                type: String,
                required: true,
                trim: true
            },

            phone: {
                type: String,
                required: true,
                trim: true
            },

            college: {
                type: String,
                required: true,
                trim: true
            }
        },

        outlet: {
            type: String,
            required: true,
            trim: true
        },

        outletKey: {
            type: String,
            required: true,
            trim: true
        },

        items: [
            {
                name: {
                    type: String,
                    required: true
                },

                price: {
                    type: Number,
                    required: true
                },

                quantity: {
                    type: Number,
                    required: true,
                    min: 1
                }
            }
        ],

        total: {
            type: Number,
            required: true,
            min: 0
        },

        status: {
            type: String,

            enum: [
                "received",
                "preparing",
                "ready",
                "completed",
                "cancelled"
            ],

            default: "received"
        },

        estimatedTime: {
            type: String,
            default: "15–20 minutes"
        }
    },

    {
        timestamps: true
    }
);


const Order =
    mongoose.model(
        "Order",
        orderSchema
    );


/* =====================================================
   TEST ROUTE
   ===================================================== */

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "BBD Campus Food API is running 🚀"
    });

});


/* =====================================================
   HEALTH CHECK
   ===================================================== */

app.get("/api/health", (req, res) => {

    res.json({
        success: true,
        server: "online",
        database:
            mongoose.connection.readyState === 1
                ? "connected"
                : "disconnected"
    });

});


/* =====================================================
   CREATE ORDER
   ===================================================== */

app.post("/api/orders", async (req, res) => {

    try {

        const {
            customer,
            outlet,
            outletKey,
            items,
            total,
            estimatedTime
        } = req.body;


        /* ---------- VALIDATION ---------- */

        if (!customer) {

            return res.status(400).json({
                success: false,
                message: "Customer details are required."
            });

        }


        if (!customer.name) {

            return res.status(400).json({
                success: false,
                message: "Customer name is required."
            });

        }


        if (!customer.phone) {

            return res.status(400).json({
                success: false,
                message: "Phone number is required."
            });

        }


        if (!customer.college) {

            return res.status(400).json({
                success: false,
                message: "College name is required."
            });

        }


        if (!outlet || !outletKey) {

            return res.status(400).json({
                success: false,
                message: "Outlet information is required."
            });

        }


        if (
            !Array.isArray(items) ||
            items.length === 0
        ) {

            return res.status(400).json({
                success: false,
                message: "Order must contain at least one item."
            });

        }


        /* ---------- TOTAL CALCULATION ---------- */

        const calculatedTotal =
            items.reduce(
                (sum, item) => {

                    return (
                        sum +
                        Number(item.price) *
                        Number(item.quantity)
                    );

                },
                0
            );


        /* ---------- ORDER ID ---------- */

        const randomPart =
            Math.floor(
                1000 +
                Math.random() * 9000
            );


        const orderId =
            `CC-${Date.now().toString().slice(-6)}-${randomPart}`;


        /* ---------- CREATE ORDER ---------- */

        const newOrder =
            new Order({

                orderId,

                customer: {
                    name:
                        customer.name,

                    phone:
                        customer.phone,

                    college:
                        customer.college
                },

                outlet,

                outletKey,

                items,

                total:
                    calculatedTotal,

                estimatedTime:
                    estimatedTime ||
                    "15–20 minutes",

                status:
                    "received"

            });


        const savedOrder =
            await newOrder.save();


        /* ---------- RESPONSE ---------- */

        res.status(201).json({

            success: true,

            message:
                "Order received successfully.",

            order: {

                orderId:
                    savedOrder.orderId,

                customer:
                    savedOrder.customer,

                outlet:
                    savedOrder.outlet,

                items:
                    savedOrder.items,

                total:
                    savedOrder.total,

                status:
                    savedOrder.status,

                estimatedTime:
                    savedOrder.estimatedTime,

                createdAt:
                    savedOrder.createdAt

            }

        });

    }

    catch (error) {

        console.error(
            "Create order error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                "Failed to create order.",

            error:
                error.message

        });

    }

});


/* =====================================================
   GET ONE ORDER
   ===================================================== */

app.get(
    "/api/orders/:orderId",
    async (req, res) => {

        try {

            const order =
                await Order.findOne({
                    orderId:
                        req.params.orderId
                });


            if (!order) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Order not found."

                });

            }


            res.json({

                success: true,

                order

            });

        }

        catch (error) {

            res.status(500).json({

                success: false,

                message:
                    "Failed to fetch order.",

                error:
                    error.message

            });

        }

    }
);


/* =====================================================
   GET ORDERS FOR OUTLET
   ===================================================== */

app.get(
    "/api/outlets/:outletKey/orders",
    async (req, res) => {

        try {

            const orders =
                await Order.find({
                    outletKey:
                        req.params.outletKey
                })
                .sort({
                    createdAt: -1
                });


            res.json({

                success: true,

                count:
                    orders.length,

                orders

            });

        }

        catch (error) {

            res.status(500).json({

                success: false,

                message:
                    "Failed to fetch outlet orders.",

                error:
                    error.message

            });

        }

    }
);


/* =====================================================
   UPDATE ORDER STATUS
   ===================================================== */

app.patch(
    "/api/orders/:orderId/status",
    async (req, res) => {

        try {

            const {
                status
            } = req.body;


            const allowedStatuses = [

                "received",

                "preparing",

                "ready",

                "completed",

                "cancelled"

            ];


            if (
                !allowedStatuses.includes(
                    status
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid order status."

                });

            }


            const order =
                await Order.findOneAndUpdate(

                    {
                        orderId:
                            req.params.orderId
                    },

                    {
                        status:
                            status
                    },

                    {
                        new: true
                    }

                );


            if (!order) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Order not found."

                });

            }


            res.json({

                success: true,

                message:
                    "Order status updated.",

                order

            });

        }

        catch (error) {

            res.status(500).json({

                success: false,

                message:
                    "Failed to update status.",

                error:
                    error.message

            });

        }

    }
);


/* =====================================================
   START SERVER
   ===================================================== */

app.listen(
    PORT,
    () => {

        console.log("");
        console.log(
            "======================================"
        );

        console.log(
            "🍔 BBD CAMPUS FOOD BACKEND"
        );

        console.log(
            "======================================"
        );

        console.log(
            `🚀 Server running on http://localhost:${PORT}`
        );

        console.log(
            ""
        );

    }
);