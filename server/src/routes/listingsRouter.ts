import { Router } from 'express'
import { listListings, updateListing } from '../controllers/listingsController'

const router = Router()

router.get("/", listListings)
router.patch("/:id/price", updateListing)

export default router