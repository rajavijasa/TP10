const TransactionService = require('../services/transaction.service');
const redis = require('../database/redis');

class TransactionController {
  static async createTransaction(req, res, next) {
    try {
      const { user_id, item_id, quantity, description } = req.body;
      const transaction = await TransactionService.createTransaction({ user_id, item_id, quantity, description });

      // --- IMPLEMENTASI LOGGING REDIS STREAMS ---
      // XADD key ID field value [field value ...]
      // '*' digunakan agar Redis men-generate stream ID secara otomatis (berbasis timestamp)
      const streamId = await redis.xadd(
        'transaction-logs', 
        '*', 
        'userId', transaction.user_id, 
        'itemId', transaction.item_id, 
        'total', transaction.total
      );

      // Log ke terminal untuk mempermudah screenshot
      console.log(`[Redis Stream] Log transaksi tercatat dengan ID: ${streamId}`);

      res.status(201).json({
        success: true,
        message: 'Transaction created successfully',
        payload: transaction,
        stream_id: streamId
      });
    } catch (error) {
      next(error);
    }
  }

  static async getTransactionById(req, res, next) {
    try {
      const { id } = req.params;
      const transaction = await TransactionService.getTransactionById(id);
      res.status(200).json({
        success: true,
        message: 'Transaction retrieved successfully',
        payload: transaction,
      });
    } catch (error) {
      next(error);
    }
  }

  static async payTransaction(req, res, next) {
    try {
      const { id } = req.params;
      const userId = req.user.userId;
      const result = await TransactionService.payTransaction(id, userId);
      res.status(200).json({
        success: true,
        message: 'Payment successful',
        payload: {
          transaction_id: result.transactionId,
          new_balance: result.newBalance,
          status: 'paid',
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteTransaction(req, res, next) {
    try {
      const { id } = req.params;
      await TransactionService.deleteTransaction(id);
      res.status(200).json({
        success: true,
        message: 'Transaction deleted successfully',
        payload: null,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TransactionController;