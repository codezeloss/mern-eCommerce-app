const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const colors = require("colors");
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const uploadRouter = require("./routes/uploadRoute");
const blogRouter = require("./routes/blogRoute");
const productCategoryRouter = require("./routes/productCategoryRoute");
const blogCategoryRouter = require("./routes/blogCategoryRoute");
const brandRouter = require("./routes/brandRoute");
const couponRouter = require("./routes/couponRoute");
const colorRouter = require("./routes/colorRoute");
const enquiryRouter = require("./routes/enquiryRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

// MIDDLEWARES
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://localhost:5174"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// ROUTES
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", productCategoryRouter);
app.use("/api/blogCategory", blogCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enquiryRouter);
app.use("/api/upload", uploadRouter);

// ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);

module.exports = app;
