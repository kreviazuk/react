import Router from '@koa/router';
import { authMiddleware } from '../middleware/auth';
import { requireAdmin } from '../middleware/role';
import * as loanController from '../controllers/loanController';

const router = new Router({ prefix: '/loans' });

// ============ 用户接口（需要登录）============
router.post('/apply', authMiddleware, loanController.applyLoan);
router.get('/my', authMiddleware, loanController.getMyLoans);
router.get('/my/:id', authMiddleware, loanController.getMyLoanById);

// ============ 管理员接口 ============
router.get('/pending', authMiddleware, requireAdmin, loanController.getPendingLoans);
router.get('/', authMiddleware, requireAdmin, loanController.getAllLoans);
router.get('/:id', authMiddleware, requireAdmin, loanController.getLoanById);
router.put('/:id/approve', authMiddleware, requireAdmin, loanController.approveLoan);
router.put('/:id/reject', authMiddleware, requireAdmin, loanController.rejectLoan);
router.put('/:id/return', authMiddleware, requireAdmin, loanController.returnLoan);

export default router;
