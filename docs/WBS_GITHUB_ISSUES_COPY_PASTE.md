# 📋 DANH SÁCH THẺ CÔNG VIỆC WBS ĐỂ DÁN VÀO GITHUB PROJECTS / ISSUES

> **Dự án**: Hệ sinh thái GuGuGaGa – Đặt món ăn trực tuyến tích hợp AI  
> **Cách sử dụng**: Khi tạo Issue mới trên [GitHub Issues](https://github.com/MinhELY1402/GuGuGaGa-/issues/new/choose), bạn chỉ cần **sao chép (Copy) tiêu đề và nội dung** của từng gói công việc dưới đây rồi dán vào.

---

# 🚀 SPRINT 1: NỀN TẢNG HẠ TẦNG, DATABASE & AI CORE
* **Thời gian**: `02/11/2026 – 08/11/2026`
* **Milestone**: `Sprint 1 - Nền tảng & Database`

---

### 1. [WBS-1.1.1] Khởi tạo Repo, Biến Môi Trường Mẫu & Quy Chuẩn CI/CD
* **Tiêu đề Issue**: `[WBS-1.1.1] Khởi tạo Repo, Biến Môi Trường Mẫu & Quy Chuẩn CI/CD`
* **Assignee**: TV1 (Backend/PM)
* **Labels**: `wbs`, `infra`, `must-have`
* **Milestone**: `Sprint 1 - Nền tảng & Database`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.1.1`
- **Phân hệ (Module)**: `QA & Infra`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 1`
- **Nhánh Git dự kiến**: `feat/wbs-1.1.1-backend-infra`
- **Ước tính (Hours)**: `40h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Tạo đầy đủ các tệp cấu hình mẫu `.env.example` cho 5 phân hệ (Backend, Admin, Customer App, Shipper App, AI Service).
- Cấu hình file `.gitignore` nghiêm ngặt, ngăn chặn commit lộ khóa bảo mật và serviceAccountKey.
- Cấu hình mẫu Pull Request `.github/pull_request_template.md` và Issue Template.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Có đầy đủ `.env.example` ở các thư mục `Backend/`, `Admin/`, `gugugaga/`, `gugugaga shipper/`.
- [ ] Chạy `git status` không hiển thị bất kỳ file secret hoặc token nhạy cảm nào.
- [ ] Dự án mở PR trên GitHub tự động load biểu mẫu PR template.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**:
  ```bash
  git status
  ```
- **Kết quả mong đợi**: Cây thư mục gọn gàng, các file .env không bị git theo dõi.
```

---

### 2. [WBS-1.1.2] Thiết Lập Database PostgreSQL (Supabase) & Storage Bucket
* **Tiêu đề Issue**: `[WBS-1.1.2] Thiết Lập Database PostgreSQL (Supabase) & Storage Bucket`
* **Assignee**: TV1 (Backend/PM)
* **Labels**: `wbs`, `backend`, `must-have`
* **Milestone**: `Sprint 1 - Nền tảng & Database`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.1.2`
- **Phân hệ (Module)**: `Backend API`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 1`
- **Nhánh Git dự kiến**: `feat/wbs-1.1.1-backend-infra`
- **Ước tính (Hours)**: `40h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Cấu hình connection string `DATABASE_URL` kết nối Supabase PostgreSQL trong `Backend/prisma/schema.prisma`.
- Tạo bucket công khai `food-images` trên Supabase Storage với chính sách cho phép đọc ảnh công khai.
- Chạy migrate/push Prisma để khởi tạo bảng dữ liệu trên database.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Các bảng `users`, `products`, `categories`, `orders`, `branches`, `drivers` được khởi tạo thành công trên database.
- [ ] Bucket `food-images` trên Storage sẵn sàng nhận ảnh upload.
- [ ] Chạy lệnh `npx prisma generate` trong `Backend/` thành công.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**:
  ```bash
  cd Backend
  npx prisma studio
  ```
- **Kết quả mong đợi**: Trình duyệt mở giao diện quản trị dữ liệu Prisma Studio không báo lỗi kết nối.
```

---

### 3. [WBS-1.2.1] Backend API: Authentication & Phân Quyền JWT / Bcrypt
* **Tiêu đề Issue**: `[WBS-1.2.1] Backend API: Authentication & Phân Quyền JWT / Bcrypt`
* **Assignee**: TV1 (Backend/PM)
* **Labels**: `wbs`, `backend`, `must-have`
* **Milestone**: `Sprint 1 - Nền tảng & Database`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.2.1`
- **Phân hệ (Module)**: `Backend API`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 1`
- **Nhánh Git dự kiến**: `feat/wbs-1.2.1-auth-jwt`
- **Ước tính (Hours)**: `60h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Xây dựng API Đăng ký và Đăng nhập với mật khẩu được mã hóa an toàn bằng `bcrypt`.
- Sinh mã JSON Web Token (JWT) có thời hạn 7 ngày kèm payload role (`CUSTOMER`, `SHIPPER`, `ADMIN`).
- Xây dựng middleware xác thực và phân quyền truy cập theo role.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Đăng ký tài khoản mới thành công, mật khẩu trong database là chuỗi hash bcrypt (không lưu text thô).
- [ ] Đăng nhập đúng mật khẩu trả về HTTP 200 kèm access token; sai mật khẩu trả về HTTP 401.
- [ ] Middleware chặn các request không có token hoặc token giả mạo với mã HTTP 401 Unauthorized.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**:
  ```bash
  curl -X POST http://localhost:5000/api/user/auth/login -H "Content-Type: application/json" -d "{\"email\":\"admin@example.com\",\"password\":\"admin123\"}"
  ```
- **Kết quả mong đợi**: Trả về JSON `{ success: true, data: { token: "..." } }`.
```

---

### 4. [WBS-1.6.3] AI Service: Flask Inference API & Fallback ImageNet Mapper
* **Tiêu đề Issue**: `[WBS-1.6.3] AI Service: Flask Inference API & Fallback ImageNet Mapper`
* **Assignee**: TV3 (Admin Web & AI)
* **Labels**: `wbs`, `ai`, `could-have`
* **Milestone**: `Sprint 1 - Nền tảng & Database`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.6.3`
- **Phân hệ (Module)**: `AI Service`
- **Ưu tiên (MoSCoW)**: `🔵 Could-Have`
- **Sprint**: `Sprint 1`
- **Nhánh Git dự kiến**: `feat/wbs-1.6.3-ai-flask-service`
- **Ước tính (Hours)**: `40h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Đóng gói ứng dụng Flask lắng nghe tại cổng `8000` với 2 endpoint: `GET /health` và `POST /predict`.
- Xây dựng cơ chế `Fallback ImageNet Mapper`: Tự động ánh xạ đặc trưng ảnh sang 30 món ăn GuGuGaGa khi chưa nạp trọng số custom.
- Viết script tự động `AI_Service/test_ai_service.py` gửi ảnh mẫu và kiểm tra độ trễ phản hồi.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Endpoint `GET /health` phản hồi mã HTTP 200 `{"status": "healthy"}`.
- [ ] Endpoint `POST /predict` nhận file ảnh multipart và trả về Top-3 gợi ý món ăn có độ tin cậy.
- [ ] Tốc độ phản hồi dự đoán $< 500$ms trên CPU thông thường.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**:
  ```bash
  python AI_Service/app.py &
  python AI_Service/test_ai_service.py
  ```
- **Kết quả mong đợi**: In ra thông báo PASS và độ trễ hợp lệ.
```

---

# 🛒 SPRINT 2: THỰC ĐƠN, ĐẶT MÓN & THANH TOÁN VIETQR
* **Thời gian**: `09/11/2026 – 13/11/2026`
* **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`

---

### 5. [WBS-1.2.2] Backend API: Quản Lý Menu, Danh Mục & Seed 30 Món Ăn Mẫu
* **Tiêu đề Issue**: `[WBS-1.2.2] Backend API: Quản Lý Menu, Danh Mục & Seed 30 Món Ăn Mẫu`
* **Assignee**: TV1 (Backend/PM)
* **Labels**: `wbs`, `backend`, `must-have`
* **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.2.2`
- **Phân hệ (Module)**: `Backend API`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.2.2-menu-seed`
- **Ước tính (Hours)**: `60h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Xây dựng API CRUD Danh mục món ăn, Sản phẩm và Chi nhánh cửa hàng.
- Nâng cấp script `seed.js`: nạp đủ 30 món ăn truyền thống Việt Nam có link ảnh sắc nét trên CDN/Storage.
- Hỗ trợ phân trang, lọc theo danh mục và tìm kiếm món ăn theo từ khóa.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Chạy lệnh `npm run seed` thành công, nạp đủ 30 món ăn không có món nào bị thiếu ảnh (`image != null`).
- [ ] Endpoint `GET /api/products` trả về danh sách 30 món ăn định dạng chuẩn.
- [ ] Endpoint `GET /api/categories` trả về đầy đủ các nhóm danh mục (Cơm, Phở, Bún, Trà sữa...).

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**:
  ```bash
  cd Backend
  npm run seed
  curl http://localhost:5000/api/products
  ```
- **Kết quả mong đợi**: Nhận về danh sách JSON 30 sản phẩm có trường `image` hợp lệ.
```

---

### 6. [WBS-1.3.2] Customer App: Khám Phá Món Ăn, Shimmer Loading & Menu
* **Tiêu đề Issue**: `[WBS-1.3.2] Customer App: Khám Phá Món Ăn, Shimmer Loading & Menu`
* **Assignee**: TV2 (Mobile Lead)
* **Labels**: `wbs`, `mobile`, `must-have`
* **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.3.2`
- **Phân hệ (Module)**: `Customer App`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.3.2-customer-home-menu`
- **Ước tính (Hours)**: `60h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Tích hợp widget hiển thị ảnh `CustomFoodImage` có hiệu ứng Shimmer Loading mượt mà và ảnh fallback đẹp mắt.
- Màn hình Home Screen: Hiển thị danh mục món ăn dạng cuộn ngang, danh sách món hot, món bán chạy.
- Tìm kiếm món ăn theo tên và lọc theo danh mục tức thì.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Hình ảnh 30 món ăn tải mượt mà từ server về app, không bị vỡ layout hoặc icon lỗi.
- [ ] Chuyển đổi giữa các danh mục hiển thị đúng danh sách món tương ứng.
- [ ] Khi mạng chậm, hiển thị khung placeholder Shimmer màu xám mềm mại.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**:
  ```bash
  cd gugugaga
  flutter run -d chrome
  ```
- **Kết quả mong đợi**: Mở app xem Trang chủ hiển thị đầy đủ hình ảnh món ăn.
```

---

### 7. [WBS-1.5.2] Admin Portal: Quản Lý Sản Phẩm & Upload Ảnh Lên Storage
* **Tiêu đề Issue**: `[WBS-1.5.2] Admin Portal: Quản Lý Sản Phẩm & Upload Ảnh Lên Storage`
* **Assignee**: TV3 (Admin Web & AI)
* **Labels**: `wbs`, `admin`, `must-have`
* **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.5.2`
- **Phân hệ (Module)**: `Admin Web`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.5.2-admin-products-storage`
- **Ước tính (Hours)**: `60h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Nâng cấp bảng sản phẩm `Products.jsx`: Hiển thị thumbnail ảnh, tên món, giá bán, danh mục, trạng thái (Còn hàng/Hết hàng).
- Modal thêm/sửa món (`ProductDialog.jsx`): Chọn file ảnh từ máy tính, tải lên Storage qua API Backend và xem trước ảnh trực tiếp.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Admin đăng nhập vào trang quản trị xem được toàn bộ danh sách 30 món ăn.
- [ ] Thêm món mới: Chọn ảnh $\rightarrow$ tải lên Storage $\rightarrow$ Lưu món thành công và hiển thị ngay trên bảng.
- [ ] Sửa giá tiền hoặc xóa món cập nhật trực tiếp vào cơ sở dữ liệu.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**:
  ```bash
  cd Admin
  npm run dev
  ```
- **Kết quả mong đợi**: Mở `http://localhost:5173`, vào trang Sản phẩm và thử thêm 1 món ăn mới.
```

---

### 8. [WBS-1.2.4 & 1.3.4] Backend & Mobile: Giỏ Hàng, VietQR Napas247 & Webhook Casso
* **Tiêu đề Issue**: `[WBS-1.2.4] Backend & Mobile: Giỏ Hàng, VietQR Napas247 & Webhook Casso`
* **Assignee**: TV1 (Backend) & TV2 (Mobile)
* **Labels**: `wbs`, `backend`, `mobile`, `must-have`
* **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.2.4` & `1.3.4`
- **Phân hệ (Module)**: `Backend API` & `Customer App`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.2.4-vietqr-casso` & `feat/wbs-1.3.4-customer-checkout-vietqr`
- **Ước tính (Hours)**: `60h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Backend: API sinh mã VietQR động theo đơn hàng kèm nội dung chuyển khoản `GUGUGAGA <orderId>`.
- Backend: Endpoint Webhook nhận biến động số dư Casso (`/webhook-casso`), đối soát tiền và cập nhật đơn sang `PAID`.
- Mobile Customer: Dialog hiển thị mã VietQR, nút sao chép số tài khoản 1 chạm, đồng hồ đếm ngược chờ thanh toán và cơ chế polling kiểm tra kết quả.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Mã VietQR tạo ra quét được trên app ngân hàng với đúng số tiền và cú pháp chuyển tiền.
- [ ] Khi Webhook gửi dữ liệu khớp tiền, đơn hàng tự động đổi trạng thái sang `PAID` / `PROCESSING` trong vòng $\le 1.5$s.
- [ ] Xử lý chống trùng lặp Webhook (Idempotency) an toàn.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**: Tạo 1 đơn hàng mới trên App $\rightarrow$ Mở màn hình VietQR $\rightarrow$ Giả lập gửi Webhook đối soát số dư.
- **Kết quả mong đợi**: Màn hình thanh toán trên App tự động chuyển sang thông báo "Thanh toán thành công".
```

---

# 🛵 SPRINT 3: GIAO VẬN SHIPPER & ĐIỀU PHỐI ĐƠN HÀNG
* **Thời gian**: `13/11/2026 – 15/11/2026`
* **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`

---

### 9. [WBS-1.3.6] Customer App: Camera AI Scan Nhận Diện Món & BottomSheet Gợi Ý
* **Tiêu đề Issue**: `[WBS-1.3.6] Customer App: Camera AI Scan Nhận Diện Món & BottomSheet Gợi Ý`
* **Assignee**: TV2 (Mobile Lead)
* **Labels**: `wbs`, `mobile`, `ai`, `could-have`
* **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.3.6`
- **Phân hệ (Module)**: `Customer App`
- **Ưu tiên (MoSCoW)**: `🔵 Could-Have`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.3.6-camera-ai-scan`
- **Ước tính (Hours)**: `60h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Xây dựng khung ngắm quét camera (Viewfinder overlay) hiện đại với hiệu ứng quét la-de khi chụp món ăn.
- Gửi ảnh chụp tới AI Service (`POST http://localhost:8000/predict`).
- Hiển thị BottomSheet danh sách Top-3 món ăn tương ứng trong thực đơn kèm độ tin cậy (`% confidence`) để khách bấm "Thêm vào giỏ" ngay lập tức.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Chụp hoặc chọn ảnh món ăn từ thư viện $\rightarrow$ AI nhận diện chính xác món trong danh mục.
- [ ] Khách có thể bấm vào món gợi ý từ BottomSheet để xem chi tiết và đặt hàng.
- [ ] Xử lý thông báo lỗi thân thiện khi ảnh mờ hoặc không nhận diện được.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Thao tác**: Mở Customer App $\rightarrow$ Bấm nút Camera Scan $\rightarrow$ Chọn ảnh "Bánh mì" $\rightarrow$ Xem kết quả hiển thị.
```

---

### 10. [WBS-1.4.2 & 1.4.4] Shipper App: Tiếp Nhận Đơn, HUD Giao Hàng & Vuốt Thu COD
* **Tiêu đề Issue**: `[WBS-1.4.2] Shipper App: Tiếp Nhận Đơn, HUD Giao Hàng & Vuốt Thu COD`
* **Assignee**: TV2 (Mobile Lead)
* **Labels**: `wbs`, `mobile`, `must-have`
* **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.4.2` & `1.4.4`
- **Phân hệ (Module)**: `Shipper App`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.4.2-shipper-app-flow`
- **Ước tính (Hours)**: `100h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Màn hình chính tài xế: Nút gạt chuyển trạng thái "Sẵn sàng nhận đơn" (Online/Offline), danh sách đơn chờ giao.
- Khóa đơn an toàn (Optimistic Locking) ngăn chặn 2 tài xế nhận cùng 1 đơn.
- Màn hình chi tiết đơn: Nút gọi nhanh điện thoại khách hàng, nút dẫn đường.
- Thanh trượt "Vuốt để xác nhận thu tiền COD" ngăn chặn bấm nhầm khi đang lái xe.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Tài xế đăng nhập tài khoản mẫu `shipper@example.com` thành công.
- [ ] Bấm nhận đơn: đơn hàng cập nhật trạng thái `DELIVERING` cho tài xế đó, tài xế khác không thấy đơn này nữa.
- [ ] Đơn COD bắt buộc xác nhận đã thu đủ tiền mặt trước khi chuyển `DELIVERED`.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**:
  ```bash
  cd "gugugaga shipper"
  flutter run
  ```
- **Kết quả mong đợi**: Đăng nhập tài xế và hoàn tất luồng giao đơn hàng.
```

---

### 11. [WBS-1.5.1 & 1.5.3] Admin Web: Dashboard KPI & Điều Phối Gán Tài Xế
* **Tiêu đề Issue**: `[WBS-1.5.1] Admin Web: Dashboard KPI & Điều Phối Gán Tài Xế`
* **Assignee**: TV3 (Admin Web & AI)
* **Labels**: `wbs`, `admin`, `must-have`
* **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.5.1` & `1.5.3`
- **Phân hệ (Module)**: `Admin Web`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.5.1-admin-dashboard-orders`
- **Ước tính (Hours)**: `100h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Trang Dashboard: Thống kê số lượng đơn theo ngày, tổng doanh thu, số tài xế đang hoạt động.
- Trang Quản lý đơn hàng: Thêm tabs lọc trạng thái (`Tất cả`, `Chờ xác nhận`, `Đang giao`, `Hoàn tất`).
- Modal gán tài xế: Tìm kiếm tài xế đang online và gán đơn thủ công khi cần.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Số liệu doanh thu và số đơn trên Dashboard hiển thị chính xác theo dữ liệu database.
- [ ] Lọc đơn theo các tab trạng thái mượt mà không reload lại trang.
- [ ] Admin có thể gán tài xế trực tiếp cho đơn hàng đang chờ tiếp nhận.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Thao tác**: Đăng nhập Admin $\rightarrow$ Vào mục Đơn hàng $\rightarrow$ Thử gán tài xế cho 1 đơn mới tạo.
```

---

# 🏆 SPRINT 4: KIỂM THỬ E2E & ĐÓNG GÓI BÀN GIAO v1.0
* **Thời gian**: `15/11/2026 – 16/11/2026`
* **Milestone**: `Sprint 4 - Kiểm Thử E2E & Release v1.0`

---

### 12. [WBS-1.7.1] Script Kiểm Thử Tự Động Smoke Test E2E Toàn Hệ Sinh Thái
* **Tiêu đề Issue**: `[WBS-1.7.1] Script Kiểm Thử Tự Động Smoke Test E2E Toàn Hệ Sinh Thái`
* **Assignee**: TV3 (QA Lead)
* **Labels**: `wbs`, `test`, `must-have`
* **Milestone**: `Sprint 4 - Kiểm Thử E2E & Release v1.0`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.7.1`
- **Phân hệ (Module)**: `QA & Infra`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 4`
- **Nhánh Git dự kiến**: `test/wbs-1.7.1-smoke-test-e2e`
- **Ước tính (Hours)**: `80h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Viết script `scripts/smoke_test_e2e.js`:
  1. Kiểm tra trạng thái sẵn sàng của 3 server: Backend (5000), Admin (5173), AI Service (8000).
  2. Mô phỏng liên thông toàn bộ luồng: Khách đăng nhập $\rightarrow$ Đặt món $\rightarrow$ Sinh VietQR $\rightarrow$ Giả lập Webhook Casso $\rightarrow$ Tài xế nhận đơn $\rightarrow$ Giao hàng hoàn tất.
- Xuất bảng báo cáo kết quả kiểm thử phục vụ chấm điểm đồ án.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Chạy lệnh test in ra 100% kết quả PASS màu xanh.
- [ ] Toàn bộ vòng đời đơn hàng từ lúc đặt đến lúc nhận tiền hoàn tất trơn tru.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**:
  ```bash
  node scripts/smoke_test_e2e.js
  ```
- **Kết quả mong đợi**: In bảng tổng kết toàn bộ 7 bước test đều đạt PASS.
```

---

### 13. [WBS-1.7.2] Hoàn Thiện Hồ Sơ Đồ Án & Gắn Git Tag Release v1.0.0-mvp
* **Tiêu đề Issue**: `[WBS-1.7.2] Hoàn Thiện Hồ Sơ Đồ Án & Gắn Git Tag Release v1.0.0-mvp`
* **Assignee**: TV1 (PM Lead)
* **Labels**: `wbs`, `docs`, `must-have`
* **Milestone**: `Sprint 4 - Kiểm Thử E2E & Release v1.0`

**Nội dung dán vào Issue Body:**
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.7.2`
- **Phân hệ (Module)**: `QA & Infra`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 4`
- **Nhánh Git dự kiến**: `docs/wbs-1.7.2-release-v1`
- **Ước tính (Hours)**: `40h`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Cập nhật toàn bộ tài liệu dự án trong `docs/` khớp với hiện trạng mã nguồn.
- Tạo bản tóm tắt nghiệm thu đồ án cho Giảng viên.
- Trưởng nhóm gắn tag phát hành phiên bản `v1.0.0-mvp` trên nhánh `main`.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] File `README.md` và tài liệu WBS, PERT/CPM được cập nhật đầy đủ.
- [ ] Lệnh `git tag` hiển thị tag `v1.0.0-mvp` trên GitHub.
- [ ] Bảng GitHub Projects hiển thị 100% thẻ đã hoàn thành ở cột `✅ Done`.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**:
  ```bash
  git tag
  ```
- **Kết quả mong đợi**: Hiển thị `v1.0.0-mvp`.
```
