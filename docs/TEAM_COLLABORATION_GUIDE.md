# 🤝 HƯỚNG DẪN PHỐI HỢP NHÓM 3 NGƯỜI & QUY TRÌNH MERGE DỰ ÁN

> **Dự án**: Hệ sinh thái đặt món ăn trực tuyến GuGuGaGa  
> **Cơ cấu**: **1 Trưởng nhóm (Repo Owner / Reviewer)** + **3 Thành viên kỹ thuật độc lập**  
> **Mục tiêu**: Làm việc song song trên 3 phân hệ độc lập, không dẫm chân lên code của nhau (Zero Conflict), tạo nhánh, commit chuẩn, đẩy lên GitHub và mở Pull Request để Trưởng nhóm Review & Merge.

---

## 📌 PHẦN 0: DÀNH CHO TRƯỞNG NHÓM (REPO OWNER) – THIẾT LẬP REPO MỚI

Khi bạn tạo một repository mới trên GitHub cá nhân của mình, hãy chạy các lệnh sau tại máy của bạn:

```bash
# 1. Đảm bảo bạn đang ở nhánh main sạch sẽ
git checkout main
git status

# 2. Đổi remote origin sang link repository mới của bạn
# (Thay your-username và your-repo-name bằng thông tin thật của bạn trên GitHub)
git remote set-url origin https://github.com/your-username/your-repo-name.git

# Hoặc nếu chưa có remote:
# git remote add origin https://github.com/your-username/your-repo-name.git

# 3. Đẩy toàn bộ nhánh main gốc lên GitHub mới
git push -u origin main

# 4. Thêm 3 thành viên vào dự án trên GitHub:
# Vào Settings -> Collaborators -> Add people -> Nhập username GitHub của 3 thành viên.
```

---

## 👥 PHÂN CHIA VAI TRÒ & PHẠM VI CODE (ZERO CONFLICT BOUNDARY)

Để 3 thành viên làm việc song song **hoàn toàn không bị xung đột mã nguồn (Merge Conflict)**, dự án được phân lập tuyệt đối theo ranh giới thư mục:

| Thành viên | Vai trò phụ trách | Thư mục được phép code | Thư mục KHÔNG ĐƯỢC sửa |
| :--- | :--- | :--- | :--- |
| **Thành viên 1** | **Backend & DB Lead** | `Backend/`, `prisma/`, `scripts/` | `gugugaga/`, `gugugaga shipper/`, `Admin/`, `AI_Service/` |
| **Thành viên 2** | **Mobile Lead (Flutter)** | `gugugaga/`, `gugugaga shipper/` | `Backend/`, `Admin/`, `AI_Service/` |
| **Thành viên 3** | **Admin Web & AI / QA** | `Admin/`, `AI_Service/`, `scripts/smoke_test_e2e.js` | `Backend/src/`, `gugugaga/`, `gugugaga shipper/` |

---

## 🚀 HƯỚNG DẪN DÀNH CHO THÀNH VIÊN 1: BACKEND & DATABASE LEAD

### 🎯 Nhiệm vụ chính:
* Thiết lập database Supabase PostgreSQL, Prisma ORM, Storage bucket.
* Xây dựng API Auth (JWT, bcrypt), Menu (30 món), Giỏ hàng, Đơn hàng, VietQR Napas247 và Webhook Casso.

### 📋 Chu kỳ làm việc từng Task của TV1:

#### Task 1.1: Cấu hình biến môi trường, Prisma & Supabase Storage
```bash
# 1. Lấy code mới nhất từ main và tạo nhánh
git checkout main
git pull origin main
git checkout -b feat/wbs-1.1.1-backend-infra

# 2. Thực hiện code trong thư mục Backend/
# Tạo Backend/.env.example, hoàn thiện Backend/prisma/schema.prisma

# 3. Commit và Push
git add Backend/
git commit -m "feat(wbs-1.1.1): cau hinh bien moi truong mau va schema prisma supabase"
git push -u origin feat/wbs-1.1.1-backend-infra

# 4. Lên GitHub mở Pull Request gửi Trưởng nhóm với tiêu đề:
# [WBS-1.1.1] feat: Thiết lập hạ tầng Backend Prisma PostgreSQL và Storage
```

#### Task 1.2: API Authentication & Phân quyền JWT
```bash
git checkout main
git pull origin main
git checkout -b feat/wbs-1.2.1-auth-jwt

# Code Auth service & controller
git add Backend/
git commit -m "feat(wbs-1.2.1): hoan thien auth dang ky dang nhap jwt bcrypt"
git push -u origin feat/wbs-1.2.1-auth-jwt

# Mở PR: [WBS-1.2.1] feat: Backend Authentication và phân quyền JWT
```

#### Task 1.3: Quản lý Menu, Danh mục & Seed 30 Món ăn
```bash
git checkout main
git pull origin main
git checkout -b feat/wbs-1.2.2-menu-seed

# Code Product CRUD & script seed 30 món có ảnh
git add Backend/
git commit -m "feat(wbs-1.2.2): api crud san pham danh muc va seed 30 mon an mau"
git push -u origin feat/wbs-1.2.2-menu-seed

# Mở PR: [WBS-1.2.2] feat: Quản lý thực đơn và nạp dữ liệu mẫu 30 món ăn
```

#### Task 1.4: Vòng đời đơn hàng, Sinh mã VietQR & Webhook Casso
```bash
git checkout main
git pull origin main
git checkout -b feat/wbs-1.2.4-vietqr-casso

# Code Order service, VietQR và Webhook đối soát Casso
git add Backend/
git commit -m "feat(wbs-1.2.4): luong dat mon sinh ma vietqr va webhook doi soat casso"
git push -u origin feat/wbs-1.2.4-vietqr-casso

# Mở PR: [WBS-1.2.4] feat: Vòng đời đơn hàng, thanh toán VietQR và Webhook Casso
```

---

## 📱 HƯỚNG DẪN DÀNH CHO THÀNH VIÊN 2: MOBILE APP LEAD (FLUTTER)

### 🎯 Nhiệm vụ chính:
* Nâng cấp giao diện Customer App: Shimmer Loading, hiển thị 30 món ăn, giỏ hàng, dialog VietQR, camera viewfinder scan AI.
* Hoàn thiện Shipper App: Bật/tắt ca online, nhận đơn, hiển thị HUD giao hàng và vuốt thu tiền COD.

### 📋 Chu kỳ làm việc từng Task của TV2:

#### Task 2.1: Đồng bộ Model Dart & Shimmer Loading Trang Chủ Khách Hàng
```bash
# 1. Lấy code mới nhất từ main và tạo nhánh
git checkout main
git pull origin main
git checkout -b feat/wbs-1.3.2-customer-home-menu

# 2. Code trong thư mục gugugaga/
# Cập nhật lib/models/, lib/widgets/food_image.dart (Shimmer), lib/screens/home/

# 3. Commit và Push
git add gugugaga/
git commit -m "feat(wbs-1.3.2): tich hop shimmer loading va giao dien 30 mon trang chu"
git push -u origin feat/wbs-1.3.2-customer-home-menu

# 4. Mở PR: [WBS-1.3.2] feat: Customer App - Trang chủ, Shimmer Loading và danh sách món ăn
```

#### Task 2.2: Luồng Giỏ Hàng, Checkout & Màn Hình Thanh Toán VietQR
```bash
git checkout main
git pull origin main
git checkout -b feat/wbs-1.3.4-customer-checkout-vietqr

# Code lib/screens/cart/, lib/screens/payment/payment_screen.dart (VietQR countdown)
git add gugugaga/
git commit -m "feat(wbs-1.3.4): luong checkout gio hang va dialog hien thi vietqr"
git push -u origin feat/wbs-1.3.4-customer-checkout-vietqr

# Mở PR: [WBS-1.3.4] feat: Customer App - Giỏ hàng, đặt món và thanh toán VietQR
```

#### Task 2.3: Camera AI Scan Món Ăn (Viewfinder Overlay & BottomSheet)
```bash
git checkout main
git pull origin main
git checkout -b feat/wbs-1.3.6-camera-ai-scan

# Code khung ngắm Viewfinder, gửi ảnh tới AI Service, hiển thị kết quả gợi ý
git add gugugaga/
git commit -m "feat(wbs-1.3.6): khung ngam scan camera ai va bottomsheet goi y mon"
git push -u origin feat/wbs-1.3.6-camera-ai-scan

# Mở PR: [WBS-1.3.6] feat: Khung ngắm Camera AI quét món ăn và gợi ý thực đơn
```

#### Task 2.4: Shipper App - Đăng Nhập, Nhận Đơn, HUD & Vuốt Thu COD
```bash
git checkout main
git pull origin main
git checkout -b feat/wbs-1.4.2-shipper-app-flow

# Code trong thư mục "gugugaga shipper/"
git add "gugugaga shipper/"
git commit -m "feat(wbs-1.4.2): shipper app nhan don hud lai xe va vuot xac nhan thu cod"
git push -u origin feat/wbs-1.4.2-shipper-app-flow

# Mở PR: [WBS-1.4.2] feat: Shipper App - Quy trình tiếp nhận đơn hàng và thu tiền COD
```

---

## 💻 HƯỚNG DẪN DÀNH CHO THÀNH VIÊN 3: ADMIN WEB & AI / QA LEAD

### 🎯 Nhiệm vụ chính:
* Hoàn thiện Flask AI Service (endpoint `/predict`, ImageNet fallback, script test).
* Xây dựng Admin Web: Bảng quản lý món có thumbnail ảnh, upload ảnh lên Supabase Storage, Quản lý đơn và gán tài xế, Dashboard thống kê.
* Viết script tự động Smoke Test E2E kiểm tra toàn bộ 5 phân hệ.

### 📋 Chu kỳ làm việc từng Task của TV3:

#### Task 3.1: Hoàn Thiện Dịch Vụ AI Flask & Script Test
```bash
# 1. Lấy code mới nhất từ main và tạo nhánh
git checkout main
git pull origin main
git checkout -b feat/wbs-1.6.3-ai-flask-service

# 2. Code trong thư mục AI_Service/
# Hoàn thiện AI_Service/app.py và viết test_ai_service.py

# 3. Commit và Push
git add AI_Service/
git commit -m "feat(wbs-1.6.3): flask inference api, imagenet fallback mapper va script test"
git push -u origin feat/wbs-1.6.3-ai-flask-service

# 4. Mở PR: [WBS-1.6.3] feat: AI Service - Flask API nhận diện món ăn và kiểm thử tự động
```

#### Task 3.2: Admin Web - Quản Lý Sản Phẩm & Upload Ảnh Lên Storage
```bash
git checkout main
git pull origin main
git checkout -b feat/wbs-1.5.2-admin-products-storage

# Code trong Admin/src/pages/Products.jsx và ProductDialog.jsx
git add Admin/
git commit -m "feat(wbs-1.5.2): quan ly san pham admin va modal upload anh len storage"
git push -u origin feat/wbs-1.5.2-admin-products-storage

# Mở PR: [WBS-1.5.2] feat: Admin Web - Quản lý thực đơn và tải ảnh lên Storage
```

#### Task 3.3: Admin Web - Dashboard Thống Kê KPI & Điều Phối Đơn Hàng
```bash
git checkout main
git pull origin main
git checkout -b feat/wbs-1.5.1-admin-dashboard-orders

# Code trong Admin/src/pages/Dashboard.jsx và Admin/src/pages/Orders.jsx
git add Admin/
git commit -m "feat(wbs-1.5.1): dashboard thong ke doanh thu va tabs quan ly dieu phoi don hang"
git push -u origin feat/wbs-1.5.1-admin-dashboard-orders

# Mở PR: [WBS-1.5.1] feat: Admin Web - Thống kê KPI và điều phối tài xế
```

#### Task 3.4: Xây Dựng Script Smoke Test E2E Toàn Diện
```bash
git checkout main
git pull origin main
git checkout -b test/wbs-1.7.1-smoke-test-e2e

# Viết scripts/smoke_test_e2e.js kiểm tra liên thông 5 phân hệ
git add scripts/
git commit -m "test(wbs-1.7.1): script smoke test e2e tu dong kiem tra lien thong 5 phan he"
git push -u origin test/wbs-1.7.1-smoke-test-e2e

# Mở PR: [WBS-1.7.1] test: Script kiểm thử tự động E2E Smoke Test toàn hệ sinh thái
```

---

## 👑 HƯỚNG DẪN DÀNH CHO TRƯỞNG NHÓM (REVIEW & MERGE PR)

Là Trưởng nhóm (Repo Owner), bạn đóng vai trò là "người gác cổng" (**Quality Gatekeeper**). Bạn kiểm soát chất lượng và hợp nhất code theo 2 cách:

### Cách 1: Review & Merge trực tiếp trên Giao Diện GitHub (Khuyên dùng)
1. Khi thành viên gửi thông báo PR hoặc bạn nhận được thông báo trên GitHub:
   * Vào tab **Pull requests** của repository.
   * Chọn PR cần kiểm tra (ví dụ: `[WBS-1.2.1] feat: Backend Authentication`).
2. **Kiểm tra (Code Review)**:
   * Bấm vào tab **Files changed** để xem mã nguồn thành viên đã viết.
   * Xác nhận thành viên **chỉ sửa đúng thư mục được phân công**, không sửa lấn sang thư mục của người khác.
   * Đọc phần **Bằng chứng kiểm thử (Test Evidence)** trong mô tả PR.
3. **Phê duyệt & Hợp nhất (Merge)**:
   * Bấm nút **Review changes** $\rightarrow$ chọn **Approve**.
   * Bấm nút **Merge pull request** $\rightarrow$ chọn **Squash and merge** (hoặc **Rebase and merge**) để lịch sử commit của `main` luôn gọn đẹp.
   * Bấm **Confirm squash and merge**.
   * Bấm nút **Delete branch** để xóa nhánh phụ vừa merge.

---

### Cách 2: Merge bằng dòng lệnh Git (Git CLI) trên máy tính

Nếu bạn muốn kiểm tra code chạy thử trên máy tính của mình trước khi merge:

```bash
# 1. Chuyển về main và lấy nhánh mới nhất từ GitHub
git checkout main
git pull origin main

# 2. Lấy nhánh của thành viên về máy kiểm tra (ví dụ nhánh của TV1)
git fetch origin feat/wbs-1.2.1-auth-jwt
git checkout feat/wbs-1.2.1-auth-jwt

# 3. Chạy thử kiểm tra cục bộ (ví dụ test Backend)
cd Backend && npm test
cd ..

# 4. Khi thấy code chạy tốt, chuyển về main và hợp nhất (Merge)
git checkout main
git merge --no-ff feat/wbs-1.2.1-auth-jwt -m "Merge pull request: [WBS-1.2.1] Backend Authentication và phân quyền JWT"

# 5. Đẩy nhánh main đã merge lên GitHub
git push origin main

# 6. Xóa nhánh feature đã merge
git branch -d feat/wbs-1.2.1-auth-jwt
git push origin --delete feat/wbs-1.2.1-auth-jwt
```

---

## ⏱ THỨ TỰ HỢP NHẤT KHUYÊN NGHỊ CHO TRƯỞNG NHÓM (MERGE ORDER)

Để các thành viên có đầy đủ API và dữ liệu làm việc, bạn nên duyệt và merge theo 4 đợt:

```
┌────────────────────────────────────────────────────────────────────────┐
│ ĐỢT 1: NỀN TẢNG HẠ TẦNG (Sprint 1)                                     │
│ 1. Merge PR của TV1: feat/wbs-1.1.1-backend-infra (Setup DB & Storage) │
│ 2. Merge PR của TV3: feat/wbs-1.6.3-ai-flask-service (Flask AI API)    │
│ 3. Merge PR của TV1: feat/wbs-1.2.1-auth-jwt (API Đăng ký / Đăng nhập) │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ ĐỢT 2: THỰC ĐƠN, ĐẶT MÓN & ADMIN MÓN (Sprint 2)                        │
│ 4. Merge PR của TV1: feat/wbs-1.2.2-menu-seed (API 30 món ăn mẫu)      │
│ 5. Merge PR của TV2: feat/wbs-1.3.2-customer-home-menu (Trang chủ App) │
│ 6. Merge PR của TV3: feat/wbs-1.5.2-admin-products-storage (Web Món)  │
│ 7. Merge PR của TV1: feat/wbs-1.2.4-vietqr-casso (VietQR & Webhook)    │
│ 8. Merge PR của TV2: feat/wbs-1.3.4-customer-checkout-vietqr (Thanh toá│
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ ĐỢT 3: CAMERA AI, SHIPPER & ĐIỀU PHỐI (Sprint 3)                       │
│ 9. Merge PR của TV2: feat/wbs-1.3.6-camera-ai-scan (Scan món AI)       │
│ 10. Merge PR của TV2: feat/wbs-1.4.2-shipper-app-flow (Shipper App)    │
│ 11. Merge PR của TV3: feat/wbs-1.5.1-admin-dashboard-orders (Điều phối)│
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ ĐỢT 4: KIỂM THỬ E2E & RELEASE v1.0 (Sprint 4)                          │
│ 12. Merge PR của TV3: test/wbs-1.7.1-smoke-test-e2e (Test toàn hệ thống│
│ 13. Trưởng nhóm gắn Git Tag: v1.0.0-mvp và đóng gói đồ án              │
└────────────────────────────────────────────────────────────────────────┘
```
