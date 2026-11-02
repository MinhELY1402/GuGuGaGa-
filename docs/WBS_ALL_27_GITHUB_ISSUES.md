# 📋 BỘ 27 ISSUES CHUẨN WBS ĐỂ DÁN VÀO GITHUB PROJECTS

> **Dự án**: Hệ sinh thái đặt món ăn trực tuyến tích hợp AI – **GuGuGaGa**  
> **Cấu trúc**: Phủ kín 100% phạm vi công việc từ [docs/WBS_Project_Management.md](WBS_Project_Management.md) theo mẫu [.github/ISSUE_TEMPLATE/wbs_task.md](../.github/ISSUE_TEMPLATE/wbs_task.md).  
> **Cách dùng**: Mở [GitHub Issues](https://github.com/MinhELY1402/GuGuGaGa-/issues/new/choose), copy Tiêu đề và Nội dung từng mục bên dưới để tạo thẻ.

---

## 🏗 PHÂN HỆ 1.1: QUẢN TRỊ & HẠ TẦNG (QA & INFRA)

### [Issue 01] 1.1.1: Khởi tạo repo, quy chuẩn code & CI/CD pipeline
* **Tiêu đề**: `[WBS-1.1.1] Khởi tạo repo, quy chuẩn code & CI/CD pipeline`
* **Labels**: `wbs`, `infra`, `must-have` | **Assignee**: TV1 | **Milestone**: `Sprint 1 - Nền tảng & Database`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.1.1`
- **Phân hệ (Module)**: `QA & Infra`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 1`
- **Nhánh Git dự kiến**: `chore/wbs-1.1.1-repo-infra`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Cấu hình quy chuẩn Git branching, Conventional Commits, mẫu Pull Request và Issue Template.
- Thiết lập các tệp cấu hình mẫu `.env.example` cho 5 phân hệ (Backend, Admin, Customer, Shipper, AI).
- Cấu hình file `.gitignore` nghiêm ngặt, đảm bảo không commit token hoặc khóa bí mật.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Có đầy đủ `.env.example` trong các thư mục và không bị git cảnh báo file rác.
- [ ] Mở PR trên GitHub tự động tải form mẫu PR template.
- [ ] Không có file `.env` hoặc `serviceAccountKey.json` nào bị git theo dõi.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**: `git status`
- **Kết quả mong đợi**: Working tree clean, các file môi trường được loại trừ an toàn.
```

---

### [Issue 02] 1.1.2: Thiết lập Database PostgreSQL (Supabase) & Storage Bucket
* **Tiêu đề**: `[WBS-1.1.2] Thiết lập Database PostgreSQL (Supabase) & Storage Bucket`
* **Labels**: `wbs`, `infra`, `must-have` | **Assignee**: TV1 | **Milestone**: `Sprint 1 - Nền tảng & Database`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.1.2`
- **Phân hệ (Module)**: `QA & Infra`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 1`
- **Nhánh Git dự kiến**: `chore/wbs-1.1.1-repo-infra`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Cấu hình kết nối cơ sở dữ liệu Supabase PostgreSQL trong `Backend/prisma/schema.prisma`.
- Tạo bucket `food-images` trên Supabase Storage với quyền đọc công khai (Public Bucket).
- Khởi tạo toàn bộ các bảng dữ liệu bằng lệnh `npx prisma db push`.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Các bảng dữ liệu xuất hiện đầy đủ trên Supabase Table Editor.
- [ ] Bucket `food-images` sẵn sàng nhận ảnh tải lên và trả về link public trực tiếp.
- [ ] Chạy `npx prisma generate` thành công không phát sinh lỗi.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**: `cd Backend && npx prisma studio`
- **Kết quả mong đợi**: Trình duyệt mở giao diện quản trị dữ liệu PostgreSQL.
```

---

## ⚙️ PHÂN HỆ 1.2: BACKEND API & DATABASE (NODE.JS EXPRESS)

### [Issue 03] 1.2.1: Phân hệ Backend: Authentication & Authorization
* **Tiêu đề**: `[WBS-1.2.1] Phân hệ Backend: Authentication & Authorization`
* **Labels**: `wbs`, `backend`, `must-have` | **Assignee**: TV1 | **Milestone**: `Sprint 1 - Nền tảng & Database`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.2.1`
- **Phân hệ (Module)**: `Backend API`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 1`
- **Nhánh Git dự kiến**: `feat/wbs-1.2.1-auth-jwt`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Lập trình API Đăng ký, Đăng nhập với mật khẩu được mã hóa an toàn bằng thuật toán `bcrypt`.
- Sinh mã JSON Web Token (JWT) có thời hạn 7 ngày chứa payload thông tin người dùng và vai trò.
- Xây dựng middleware phân quyền truy cập theo 3 vai trò: `CUSTOMER`, `SHIPPER`, `ADMIN`.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Đăng ký tài khoản mới mã hóa mật khẩu trong cơ sở dữ liệu dạng chuỗi băm (không lộ text).
- [ ] Đăng nhập đúng thông tin trả về HTTP 200 kèm token; sai thông tin trả về HTTP 401.
- [ ] Middleware chặn các request trái quyền hoặc thiếu token với mã HTTP 403 / 401.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**: `curl -X POST http://localhost:5000/api/user/auth/login -H "Content-Type: application/json" -d "{\"email\":\"admin@example.com\",\"password\":\"admin123\"}"`
- **Kết quả mong đợi**: Trả về JSON `{ success: true, data: { token: "..." } }`.
```

---

### [Issue 04] 1.2.2: Phân hệ Backend: Quản lý Menu, Danh mục & Chi nhánh
* **Tiêu đề**: `[WBS-1.2.2] Phân hệ Backend: Quản lý Menu, Danh mục & Chi nhánh`
* **Labels**: `wbs`, `backend`, `must-have` | **Assignee**: TV1 | **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.2.2`
- **Phân hệ (Module)**: `Backend API`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.2.2-menu-seed`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Xây dựng API CRUD Danh mục, Món ăn, Topping và Chi nhánh nhà hàng.
- Nâng cấp script `seed.js`: nạp 30 món ăn đặc sản Việt Nam kèm link ảnh chất lượng cao.
- Hỗ trợ phân trang, lọc theo danh mục và tìm kiếm món ăn theo từ khóa.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Chạy `npm run seed` nạp đủ 30 món ăn, 100% có link ảnh hợp lệ.
- [ ] Endpoint `GET /api/products` trả về danh sách 30 món ăn kèm chi tiết giá và danh mục.
- [ ] Endpoint `GET /api/categories` trả về danh mục món chuẩn.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**: `cd Backend && npm run seed && curl http://localhost:5000/api/products`
- **Kết quả mong đợi**: Nhận về danh sách JSON 30 sản phẩm có trường `image` hợp lệ.
```

---

### [Issue 05] 1.2.3: Phân hệ Backend: Quản trị Giỏ hàng & Luồng Đơn hàng
* **Tiêu đề**: `[WBS-1.2.3] Phân hệ Backend: Quản trị Giỏ hàng & Luồng Đơn hàng`
* **Labels**: `wbs`, `backend`, `must-have` | **Assignee**: TV1 | **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.2.3`
- **Phân hệ (Module)**: `Backend API`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.2.4-vietqr-casso`
- **Thời gian**: `2 tuần (80h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Xây dựng dịch vụ Giỏ hàng: thêm/sửa/xóa món, tính tổng tiền và phí giao hàng theo tọa độ chi nhánh.
- Xây dựng máy trạng thái hữu hạn cho vòng đời đơn hàng: `PENDING` $\rightarrow$ `PROCESSING` $\rightarrow$ `DELIVERING` $\rightarrow$ `DELIVERED` $\rightarrow$ `CANCELLED`.
- Lưu trữ liên kết 1-n giữa bảng `orders` và bảng `order_items`.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Đơn hàng tạo mới tính chính xác tổng tiền và lưu đúng danh sách món vào `order_items`.
- [ ] Trạng thái đơn chuyển đổi đúng logic, không thể nhảy cóc từ PENDING sang DELIVERED.
- [ ] Huỷ đơn hàng cập nhật trạng thái `CANCELLED` kèm lý do huỷ.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**: Gửi request tạo đơn hàng qua Postman `POST /api/user/orders`
- **Kết quả mong đợi**: Trả về `orderId` và thông tin chi tiết đơn hàng.
```

---

### [Issue 06] 1.2.4: Phân hệ Backend: Cổng VietQR & Webhook đối soát Casso
* **Tiêu đề**: `[WBS-1.2.4] Phân hệ Backend: Cổng VietQR & Webhook đối soát Casso`
* **Labels**: `wbs`, `backend`, `must-have` | **Assignee**: TV1 | **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.2.4`
- **Phân hệ (Module)**: `Backend API`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.2.4-vietqr-casso`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Xây dựng module sinh mã VietQR theo chuẩn Napas247 dựa trên `BANK_ID`, số tài khoản và cú pháp `GUGUGAGA <orderId>`.
- Xây dựng API Webhook tiếp nhận biến động số dư từ Casso (`/webhook-casso`).
- Khớp số tiền thanh toán, cập nhật trạng thái đơn sang `PAID` và chuyển đơn sang chuẩn bị món.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Mã QR sinh ra quét được bằng tối thiểu 3 app ngân hàng (MB, VCB, TCB) với đúng số tiền và nội dung.
- [ ] Webhook Casso xử lý đối soát cập nhật đơn trong thời gian $\le 1.5$s.
- [ ] Idempotency: Không cập nhật đơn 2 lần nếu nhận webhook transaction trùng lặp.

---

### 🧪 3. Cách Kiểm Tra Thực Tế (How to Verify)
- **Lệnh thực thi**: Chạy script test giả lập webhook Casso gửi biến động số dư.
- **Kết quả mong đợi**: Trạng thái đơn hàng trong database chuyển từ UNPAID sang PAID.
```

---

### [Issue 07] 1.2.5: Phân hệ Backend: Hệ thống Thông báo & Đánh giá Review
* **Tiêu đề**: `[WBS-1.2.5] Phân hệ Backend: Hệ thống Thông báo & Đánh giá Review`
* **Labels**: `wbs`, `backend`, `should-have` | **Assignee**: TV1 | **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.2.5`
- **Phân hệ (Module)**: `Backend API`
- **Ưu tiên (MoSCoW)**: `🟡 Should-Have`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.2.5-notifications`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Xây dựng API thông báo đơn hàng cho khách và tài xế.
- Xây dựng API đánh giá sản phẩm (Review & Rating sao từ 1 đến 5 kèm bình luận).

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Khách hàng xem được lịch sử thông báo đơn hàng theo tài khoản.
- [ ] Khách hàng đã hoàn thành đơn có thể gửi đánh giá sao cho món ăn.
```

---

## 📱 PHÂN HỆ 1.3: CUSTOMER MOBILE APP (FLUTTER)

### [Issue 08] 1.3.1: Flutter Customer: Auth & Quản lý thông tin tài khoản
* **Tiêu đề**: `[WBS-1.3.1] Flutter Customer: Auth & Quản lý thông tin tài khoản`
* **Labels**: `wbs`, `mobile`, `must-have` | **Assignee**: TV2 | **Milestone**: `Sprint 1 - Nền tảng & Database`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.3.1`
- **Phân hệ (Module)**: `Customer App`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 1`
- **Nhánh Git dự kiến**: `feat/wbs-1.3.1-customer-auth`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Màn hình Đăng nhập, Đăng ký tài khoản khách hàng, Quên mật khẩu.
- Lưu trữ access token an toàn tại local storage của máy (SharedPreferences).
- Màn hình Hồ sơ cá nhân: Xem và sửa họ tên, số điện thoại, danh sách địa chỉ nhận hàng.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Đăng nhập thành công lưu token và tự động điều hướng vào màn hình chính.
- [ ] Mở lại app khi token còn hạn không bắt đăng nhập lại.
- [ ] Đăng xuất xoá token và quay về màn hình đăng nhập.
```

---

### [Issue 09] 1.3.2: Flutter Customer: Trang chủ, Khám phá món & Tìm kiếm
* **Tiêu đề**: `[WBS-1.3.2] Flutter Customer: Trang chủ, Khám phá món & Tìm kiếm`
* **Labels**: `wbs`, `mobile`, `must-have` | **Assignee**: TV2 | **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.3.2`
- **Phân hệ (Module)**: `Customer App`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.3.2-customer-home-menu`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Tích hợp Shimmer Loading và widget tải ảnh món ăn `CustomFoodImage`.
- Trang chủ: Băng chuyền banner khuyến mãi, danh mục dạng cuộn ngang, danh sách món hot.
- Thanh tìm kiếm món ăn theo từ khóa và lọc theo chi nhánh.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Hiển thị hình ảnh 30 món ăn sắc nét từ CDN, không bị lỗi icon xám.
- [ ] Chuyển tab danh mục lọc đúng các món tương ứng tức thì.
- [ ] Tìm kiếm từ khóa trả về kết quả chính xác trong danh sách món.
```

---

### [Issue 10] 1.3.3: Flutter Customer: Chi tiết món, Giỏ hàng & Checkout
* **Tiêu đề**: `[WBS-1.3.3] Flutter Customer: Chi tiết món, Giỏ hàng & Checkout`
* **Labels**: `wbs`, `mobile`, `must-have` | **Assignee**: TV2 | **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.3.3`
- **Phân hệ (Module)**: `Customer App`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.3.4-customer-checkout-vietqr`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Màn hình chi tiết món: Chọn số lượng, chọn topping ăn kèm, ghi chú riêng cho đầu bếp.
- Màn hình Giỏ hàng (`CartScreen`): Tăng giảm số lượng, xóa món, hiển thị tạm tính.
- Màn hình Checkout: Chọn địa chỉ giao hàng, phương thức thanh toán, tính phí ship.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Thêm món vào giỏ cập nhật ngay số lượng hiển thị trên icon giỏ hàng ở AppBar.
- [ ] Tính tổng tiền chính xác = (Giá món + Topping) * Số lượng + Phí ship.
- [ ] Bấm "Đặt hàng" gửi dữ liệu tạo đơn lên Backend thành công.
```

---

### [Issue 11] 1.3.4: Flutter Customer: Thanh toán VietQR & Tiền mặt (COD)
* **Tiêu đề**: `[WBS-1.3.4] Flutter Customer: Thanh toán VietQR & Tiền mặt (COD)`
* **Labels**: `wbs`, `mobile`, `must-have` | **Assignee**: TV2 | **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.3.4`
- **Phân hệ (Module)**: `Customer App`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.3.4-customer-checkout-vietqr`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Dialog / Màn hình hiển thị mã VietQR động tải từ server theo đơn hàng.
- Nút bấm 1-chạm sao chép số tài khoản và nội dung chuyển khoản.
- Đồng hồ đếm ngược giao dịch và cơ chế Polling (5s/lần) kiểm tra kết quả đối soát.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Hiển thị sắc nét mã QR có logo ngân hàng và thông tin chuyển khoản.
- [ ] Khi backend xác nhận đã nhận tiền, app tự động điều hướng sang màn hình Thành công.
- [ ] Hỗ trợ lựa chọn thanh toán tiền mặt khi nhận hàng (COD).
```

---

### [Issue 12] 1.3.5: Flutter Customer: Theo dõi đơn hàng & Bản đồ vị trí
* **Tiêu đề**: `[WBS-1.3.5] Flutter Customer: Theo dõi đơn hàng & Bản đồ vị trí`
* **Labels**: `wbs`, `mobile`, `should-have` | **Assignee**: TV2 | **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.3.5`
- **Phân hệ (Module)**: `Customer App`
- **Ưu tiên (MoSCoW)**: `🟡 Should-Have`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.3.5-order-tracking`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Màn hình chi tiết lộ trình đơn hàng theo thời gian thực.
- Tích hợp bản đồ hiển thị vị trí quán ăn, vị trí khách nhận và vị trí tài xế.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Trạng thái đơn hàng cập nhật theo 4 bước trực quan.
- [ ] Bản đồ hiển thị rõ ràng ghim điểm giao và điểm nhận.
```

---

### [Issue 13] 1.3.6: Flutter Customer: Camera AI Scan món & Chatbot AI
* **Tiêu đề**: `[WBS-1.3.6] Flutter Customer: Camera AI Scan món & Chatbot AI`
* **Labels**: `wbs`, `mobile`, `ai`, `could-have` | **Assignee**: TV2 | **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.3.6`
- **Phân hệ (Module)**: `Customer App`
- **Ưu tiên (MoSCoW)**: `🔵 Could-Have`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.3.6-camera-ai-scan`
- **Thời gian**: `2 tuần (80h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Xây dựng khung ngắm camera (Viewfinder overlay) với hiệu ứng laser quét thực phẩm.
- Gửi ảnh chụp/chọn từ thư viện lên Flask AI API (`POST /predict`).
- Hiển thị BottomSheet danh sách Top-3 món ăn gợi ý kèm độ tin cậy để bấm thêm vào giỏ.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Bấm chụp ảnh món ăn $\rightarrow$ AI nhận diện và trả về gợi ý món chuẩn xác.
- [ ] Người dùng có thể bấm vào món trong BottomSheet để đặt hàng ngay.
```

---

## 🛵 PHÂN HỆ 1.4: SHIPPER MOBILE APP (FLUTTER)

### [Issue 14] 1.4.1: Flutter Shipper: Đăng nhập & Bật/Tắt trạng thái nhận đơn
* **Tiêu đề**: `[WBS-1.4.1] Flutter Shipper: Đăng nhập & Bật/Tắt trạng thái nhận đơn`
* **Labels**: `wbs`, `shipper`, `must-have` | **Assignee**: TV2 | **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.4.1`
- **Phân hệ (Module)**: `Shipper App`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.4.2-shipper-app-flow`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Màn hình đăng nhập dành riêng cho tài xế với tài khoản mẫu `shipper@example.com`.
- Nút gạt chuyển đổi trạng thái làm việc (Online / Offline) nổi bật trên trang chủ tài xế.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Tài xế đăng nhập thành công và lưu trạng thái phiên làm việc.
- [ ] Khi chuyển sang Online, tài xế mới bắt đầu nhận được danh sách đơn hàng mới.
```

---

### [Issue 15] 1.4.2: Flutter Shipper: Tiếp nhận & Quản lý danh sách đơn hàng
* **Tiêu đề**: `[WBS-1.4.2] Flutter Shipper: Tiếp nhận & Quản lý danh sách đơn hàng`
* **Labels**: `wbs`, `shipper`, `must-have` | **Assignee**: TV2 | **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.4.2`
- **Phân hệ (Module)**: `Shipper App`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.4.2-shipper-app-flow`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Danh sách đơn hàng đang chờ tiếp nhận: Xem tiền cước, địa chỉ quán và địa chỉ khách.
- Cơ chế nhận đơn an toàn (Optimistic Locking) ngăn chặn 2 tài xế nhận cùng 1 đơn.
- Chi tiết đơn: Danh sách món cần lấy, số điện thoại khách (nút gọi trực tiếp).

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Khi tài xế A nhấn "Nhận đơn", đơn hàng biến mất khỏi danh sách của tài xế B.
- [ ] Nút "Gọi khách hàng" mở ứng dụng gọi điện mặc định với số đã điền sẵn.
```

---

### [Issue 16] 1.4.3: Flutter Shipper: Tích hợp Mapbox dẫn đường (Routing)
* **Tiêu đề**: `[WBS-1.4.3] Flutter Shipper: Tích hợp Mapbox dẫn đường (Routing)`
* **Labels**: `wbs`, `shipper`, `should-have` | **Assignee**: TV2 | **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.4.3`
- **Phân hệ (Module)**: `Shipper App`
- **Ưu tiên (MoSCoW)**: `🟡 Should-Have`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.4.3-shipper-routing`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Tích hợp bản đồ dẫn đường cho tài xế từ quán đến điểm giao hàng của khách.
- Hiển thị ước tính khoảng cách (km) và thời gian di chuyển (phút).
```

---

### [Issue 17] 1.4.4: Flutter Shipper: Xác nhận giao hàng & Thu tiền COD
* **Tiêu đề**: `[WBS-1.4.4] Flutter Shipper: Xác nhận giao hàng & Thu tiền COD`
* **Labels**: `wbs`, `shipper`, `must-have` | **Assignee**: TV2 | **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.4.4`
- **Phân hệ (Module)**: `Shipper App`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.4.2-shipper-app-flow`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Chuyển đổi trạng thái đơn: `Đã lấy món` $\rightarrow$ `Đang giao` $\rightarrow$ `Đã giao`.
- Thanh trượt "Vuốt để xác nhận thu tiền COD" chống thao tác nhầm khi đang lái xe.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Đơn COD hiển thị cảnh báo số tiền tài xế cần thu trước khi hoàn tất.
- [ ] Vuốt xác nhận cập nhật trạng thái đơn sang `DELIVERED` ngay lập tức.
```

---

## 🖥 PHÂN HỆ 1.5: ADMIN WEB PORTAL (REACT + VITE)

### [Issue 18] 1.5.1: Admin Portal: Trang Dashboard tổng quan & Biểu đồ KPI
* **Tiêu đề**: `[WBS-1.5.1] Admin Portal: Trang Dashboard tổng quan & Biểu đồ KPI`
* **Labels**: `wbs`, `admin`, `should-have` | **Assignee**: TV3 | **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.5.1`
- **Phân hệ (Module)**: `Admin Web`
- **Ưu tiên (MoSCoW)**: `🟡 Should-Have`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.5.1-admin-dashboard-orders`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Trang Dashboard: Thống kê số lượng đơn mới, tổng doanh thu ngày/tuần, số tài xế online.
- Biểu đồ trực quan doanh thu bằng thư viện biểu đồ Recharts.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Số liệu thống kê KPI hiển thị chuẩn xác theo dữ liệu database.
- [ ] Biểu đồ phản hồi mượt mà khi đổi khoảng thời gian xem báo cáo.
```

---

### [Issue 19] 1.5.2: Admin Portal: Quản lý Thực đơn, Danh mục & Chi nhánh
* **Tiêu đề**: `[WBS-1.5.2] Admin Portal: Quản lý Thực đơn, Danh mục & Chi nhánh`
* **Labels**: `wbs`, `admin`, `must-have` | **Assignee**: TV3 | **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.5.2`
- **Phân hệ (Module)**: `Admin Web`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.5.2-admin-products-storage`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Bảng sản phẩm: Hiển thị thumbnail ảnh, giá tiền, danh mục và trạng thái hết hàng.
- Modal thêm/sửa món ăn: Tải ảnh trực tiếp lên Supabase Storage qua API Backend.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Thêm món mới kèm ảnh hiển thị ngay lập tức trên bảng danh sách.
- [ ] Cập nhật giá bán hoặc chuyển trạng thái còn/hết hàng lưu trực tiếp vào cơ sở dữ liệu.
```

---

### [Issue 20] 1.5.3: Admin Portal: Quản lý Đơn hàng & Điều phối Shipper
* **Tiêu đề**: `[WBS-1.5.3] Admin Portal: Quản lý Đơn hàng & Điều phối Shipper`
* **Labels**: `wbs`, `admin`, `must-have` | **Assignee**: TV3 | **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.5.3`
- **Phân hệ (Module)**: `Admin Web`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.5.1-admin-dashboard-orders`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Danh sách đơn hàng toàn hệ thống kèm tabs lọc trạng thái nhanh.
- Modal điều phối gán tài xế thủ công khi tài xế chưa kịp nhận đơn.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Admin có thể gán tài xế online trực tiếp cho đơn hàng.
- [ ] Huỷ đơn hàng sai sót và cập nhật trạng thái đơn lập tức.
```

---

### [Issue 21] 1.5.4: Admin Portal: Quản lý Tài khoản & Phân quyền Shipper
* **Tiêu đề**: `[WBS-1.5.4] Admin Portal: Quản lý Tài khoản & Phân quyền Shipper`
* **Labels**: `wbs`, `admin`, `should-have` | **Assignee**: TV3 | **Milestone**: `Sprint 3 - Giao Vận Shipper & Điều Phối`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.5.4`
- **Phân hệ (Module)**: `Admin Web`
- **Ưu tiên (MoSCoW)**: `🟡 Should-Have`
- **Sprint**: `Sprint 3`
- **Nhánh Git dự kiến**: `feat/wbs-1.5.4-admin-users`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Quản lý danh sách người dùng khách hàng và danh sách tài xế.
- Phê duyệt tài xế mới và khóa tài khoản vi phạm.
```

---

## 🤖 PHÂN HỆ 1.6: AI & CHATBOT SERVICE (PYTHON FLASK & PYTORCH)

### [Issue 22] 1.6.1: AI Service: Thu thập & Tiền xử lý Dataset 30 món ăn
* **Tiêu đề**: `[WBS-1.6.1] AI Service: Thu thập & Tiền xử lý Dataset 30 món ăn`
* **Labels**: `wbs`, `ai`, `could-have` | **Assignee**: TV3 | **Milestone**: `Sprint 1 - Nền tảng & Database`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.6.1`
- **Phân hệ (Module)**: `AI Service`
- **Ưu tiên (MoSCoW)**: `🔵 Could-Have`
- **Sprint**: `Sprint 1`
- **Nhánh Git dự kiến**: `feat/wbs-1.6.1-ai-dataset`
- **Thời gian**: `1.5 tuần (60h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Chuẩn bị tập dữ liệu 30 món ăn Việt Nam từ Kaggle.
- Phân chia tập dữ liệu Train / Val / Test (tỷ lệ 70 / 15 / 15).
- Áp dụng các kỹ thuật tăng cường ảnh (Data Augmentation): Xoay góc, đổi độ sáng, phối cảnh.
```

---

### [Issue 23] 1.6.2: AI Service: Huấn luyện & Đánh giá MobileNetV2
* **Tiêu đề**: `[WBS-1.6.2] AI Service: Huấn luyện & Đánh giá MobileNetV2`
* **Labels**: `wbs`, `ai`, `could-have` | **Assignee**: TV3 | **Milestone**: `Sprint 2 - Core Đặt Món & VietQR`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.6.2`
- **Phân hệ (Module)**: `AI Service`
- **Ưu tiên (MoSCoW)**: `🔵 Could-Have`
- **Sprint**: `Sprint 2`
- **Nhánh Git dự kiến**: `feat/wbs-1.6.2-ai-training`
- **Thời gian**: `2 tuần (80h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Áp dụng Transfer Learning với Backbone MobileNetV2 trên PyTorch.
- Tinh chỉnh các khối Feature blocks cuối (14 - 18) và gắn classifier head 30 nhãn món ăn.
- Xuất file trọng số `food_classifier.pth` nhẹ dưới 15MB.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Top-1 Accuracy trên tập kiểm thử đạt tối thiểu $\ge 80\%$.
- [ ] Kích thước tệp model dưới 15MB.
```

---

### [Issue 24] 1.6.3: AI Service: Triển khai Flask REST API & Image Fallback
* **Tiêu đề**: `[WBS-1.6.3] AI Service: Triển khai Flask REST API & Image Fallback`
* **Labels**: `wbs`, `ai`, `could-have` | **Assignee**: TV3 | **Milestone**: `Sprint 1 - Nền tảng & Database`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.6.3`
- **Phân hệ (Module)**: `AI Service`
- **Ưu tiên (MoSCoW)**: `🔵 Could-Have`
- **Sprint**: `Sprint 1`
- **Nhánh Git dự kiến**: `feat/wbs-1.6.3-ai-flask-service`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Dịch vụ Flask API lắng nghe tại port 8000: Endpoint `/health` và `/predict`.
- Xây dựng cơ chế Fallback ImageNet Mapper tự động khi chưa có file model custom.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Endpoint `/health` trả về HTTP 200 `{"status": "healthy"}`.
- [ ] Thời gian xử lý dự đoán $< 500$ms trên CPU thông thường.
```

---

### [Issue 25] 1.6.4: AI Service: Tích hợp Gemini API tư vấn món ăn
* **Tiêu đề**: `[WBS-1.6.4] AI Service: Tích hợp Gemini API tư vấn món ăn`
* **Labels**: `wbs`, `ai`, `wont-have` | **Assignee**: TV3 | **Milestone**: `Sprint 4 - Kiểm Thử E2E & Release v1.0`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.6.4`
- **Phân hệ (Module)**: `AI Service`
- **Ưu tiên (MoSCoW)**: `⚪ Won't-Have (v2)`
- **Sprint**: `Sprint 4`
- **Nhánh Git dự kiến**: `feat/wbs-1.6.4-gemini-chat`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Thiết lập System Prompt cho Gemini API tư vấn thực đơn dựa trên sở thích và ngân sách khách hàng.
```

---

## 🧪 PHÂN HỆ 1.7: KIỂM THỬ TÍCH HỢP & TRIỂN KHAI PRODUCTION

### [Issue 26] 1.7.1: Kiểm thử tích hợp hệ thống (Integration & E2E Testing)
* **Tiêu đề**: `[WBS-1.7.1] Kiểm thử tích hợp hệ thống (Integration & E2E Testing)`
* **Labels**: `wbs`, `test`, `must-have` | **Assignee**: TV3 | **Milestone**: `Sprint 4 - Kiểm Thử E2E & Release v1.0`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.7.1`
- **Phân hệ (Module)**: `QA & Infra`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 4`
- **Nhánh Git dự kiến**: `test/wbs-1.7.1-smoke-test-e2e`
- **Thời gian**: `2 tuần (80h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Viết kịch bản kiểm thử tự động `scripts/smoke_test_e2e.js` kiểm tra trạng thái 3 server (Backend, Admin, AI).
- Kiểm thử liên thông toàn chu trình: Khách đăng nhập $\rightarrow$ Đặt món $\rightarrow$ Sinh VietQR $\rightarrow$ Giả lập Webhook Casso $\rightarrow$ Tài xế nhận đơn $\rightarrow$ Thu tiền COD hoàn tất.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Chạy script kiểm thử in ra 100% màu xanh (PASS).
- [ ] Xuất bảng báo cáo nghiệm thu đồ án phục vụ chấm điểm.
```

---

### [Issue 27] 1.7.2: Triển khai môi trường Production & Tối ưu bảo mật
* **Tiêu đề**: `[WBS-1.7.2] Triển khai môi trường Production & Tối ưu bảo mật`
* **Labels**: `wbs`, `infra`, `must-have` | **Assignee**: TV1 | **Milestone**: `Sprint 4 - Kiểm Thử E2E & Release v1.0`
```markdown
### 📌 Thông Tin Gói WBS
- **Mã WBS (WBS Code)**: `1.7.2`
- **Phân hệ (Module)**: `QA & Infra`
- **Ưu tiên (MoSCoW)**: `🔴 Must-Have (MVP)`
- **Sprint**: `Sprint 4`
- **Nhánh Git dự kiến**: `docs/wbs-1.7.2-release-v1`
- **Thời gian**: `1 tuần (40h)`

---

### 📝 1. Mô Tả Công Việc (Scope of Work)
- Hoàn thiện toàn bộ hồ sơ quản trị dự án, biểu đồ Gantt, sơ đồ PERT/CPM và ma trận rủi ro.
- Trưởng nhóm gắn tag phát hành `v1.0.0-mvp` trên nhánh `main`.

---

### 🎯 2. Tiêu Chí Nghiệm Thu (Acceptance Criteria)
- [ ] Toàn bộ 27 gói WBS được nghiệm thu và đóng thẻ trên GitHub Projects.
- [ ] Nhánh `main` sạch sẽ, có Git Tag `v1.0.0-mvp` đánh dấu phiên bản phát hành.
```
