const express = require("express");

const router = express.Router({ mergeParams: true });
const wrapAsync = require("../Utils/wrapAsync.js");
const expressError = require("../Utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");
const {
  validateReview,
  isLogedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Reviews
//Post Review Route
router.post(
  "/",
  validateReview,
  isLogedIn,
  wrapAsync(reviewController.createReview),
);

//Delete Review Route
router.delete(
  "/:reviewId",
  isLogedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;
