# Kế Hoạch Dự Án Chuẩn Doanh Nghiệp: Tích Hợp WBS, Git Branching & Quy Trình Pull Request

> 🎓 **Môn học**: Quản trị dự án phần mềm  
> 🏷 **Dự án**: Hệ sinh thái đặt món ăn trực tuyến tích hợp AI – **GuGuGaGa**  
> 🌿 **Mô hình vận hành**: **Git Branching Strategy + Conventional Commits + Pull Request + Code Review + CI Verification**  
> 🎯 **Quy tắc WBS**: Áp dụng 100% mã phân rã công việc từ [docs/WBS_Project_Management.md](file:///d:/GuGuGaGa/docs/WBS_Project_Management.md) vào từng nhánh tính năng và từng Pull Request.

---

## 1. TỔNG QUAN & NGUYÊN TẮC KỸ THUẬT (OVERVIEW & CORE PRINCIPLES)

Dự án mô phỏng quy trình phát triển phần mềm chuyên nghiệp tại các công ty công nghệ lớn:
1. **Không commit trực tiếp vào `main`**: Mọi công việc bắt buộc phải tạo nhánh riêng dạng `feat/wbs-<id>-<feature>`.
2. **Commit nguyên tử (Atomic Commits)**: Mỗi commit giải quyết một lát cắt logic, gắn liền với mã WBS.
3. **Quy trình Pull Request bắt buộc**:
   - Khi hoàn thành tính năng trên nhánh riêng, lập trình viên đẩy lên remote và mở Pull Request theo mẫu [.github/pull_request_template.md](file:///d:/GuGuGaGa/.github/pull_request_template.md).
   - PR phải ghi rõ: Mã WBS, mô tả thay đổi, checklist tiêu chí nghiệm thu (Acceptance Criteria), bằng chứng chạy test thành công (logs/screenshots).
4. **Đánh giá chéo (Peer Review)**: Tối thiểu 1 thành viên khác (theo Ma trận RACI) vào review và chấp thuận (Approve) trước khi được Merge.
5. **Hợp nhất (Merge)**: Sử dụng phương thức Squash and Merge hoặc Merge Commit kèm thông điệp rõ ràng, sau đó xóa nhánh phụ để tránh phân mảnh repo.
6. **Cập nhật WBS**: Sau khi merge thành công, cập nhật trạng thái trong `tasks/todo.md` sang `MERGED` và tick `[x]`.

---

## 2. QUY ĐỊNH NHÁNH & DANH SÁCH PULL REQUEST THEO WBS

Toàn bộ 27 gói công việc của WBS được ánh xạ sang các nhánh tính năng độc lập:

| Mã WBS | Tên Gói Công Việc (Work Package) | Tên Nhánh Git (Source Branch) | Nhánh Đích (Target) | Người Phụ Trách (Dev) | Người Review (Reviewer) | MoSCoW |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **1.1.1** | Khởi tạo repo, quy chuẩn code & CI/CD pipeline | `chore/wbs-1.1.1-repo-infra` | `main` | TV1 (Backend/PM) | TV3 (QA/AI) | **Must** |
| **1.1.2** | Thiết lập Supabase / Firebase & Storage | `chore/wbs-1.1.2-storage-env` | `main` | TV1 (Backend/PM) | TV2 (Mobile) | **Must** |
| **1.2.1** | Phân hệ Backend: Authentication & Phân quyền | `feat/wbs-1.2.1-auth-jwt` | `main` | TV1 (Backend/PM) | TV3 (QA) | **Must** |
| **1.2.2** | Phân hệ Backend: Quản lý Menu, Danh mục, Chi nhánh | `feat/wbs-1.2.2-menu-branches` | `main` | TV1 (Backend/PM) | TV2 (Mobile) | **Must** |
| **1.2.3** | Phân hệ Backend: Giỏ hàng & Vòng đời Đơn hàng | `feat/wbs-1.2.3-cart-orders` | `main` | TV1 (Backend/PM) | TV3 (QA) | **Must** |
| **1.2.4** | Phân hệ Backend: Cổng VietQR & Webhook Casso | `feat/wbs-1.2.4-vietqr-casso` | `main` | TV1 (Backend/PM) | TV2 (Mobile) | **Must** |
| **1.2.5** | Phân hệ Backend: Thông báo & Đánh giá Review | `feat/wbs-1.2.5-notifications` | `main` | TV1 (Backend/PM) | TV3 (QA) | **Should** |
| **1.3.1** | Flutter Customer: Auth & Hồ sơ khách hàng | `feat/wbs-1.3.1-customer-auth` | `main` | TV2 (Mobile) | TV1 (PM) | **Must** |
| **1.3.2** | Flutter Customer: Trang chủ, Khám phá & Menu | `feat/wbs-1.3.2-customer-home` | `main` | TV2 (Mobile) | TV1 (PM) | **Must** |
| **1.3.3** | Flutter Customer: Chi tiết món, Giỏ hàng & Checkout | `feat/wbs-1.3.3-cart-checkout` | `main` | TV2 (Mobile) | TV1 (PM) | **Must** |
| **1.3.4** | Flutter Customer: Thanh toán VietQR & COD | `feat/wbs-1.3.4-vietqr-dialog` | `main` | TV2 (Mobile) | TV1 (PM) | **Must** |
| **1.3.5** | Flutter Customer: Theo dõi đơn hàng & Mapbox | `feat/wbs-1.3.5-order-tracking` | `main` | TV2 (Mobile) | TV3 (QA) | **Should** |
| **1.3.6** | Flutter Customer: Camera AI Scan & Chatbot UI | `feat/wbs-1.3.6-camera-ai-scan` | `main` | TV2 (Mobile) | TV3 (AI) | **Could** |
| **1.4.1** | Flutter Shipper: Auth Shipper & Bật/Tắt ca trực | `feat/wbs-1.4.1-shipper-auth` | `main` | TV2 (Mobile) | TV1 (PM) | **Must** |
| **1.4.2** | Flutter Shipper: Tiếp nhận & Quản lý danh sách đơn | `feat/wbs-1.4.2-shipper-orders` | `main` | TV2 (Mobile) | TV1 (PM) | **Must** |
| **1.4.3** | Flutter Shipper: Tích hợp Mapbox dẫn đường Routing | `feat/wbs-1.4.3-shipper-routing` | `main` | TV2 (Mobile) | TV3 (QA) | **Should** |
| **1.4.4** | Flutter Shipper: Xác nhận giao hàng & Thu tiền COD | `feat/wbs-1.4.4-shipper-cod` | `main` | TV2 (Mobile) | TV1 (PM) | **Must** |
| **1.5.1** | Admin Portal: Dashboard tổng quan & Biểu đồ KPI | `feat/wbs-1.5.1-admin-dashboard` | `main` | TV3 (Admin/QA) | TV1 (PM) | **Should** |
| **1.5.2** | Admin Portal: Quản lý Thực đơn, Danh mục & Chi nhánh | `feat/wbs-1.5.2-admin-products` | `main` | TV3 (Admin/QA) | TV1 (PM) | **Must** |
| **1.5.3** | Admin Portal: Quản lý Đơn hàng & Điều phối Shipper | `feat/wbs-1.5.3-admin-orders` | `main` | TV3 (Admin/QA) | TV1 (PM) | **Must** |
| **1.5.4** | Admin Portal: Quản lý Tài khoản & Phân quyền Shipper | `feat/wbs-1.5.4-admin-users` | `main` | TV3 (Admin/QA) | TV1 (PM) | **Should** |
| **1.6.1** | AI Service: Dataset 30 món ăn & Tiền xử lý | `feat/wbs-1.6.1-ai-dataset` | `main` | TV3 (Admin/AI) | TV1 (PM) | **Could** |
| **1.6.2** | AI Service: Huấn luyện MobileNetV2 PyTorch | `feat/wbs-1.6.2-ai-training` | `main` | TV3 (Admin/AI) | TV1 (PM) | **Could** |
| **1.6.3** | AI Service: Flask Inference API & ImageNet Fallback | `feat/wbs-1.6.3-ai-flask-api` | `main` | TV3 (Admin/AI) | TV1 (PM) | **Could** |
| **1.7.1** | Kiểm thử tích hợp hệ thống (E2E Smoke Testing) | `test/wbs-1.7.1-e2e-smoke-test` | `main` | TV3 (QA) | Toàn nhóm | **Must** |
| **1.7.2** | Triển khai Production & Bảo mật môi trường | `chore/wbs-1.7.2-prod-hardening` | `main` | TV1 (PM) | Toàn nhóm | **Must** |

---

## 3. LỘ TRÌNH 4 SPRINT & ĐIỂM HỢP NHẤT (SPRINT CADENCE & MERGE CHECKPOINTS)

```mermaid
gantt
    title LỘ TRÌNH GIT FLOW & PULL REQUESTS THEO SPRINT
    dateFormat  YYYY-MM-DD
    axisFormat  Tuần %W

    section Sprint 1: Hạ Tầng & Dữ Liệu
    PR #1: Infra, CI/CD & Env (1.1.1, 1.1.2)           :done, pr1, 2026-11-02, 2026-11-05
    PR #2: Backend Auth & Prisma Core (1.2.1, 1.2.2)    :crit, pr2, 2026-11-05, 2026-11-08
    PR #3: AI Service Flask Fallback (1.6.1, 1.6.3)    :pr3, 2026-11-03, 2026-11-08
    Checkpoint 1: Merge Sprint 1 vào Main              :milestone, cp1, 2026-11-08, 0d

    section Sprint 2: Core Nghiệp Vụ & Đặt Món
    PR #4: Backend Đơn hàng, VietQR & Casso (1.2.3, 1.2.4) :crit, pr4, 2026-11-09, 2026-11-12
    PR #5: Customer App UI & Flow Đặt Món (1.3.1 - 1.3.4)   :crit, pr5, 2026-11-09, 2026-11-13
    PR #6: Admin Web Quản lý Món & Menu (1.5.2)            :pr6, 2026-11-10, 2026-11-13
    Checkpoint 2: Đạt Chuẩn Core MVP Đặt Hàng          :milestone, cp2, 2026-11-13, 0d

    section Sprint 3: Giao Vận & Điều Phối
    PR #7: Shipper App Tiếp nhận & COD (1.4.1, 1.4.2, 1.4.4):crit, pr7, 2026-11-13, 2026-11-15
    PR #8: Admin Dashboard KPI & Điều phối (1.5.1, 1.5.3)  :pr8, 2026-11-13, 2026-11-15
    PR #9: Scan Camera AI & Chatbot Gemini (1.3.6)         :pr9, 2026-11-14, 2026-11-15
    Checkpoint 3: Hoàn tất Toàn bộ Phân hệ             :milestone, cp3, 2026-11-15, 0d

    section Sprint 4: Kiểm Thử E2E & Release v1.0
    PR #10: Bộ Kiểm thử Tự động E2E (1.7.1)                :crit, pr10, 2026-11-15, 2026-11-16
    Release v1.0.0-release Tag trên Main                   :milestone, cp4, 2026-11-16, 0d
```

### 🚩 Chi tiết các mốc kiểm soát hợp nhất (Checkpoints):
* **Checkpoint 1 (Hết ngày 08/11/2026)**:
  - PR `#1`, `#2`, `#3` đã được merge vào `main`.
  - Backend chạy cổng 5000 kết nối cơ sở dữ liệu, seed 30 món ăn mẫu.
  - AI Service chạy cổng 8000 phản hồi `/health` và `/predict`.
* **Checkpoint 2 (Hết ngày 13/11/2026)**:
  - PR `#4`, `#5`, `#6` đã merge vào `main`.
  - Khách hàng trên Flutter App có thể chọn món, thêm vào giỏ, xem mã VietQR và gửi đơn.
  - Admin Web có thể thêm/sửa món và xem đơn hàng mới tạo.
* **Checkpoint 3 (Hết ngày 15/11/2026)**:
  - PR `#7`, `#8`, `#9` đã merge vào `main`.
  - Shipper App đăng nhập, nhận đơn và vuốt xác nhận giao hàng/thu COD.
  - Tránh tranh chấp nhận đơn (Race condition) giữa nhiều tài xế.
* **Checkpoint 4 (Hết ngày 16/11/2026 - Final Release)**:
  - PR `#10` (E2E Test) merge thành công. Chạy script smoke test 100% xanh.
  - Đóng gói tài liệu WBS, sơ đồ PERT/CPM, báo cáo đồ án.
  - Gắn tag Git `v1.0.0-mvp`.

---

## 4. MA TRẬN PHÒNG NGỪA RỦI RO GIT & HỢP NHẤT (GIT RISK & MITIGATION)

| Rủi ro khi làm việc nhóm | Mức độ | Biện pháp ngăn chặn bắt buộc | Kế hoạch giải quyết khi xảy ra xung đột |
| :--- | :---: | :--- | :--- |
| **Xung đột mã nguồn (Merge Conflict)** khi 2 thành viên cùng sửa 1 tệp | 🔴 Cao | Chia nhỏ task, không sửa chéo file phân hệ của nhau (Backend, Mobile, Admin phân lập). | Chạy `git checkout main && git pull`, sau đó `git checkout feat/branch && git rebase main`, giải quyết thủ công từng conflict rồi mới push. |
| **Lộ tệp bí mật (.env, private key)** | 🔴 Cao | Cấu hình `.gitignore` triệt để; có pre-commit hook kiểm tra từ khóa nhạy cảm. | Sử dụng `git rm --cached <file>`, revoke key lập tức trên dashboard Supabase/Cloudinary và tạo key mới. |
| **Nhánh tính năng quá lớn (Mega Branch)** không thể review | 🟡 TB | Giới hạn mỗi nhánh tối đa 3-5 tệp thay đổi và không quá 300 dòng code. | Bắt buộc chia nhỏ nhánh thành nhiều PR con: `part-1`, `part-2`. |
| **Code vỡ trên `main` sau khi merge** | 🔴 Cao | Không merge khi chưa có bằng chứng kiểm thử (Verification logs) trong PR. | Dùng lệnh `git revert <commit-id>` quay lại phiên bản hoạt động tốt trước đó trong vòng 1 phút. |
