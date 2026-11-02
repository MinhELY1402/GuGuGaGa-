# 📋 BẢNG THEO DÕI CÔNG VIỆC CHUẨN THỰC TẾ (WBS + GIT BRANCHING + PULL REQUEST)

> 📅 **Khoảng thời gian**: 02/11/2026 – 16/11/2026  
> 🏷 **Dự án**: Hệ sinh thái GuGuGaGa – Đặt món ăn trực tuyến tích hợp AI  
> 📌 **Quy tắc làm việc**: Mỗi công việc phải tạo **Nhánh Git riêng** $\rightarrow$ **Commit chuẩn** $\rightarrow$ **Mở Pull Request** $\rightarrow$ **Review chéo** $\rightarrow$ **Merge vào main**.

---

## 🚀 SPRINT 1: NỀN TẢNG HẠ TẦNG, DATABASE & AI CORE (02/11 – 08/11/2026)

### Task 1.1: [WBS 1.1.1 & 1.1.2] Khởi tạo Hạ tầng, Biến Môi Trường Mẫu & Supabase Storage
- [ ] **Task 1.1: [WBS 1.1.1 & 1.1.2] Khởi tạo Hạ tầng, Biến Môi Trường Mẫu & Supabase Storage**
  - **Người thực hiện (Assignee):** TV1 (PM & Backend Lead) | **Người Review:** TV3 (QA/AI)
  - **Nhánh Git (Branch):** `chore/wbs-1.1.1-repo-infra`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b chore/wbs-1.1.1-repo-infra`
  - **Mô tả công việc:**
    1. Thiết lập các file `.env.example` chuẩn cho `Backend/`, `Admin/`, `gugugaga/`, `gugugaga shipper/`.
    2. Cấu hình Prisma kết nối cơ sở dữ liệu PostgreSQL (Supabase) và tạo bucket `food-images` public.
    3. Cấu hình quy chuẩn Git (PR template, gitignore không bỏ sót secrets).
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Có đầy đủ `.env.example` ở tất cả các phân hệ, không để lộ secret key trong git diff.
    - [ ] Chạy `npx prisma db push` trong `Backend/` tạo đầy đủ bảng trên PostgreSQL.
    - [ ] Bucket lưu ảnh `food-images` sẵn sàng nhận file.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] `cd Backend; npx prisma studio` $\rightarrow$ Mở bảng dữ liệu không lỗi.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "chore(wbs-1.1.1): khoi tao bien moi truong mau va schema prisma supabase"`
    - PR Title: `[WBS-1.1.1] chore: Thiết lập hạ tầng Prisma Supabase và biến môi trường mẫu`
    - Lệnh Merge: `git checkout main && git merge --no-ff chore/wbs-1.1.1-repo-infra && git branch -d chore/wbs-1.1.1-repo-infra`
  - **Tệp chỉnh sửa:** `Backend/prisma/schema.prisma`, `Backend/.env.example`, `Admin/.env.example`, `.github/pull_request_template.md`.

---

### Task 1.2: [WBS 1.2.1] Backend Core: Authentication, Phân Quyền JWT & Bcrypt
- [ ] **Task 1.2: [WBS 1.2.1] Backend Core: Authentication, Phân Quyền JWT & Bcrypt**
  - **Người thực hiện (Assignee):** TV1 (PM & Backend Lead) | **Người Review:** TV3 (QA)
  - **Nhánh Git (Branch):** `feat/wbs-1.2.1-auth-jwt`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b feat/wbs-1.2.1-auth-jwt`
  - **Mô tả công việc:**
    1. Xây dựng dịch vụ đăng ký, đăng nhập tài khoản bằng bcrypt mã hóa mật khẩu trên Prisma PostgreSQL.
    2. Phát hành JWT token có hạn 7 ngày kèm middleware phân quyền (Customer, Shipper, Admin).
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Đăng ký người dùng mới thành công, mật khẩu trong database được băm bcrypt an toàn.
    - [ ] Đăng nhập trả về token JWT hợp lệ và đúng thông tin role.
    - [ ] Token sai hoặc hết hạn bị chặn với mã `401 Unauthorized`.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] Gửi request `POST http://localhost:5000/api/user/auth/login` bằng Postman hoặc curl trả về mã 200 kèm access token.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "feat(wbs-1.2.1): hoan thien auth jwt voi bcrypt tren prisma postgresql"`
    - PR Title: `[WBS-1.2.1] feat: Backend Authentication và phân quyền JWT`
  - **Tệp chỉnh sửa:** `Backend/src/services/auth.service.js`, `Backend/src/controllers/auth.controller.js`, `Backend/src/routes/user.route.js`.

---

### Task 1.3: [WBS 1.2.2] Backend Core: Quản Lý Menu, Danh Mục & Seed 30 Món Ăn Mẫu
- [ ] **Task 1.3: [WBS 1.2.2] Backend Core: Quản Lý Menu, Danh Mục & Seed 30 Món Ăn Mẫu**
  - **Người thực hiện (Assignee):** TV1 (PM & Backend Lead) | **Người Review:** TV2 (Mobile)
  - **Nhánh Git (Branch):** `feat/wbs-1.2.2-menu-branches`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b feat/wbs-1.2.2-menu-branches`
  - **Mô tả công việc:**
    1. Lập trình API CRUD danh mục món, sản phẩm món ăn, topping và chi nhánh cửa hàng.
    2. Nâng cấp script `Backend/prisma/seed.js`: nạp 30 món ăn đặc sản Việt Nam kèm link ảnh chất lượng cao trên Supabase Storage / CDN.
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Chạy `npm run seed` trong `Backend/` nạp đủ 30 món ăn, 100% có link ảnh hợp lệ.
    - [ ] Endpoint `GET /api/products` trả về danh sách 30 món ăn sắp xếp theo danh mục.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] `cd Backend; npm run seed` báo thành công. Mở trình duyệt `http://localhost:5000/api/products` thấy JSON 30 món.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "feat(wbs-1.2.2): api crud menu danh muc va script seed 30 mon an mau"`
    - PR Title: `[WBS-1.2.2] feat: Quản lý thực đơn, danh mục và seed dữ liệu 30 món`
  - **Tệp chỉnh sửa:** `Backend/src/services/product.service.js`, `Backend/src/services/category.service.js`, `Backend/prisma/seed.js`.

---

### Task 1.4: [WBS 1.6.1 & 1.6.3] AI Service: Flask Inference API & Fallback ImageNet Mapper
- [ ] **Task 1.4: [WBS 1.6.1 & 1.6.3] AI Service: Flask Inference API & Fallback ImageNet Mapper**
  - **Người thực hiện (Assignee):** TV3 (Frontend & AI Dev) | **Người Review:** TV1 (PM)
  - **Nhánh Git (Branch):** `feat/wbs-1.6.3-ai-flask-api`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b feat/wbs-1.6.3-ai-flask-api`
  - **Mô tả công việc:**
    1. Đảm bảo dịch vụ Flask chạy trên cổng 8000 với 2 endpoint: `GET /health` và `POST /predict`.
    2. Tích hợp chế độ `Fallback ImageNet Mapper`: nếu chưa nạp file trọng số custom `.pth`, tự động ánh xạ nhãn ImageNet sang danh sách 30 món của GuGuGaGa.
    3. Viết script kiểm thử tự động `AI_Service/test_ai_service.py`.
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Endpoint `GET http://localhost:8000/health` trả về `{"status": "healthy"}`.
    - [ ] Gửi file ảnh bất kỳ lên `POST /predict` trả về Top-3 dự đoán món ăn kèm độ tin cậy trong thời gian $< 500$ms.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] Chạy `cd AI_Service; python test_ai_service.py` $\rightarrow$ In kết quả `PASS (Latency: <500ms)`.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "feat(wbs-1.6.3): flask inference api va imagenet fallback mapper"`
    - PR Title: `[WBS-1.6.3] feat: Dịch vụ AI Flask nhận diện món ăn và Fallback ImageNet`
  - **Tệp chỉnh sửa:** `AI_Service/app.py`, `AI_Service/test_ai_service.py`, `AI_Service/requirements.txt`.

---

### 🚩 CHECKPOINT 1 (HẾT SPRINT 1 - 08/11/2026):
- [ ] Toàn bộ PR `#1`, `#2`, `#3`, `#4` đã qua Code Review và được Merge vào nhánh `main`.
- [ ] Backend khởi động không lỗi ở cổng 5000, kết nối trơn tru tới cơ sở dữ liệu.
- [ ] AI Service chạy ổn định ở cổng 8000.

---

## 🛒 SPRINT 2: VÒNG ĐỜI ĐƠN HÀNG, THANH TOÁN VIETQR & APP KHÁCH HÀNG (09/11 – 13/11/2026)

### Task 2.1: [WBS 1.2.3 & 1.2.4] Backend: Giỏ Hàng, Vòng Đời Đơn Hàng & Webhook VietQR/Casso
- [ ] **Task 2.1: [WBS 1.2.3 & 1.2.4] Backend: Giỏ Hàng, Vòng Đời Đơn Hàng & Webhook VietQR/Casso**
  - **Người thực hiện (Assignee):** TV1 (PM & Backend Lead) | **Người Review:** TV2 (Mobile)
  - **Nhánh Git (Branch):** `feat/wbs-1.2.4-vietqr-casso`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b feat/wbs-1.2.4-vietqr-casso`
  - **Mô tả công việc:**
    1. Xây dựng dịch vụ Giỏ hàng (`cart.service.js`) và Đơn hàng (`order.service.js`): tính tổng tiền, tính phí ship theo tọa độ.
    2. Tích hợp tạo mã VietQR chuẩn Napas247 theo mã đơn hàng.
    3. Xây dựng Webhook tiếp nhận biến động số dư Casso (`/webhook-casso`), tự động cập nhật trạng thái đơn sang `PAID` / `PROCESSING`.
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Tạo đơn mới lưu đủ món vào bảng `order_items`.
    - [ ] Mã VietQR sinh ra quét đúng số tiền và nội dung chuyển khoản `GUGUGAGA <orderId>`.
    - [ ] Webhook đối soát số tiền chính xác, xử lý trùng lặp giao dịch (Idempotency) an toàn.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] Chạy script test tạo đơn và giả lập gửi webhook Casso $\rightarrow$ Trạng thái đơn đổi sang `PAID`.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "feat(wbs-1.2.4): luong don hang, sinh ma vietqr va webhook doi soat casso"`
    - PR Title: `[WBS-1.2.4] feat: Vòng đời đơn hàng, cổng thanh toán VietQR và Webhook Casso`
  - **Tệp chỉnh sửa:** `Backend/src/services/order.service.js`, `Backend/src/services/cart.service.js`, `Backend/src/controllers/order.controller.js`.

---

### Task 2.2: [WBS 1.3.1, 1.3.2 & 1.3.3] Flutter Customer: Dọn Repo, Khám Phá Món & Giỏ Hàng
- [ ] **Task 2.2: [WBS 1.3.1, 1.3.2 & 1.3.3] Flutter Customer: Dọn Repo, Khám Phá Món & Giỏ Hàng**
  - **Người thực hiện (Assignee):** TV2 (Mobile Lead) | **Người Review:** TV1 (PM)
  - **Nhánh Git (Branch):** `feat/wbs-1.3.2-customer-home`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b feat/wbs-1.3.2-customer-home`
  - **Mô tả công việc:**
    1. Xóa thư mục rác lồng `gugugaga shipper/chickengoo` để dọn dẹp sạch repo.
    2. Nâng cấp Customer App: hiển thị danh sách 30 món ăn từ Backend với hiệu ứng Shimmer Loading mượt mà.
    3. Hoàn thiện luồng thêm món, chọn số lượng, topping và cập nhật tổng tiền trong giỏ hàng.
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Thư mục `gugugaga shipper/chickengoo` được loại bỏ hoàn toàn.
    - [ ] Hình ảnh món ăn hiển thị sắc nét trên Trang chủ Customer App.
    - [ ] Thêm món vào giỏ hàng hoạt động mượt mà, tính đúng tổng tiền.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] `cd gugugaga; flutter run -d chrome` (hoặc emulator) $\rightarrow$ Thêm món vào giỏ hàng thành công.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "feat(wbs-1.3.2): don chickengoo, nang cap shimmer loading va gio hang customer"`
    - PR Title: `[WBS-1.3.2] feat: Customer App - Khám phá món ăn, Shimmer Loading và Giỏ hàng`
  - **Tệp chỉnh sửa:** `gugugaga/lib/screens/home/`, `gugugaga/lib/providers/cart_provider.dart`, `gugugaga/lib/widgets/food_image.dart`.

---

### Task 2.3: [WBS 1.3.4 & 1.3.6] Flutter Customer: Dialog VietQR & Camera Scan Nhận Diện AI
- [ ] **Task 2.3: [WBS 1.3.4 & 1.3.6] Flutter Customer: Dialog VietQR & Camera Scan Nhận Diện AI**
  - **Người thực hiện (Assignee):** TV2 (Mobile Lead) | **Người Review:** TV3 (AI Dev)
  - **Nhánh Git (Branch):** `feat/wbs-1.3.6-camera-ai-scan`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b feat/wbs-1.3.6-camera-ai-scan`
  - **Mô tả công việc:**
    1. Màn hình thanh toán: Hiển thị mã VietQR động, nút sao chép số tài khoản 1 chạm và bộ đếm thời gian giao dịch.
    2. Tích hợp Camera AI Scan: Khung ngắm quét món ăn (Viewfinder), gửi ảnh tới AI Service và hiển thị BottomSheet kết quả gợi ý món.
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Bấm Scan ảnh món ăn $\rightarrow$ Nhận diện và gợi ý món tương ứng trong thực đơn.
    - [ ] Màn hình thanh toán hiển thị mã VietQR tải từ Backend và hỗ trợ polling kiểm tra trạng thái đơn.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] Mở màn hình scan trên app, chọn ảnh "Phở bò" $\rightarrow$ Xem kết quả hiển thị Top-3 gợi ý.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "feat(wbs-1.3.6): viewfinder scan mon camera ai va dialog thanh toan vietqr"`
    - PR Title: `[WBS-1.3.6] feat: Khung ngắm Camera AI nhận diện món và thanh toán VietQR`
  - **Tệp chỉnh sửa:** `gugugaga/lib/screens/home/home_screen.dart`, `gugugaga/lib/screens/payment/payment_screen.dart`.

---

### Task 2.4: [WBS 1.5.2] Admin Portal: Quản Lý Sản Phẩm, Upload Ảnh & Đồng Bộ Backend
- [ ] **Task 2.4: [WBS 1.5.2] Admin Portal: Quản Lý Sản Phẩm, Upload Ảnh & Đồng Bộ Backend**
  - **Người thực hiện (Assignee):** TV3 (Admin & QA Dev) | **Người Review:** TV1 (PM)
  - **Nhánh Git (Branch):** `feat/wbs-1.5.2-admin-products`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b feat/wbs-1.5.2-admin-products`
  - **Mô tả công việc:**
    1. Nâng cấp bảng sản phẩm `Products.jsx`: hiển thị hình ảnh thumbnail, lọc theo danh mục, sửa giá tiền và trạng thái món.
    2. Tích hợp upload ảnh trực tiếp lên Supabase Storage qua API Backend tại modal thêm/sửa món (`ProductDialog.jsx`).
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Admin có thể thêm món mới kèm ảnh tải từ máy tính, ảnh xuất hiện ngay trên bảng danh sách.
    - [ ] Thay đổi giá hoặc trạng thái món ăn được lưu trực tiếp vào cơ sở dữ liệu.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] `cd Admin; npm run dev` $\rightarrow$ Mở `http://localhost:5173`, vào trang Quản lý món và thêm 1 món thử nghiệm.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "feat(wbs-1.5.2): quan ly thuc don va upload anh san pham len storage"`
    - PR Title: `[WBS-1.5.2] feat: Admin Portal - Quản lý thực đơn và tải ảnh lên Storage`
  - **Tệp chỉnh sửa:** `Admin/src/pages/Products.jsx`, `Admin/src/components/dialogs/ProductDialog.jsx`.

---

### 🚩 CHECKPOINT 2 (HẾT SPRINT 2 - 13/11/2026):
- [ ] Toàn bộ PR `#5`, `#6`, `#7`, `#8` đã được review và merge vào `main`.
- [ ] Khách hàng trên app có thể tạo đơn hàng, sinh mã VietQR và scan nhận diện món bằng AI.
- [ ] Admin Portal xem và cập nhật được toàn bộ thực đơn 30 món ăn.

---

## 🛵 SPRINT 3: GIAO VẬN SHIPPER & ĐIỀU PHỐI ĐƠN HÀNG (13/11 – 15/11/2026)

### Task 3.1: [WBS 1.4.1, 1.4.2 & 1.4.4] Shipper App: Tiếp Nhận Đơn, HUD Giao Hàng & Thu COD
- [ ] **Task 3.1: [WBS 1.4.1, 1.4.2 & 1.4.4] Shipper App: Tiếp Nhận Đơn, HUD Giao Hàng & Thu COD**
  - **Người thực hiện (Assignee):** TV2 (Mobile Lead) | **Người Review:** TV1 (PM)
  - **Nhánh Git (Branch):** `feat/wbs-1.4.2-shipper-orders`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b feat/wbs-1.4.2-shipper-orders`
  - **Mô tả công việc:**
    1. Xây dựng giao diện danh sách đơn chờ giao với nút gạt Online/Offline.
    2. Chi tiết đơn hàng: Nút gọi nhanh điện thoại khách hàng, nút mở chỉ đường.
    3. Thanh trượt "Vuốt để xác nhận giao hàng & Thu tiền COD" chống bấm nhầm khi đang di chuyển.
    4. Xử lý khóa đơn an toàn để chống tranh chấp khi 2 tài xế bấm nhận đơn cùng lúc.
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Tài xế đăng nhập thành công với tài khoản mẫu `shipper@example.com`.
    - [ ] Bấm nhận đơn: đơn hàng cập nhật trạng thái `DELIVERING` cho tài xế đó.
    - [ ] Đơn COD yêu cầu xác nhận đã thu đủ tiền mặt trước khi chuyển `DELIVERED`.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] Chạy `cd "gugugaga shipper"; flutter run` $\rightarrow$ Thử luồng nhận và hoàn tất đơn.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "feat(wbs-1.4.2): tiep nhan don hang, hud lai xe va vuot xac nhan thu cod"`
    - PR Title: `[WBS-1.4.2] feat: Shipper App - Quy trình giao hàng và thu tiền COD`
  - **Tệp chỉnh sửa:** `gugugaga shipper/lib/screens/home_screen.dart`, `order_detail_screen.dart`.

---

### Task 3.2: [WBS 1.5.1 & 1.5.3] Admin Portal: Dashboard Thống Kê & Điều Phối Đơn Hàng
- [ ] **Task 3.2: [WBS 1.5.1 & 1.5.3] Admin Portal: Dashboard Thống Kê & Điều Phối Đơn Hàng**
  - **Người thực hiện (Assignee):** TV3 (Admin & QA Dev) | **Người Review:** TV1 (PM)
  - **Nhánh Git (Branch):** `feat/wbs-1.5.1-admin-dashboard`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b feat/wbs-1.5.1-admin-dashboard`
  - **Mô tả công việc:**
    1. Trang Dashboard: Thống kê số lượng đơn theo ngày, doanh thu, tài xế đang trực.
    2. Trang Quản lý đơn hàng (`Orders.jsx`): Tabs lọc trạng thái đơn nhanh (`Tất cả`, `Chờ duyệt`, `Đang giao`, `Hoàn tất`), modal gán tài xế thủ công khi cần.
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Lọc đơn theo tab trạng thái hoạt động tức thì, không cần reload trang.
    - [ ] Admin có thể gán tài xế trực tiếp cho đơn hàng đang chờ tiếp nhận.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] Mở trang Đơn hàng trên Admin, chọn 1 đơn mới và gán cho tài xế mẫu.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "feat(wbs-1.5.1): dashboard thong ke kpi va dieu phoi don hang admin"`
    - PR Title: `[WBS-1.5.1] feat: Admin Portal - Thống kê KPI và điều phối tài xế`
  - **Tệp chỉnh sửa:** `Admin/src/pages/Dashboard.jsx`, `Admin/src/pages/Orders.jsx`.

---

### 🚩 CHECKPOINT 3 (HẾT SPRINT 3 - 15/11/2026):
- [ ] PR `#9`, `#10` đã được review và merge vào `main`.
- [ ] Toàn bộ 5 phân hệ (Backend, Admin, Customer, Shipper, AI) đã vận hành liên thông.

---

## 🏆 SPRINT 4: KIỂM THỬ E2E, ĐÓNG GÓI BÁO CÁO & RELEASE v1.0 (15/11 – 16/11/2026)

### Task 4.1: [WBS 1.7.1] Bộ Kịch Bản Kiểm Thử Tự Động Smoke Test E2E
- [ ] **Task 4.1: [WBS 1.7.1] Bộ Kịch Bản Kiểm Thử Tự Động Smoke Test E2E**
  - **Người thực hiện (Assignee):** TV3 (QA Dev) | **Người Review:** Toàn nhóm
  - **Nhánh Git (Branch):** `test/wbs-1.7.1-e2e-smoke-test`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b test/wbs-1.7.1-e2e-smoke-test`
  - **Mô tả công việc:**
    1. Viết script `scripts/smoke_test_e2e.js`:
       - Kiểm tra tính sẵn sàng của Backend (5000), Admin (5173), AI Service (8000).
       - Tự động chạy toàn bộ chu trình nghiệp vụ: Đăng nhập khách $\rightarrow$ Lấy menu $\rightarrow$ Đặt món $\rightarrow$ Sinh VietQR $\rightarrow$ Giả lập Webhook Casso $\rightarrow$ Tài xế nhận đơn $\rightarrow$ Hoàn tất giao hàng.
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Script kiểm thử chạy thành công 100% không báo lỗi.
    - [ ] Xuất bảng tổng kết kết quả kiểm thử rõ ràng phục vụ báo cáo đồ án.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] `node scripts/smoke_test_e2e.js` $\rightarrow$ In bảng kết quả toàn bộ các bước đều PASS.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "test(wbs-1.7.1): bo kich ban smoke test e2e toan dien 5 phan he"`
    - PR Title: `[WBS-1.7.1] test: Script kiểm thử tự động E2E Smoke Test toàn hệ thống`
  - **Tệp chỉnh sửa:** `scripts/smoke_test_e2e.js`, `package.json`.

---

### Task 4.2: [WBS 1.7.2] Hoàn Thiện Hồ Sơ Đồ Án, Đóng Gói Release v1.0.0 & Bàn Giao
- [ ] **Task 4.2: [WBS 1.7.2] Hoàn Thiện Hồ Sơ Đồ Án, Đóng Gói Release v1.0.0 & Bàn Giao**
  - **Người thực hiện (Assignee):** TV1 (PM & Backend Lead) | **Người Review:** Toàn nhóm
  - **Nhánh Git (Branch):** `docs/wbs-1.7.2-release-v1`
  - **Lệnh tạo nhánh:** `git checkout main && git pull origin main && git checkout -b docs/wbs-1.7.2-release-v1`
  - **Mô tả công việc:**
    1. Cập nhật `README.md`, `docs/WBS_Project_Management.md`, `docs/GIT_WORKFLOW.md` và `CHANGELOG.md`.
    2. Merge PR cuối cùng vào `main`.
    3. Gắn tag Git release: `git tag -a v1.0.0-mvp -m "Release v1.0.0: Hoan thanh 100% MVP theo WBS" && git push origin v1.0.0-mvp`.
  - **Tiêu chí nghiệm thu (Acceptance Criteria):**
    - [ ] Toàn bộ tài liệu khớp với hiện trạng mã nguồn.
    - [ ] Nhánh `main` sạch sẽ, có Git Tag `v1.0.0-mvp` đánh dấu phiên bản phát hành.
  - **Cách kiểm tra thực tế (Verification):**
    - [ ] Chạy `git tag` thấy xuất hiện `v1.0.0-mvp`.
  - **Mẫu Commit & PR:**
    - Commit: `git commit -m "docs(wbs-1.7.2): hoan tat ho so do an va dong goi ban giao v1.0.0"`
    - PR Title: `[WBS-1.7.2] docs: Hoàn tất hồ sơ quản trị dự án và đóng gói phát hành v1.0.0-mvp`
  - **Tệp chỉnh sửa:** `README.md`, `CHANGELOG.md`, `docs/WBS_Project_Management.md`.

---

## 📊 BẢNG TỔNG KẾT TRẠNG THÁI TIẾN ĐỘ NHÁNH & PULL REQUEST

| STT | Mã WBS | Tên Nhánh Git | Trạng Thái Nhánh | Pull Request | Trạng Thái Merge | Người Phụ Trách |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | `1.1.1` | `chore/wbs-1.1.1-repo-infra` | 🟡 Ready to Branch | PR #1 | ⏳ Pending | TV1 (Backend/PM) |
| 2 | `1.2.1` | `feat/wbs-1.2.1-auth-jwt` | ⚪ Scheduled | PR #2 | ⏳ Pending | TV1 (Backend/PM) |
| 3 | `1.2.2` | `feat/wbs-1.2.2-menu-branches`| ⚪ Scheduled | PR #3 | ⏳ Pending | TV1 (Backend/PM) |
| 4 | `1.6.3` | `feat/wbs-1.6.3-ai-flask-api` | ⚪ Scheduled | PR #4 | ⏳ Pending | TV3 (Frontend/AI) |
| 5 | `1.2.4` | `feat/wbs-1.2.4-vietqr-casso` | ⚪ Scheduled | PR #5 | ⏳ Pending | TV1 (Backend/PM) |
| 6 | `1.3.2` | `feat/wbs-1.3.2-customer-home`| ⚪ Scheduled | PR #6 | ⏳ Pending | TV2 (Mobile Lead) |
| 7 | `1.3.6` | `feat/wbs-1.3.6-camera-ai-scan`| ⚪ Scheduled | PR #7 | ⏳ Pending | TV2 (Mobile Lead) |
| 8 | `1.5.2` | `feat/wbs-1.5.2-admin-products`| ⚪ Scheduled | PR #8 | ⏳ Pending | TV3 (Frontend/AI) |
| 9 | `1.4.2` | `feat/wbs-1.4.2-shipper-orders`| ⚪ Scheduled | PR #9 | ⏳ Pending | TV2 (Mobile Lead) |
| 10 | `1.5.1` | `feat/wbs-1.5.1-admin-dashboard`| ⚪ Scheduled | PR #10 | ⏳ Pending | TV3 (Frontend/AI) |
| 11 | `1.7.1` | `test/wbs-1.7.1-e2e-smoke-test`| ⚪ Scheduled | PR #11 | ⏳ Pending | TV3 (QA Lead) |
| 12 | `1.7.2` | `docs/wbs-1.7.2-release-v1` | ⚪ Scheduled | PR #12 | ⏳ Pending | TV1 (PM Lead) |
