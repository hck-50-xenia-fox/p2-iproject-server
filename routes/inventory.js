const express = require("express");
const InventoryController = require("../controllers/inventoryController");
const router = express.Router();

router.get("/", InventoryController.fetchAllInventory);
router.post("/", InventoryController.buyInventory);
router.get("/:id", InventoryController.getTargetInventory);
router.put("/:id", InventoryController.EditPurchase);
router.delete("/:id", InventoryController.DeletePurchase);

module.exports = router;
