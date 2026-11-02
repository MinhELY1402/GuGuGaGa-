# Spec: Hệ Sinh Thái GuGuGaGa - Nền Tảng Đặt Món Ăn Trực Tuyến Tích Hợp AI

## 1. Objective (Mục Tiêu & Đánh Giá Hiện Trạng)
Dự án **GuGuGaGa** là một hệ sinh thái đặt món ăn trực tuyến đặc thù cho các món ăn Việt Nam, tích hợp thị giác máy tính AI (MobileNetV2 nhận diện món qua camera) và trợ lý ảo Gemini tư vấn thực đơn.

### Hiện Trạng Dự Án (Audit Findings):
Qua kiểm tra cấu trúc mã nguồn, tài liệu WBS (`WBS_Project_Management.md`), tài liệu giao diện (`chuc_nang_giao_dien.md`), và thông số AI (`vi_tri_thong_so_ai.md`), hiện trạng dự án như sau:
- **Mã nguồn tính năng (Feature Code)**: Đã được lập trình gần như đầy đủ các màn hình và logic nghiệp vụ chính trên 5 phân hệ (Backend Express, Admin React, Customer App Flutter, Shipper App Flutter, AI Service Flask).
- **Điểm nghẽn cần hoàn thiện trước khi vận hành (Missing Prerequisites)**:
  1. **Tệp cấu hình & Khóa bảo mật**: Chưa có các file `.env` mẫu/thực tế và chưa có file `serviceAccountKey.json` của Firebase Admin SDK trong `Backend/`.
  2. **Thư viện phụ thuộc**: Chưa cài đặt `node_modules` ở `Backend/` và `Admin/`; chưa chạy `flutter pub get` và `pip install`.
  3. **Tệp trọng số AI Model**: Chưa có tệp trọng số `food_classifier.pth` trong `AI_Service/models/` (đang có logic Fallback ImageNet).
  4. **Thư mục rác/trùng lặp**: Tồn tại thư mục lồng `gugugaga shipper/chickengoo/` (bản sao ứng dụng cũ) cần được dọn dẹp để tránh nhầm lẫn.
  5. **Kiểm thử tự động**: Chưa có bộ kiểm thử tự động (Unit Test / Integration Test) cho các endpoint Backend và widget Flutter.

---

## 2. Capability Map (Bản Đồ Năng Lực & Thứ Tự Khởi Tạo)

| Module ID | Tên phân hệ / Trách nhiệm | Công nghệ | Phụ thuộc (Depends on) | Trạng thái hiện tại |
|---|---|---|---|---|
| `infra-config` | Môi trường, Firebase, Cloudinary, Mapbox | `.env`, JSON keys | — | ⚠️ Cần tạo file môi trường & key |
| `backend-core` | Express REST API, Firestore, Auth, Quản lý Menu, Giỏ hàng, Đơn hàng | Node.js (ESM), Firestore | `infra-config` | ✅ Đã code đầy đủ dịch vụ |
| `payment-vietqr` | Sinh mã VietQR & Webhook đối soát Casso | Node.js, Napas247, Casso | `backend-core` | ✅ Đã có logic service & route |
| `admin-portal` | Dashboard thống kê, Quản lý Món/Danh mục/Chi nhánh, Điều phối đơn | React 19, Vite, Tailwind | `backend-core` | ✅ Đã code xong 10 trang UI |
| `customer-app` | App đặt món khách hàng, Scan camera AI, Chatbot Gemini, Checkout | Flutter 3.3+, Provider | `backend-core`, `ai-service` | ✅ Đã code xong 15 luồng màn hình |
| `shipper-app` | App tài xế, Bật/tắt ca, Nhận đơn, Dẫn đường bản đồ, Thu COD | Flutter 3.3+, Google Maps/OSM | `backend-core` | ✅ Đã code xong luồng cốt lõi; cần dọn folder rác |
| `ai-service` | API phân loại 30 món ăn Việt Nam qua ảnh | Python, Flask, PyTorch | — | ⚠️ Cần tải file `.pth` hoặc train |
| `e2e-testing` | Kiểm thử tích hợp toàn bộ luồng từ đặt món đến giao nhận | Jest, Supertest, Manual | Toàn bộ các module | ⏳ Chưa có kịch bản test tự động |

**Thứ tự ưu tiên triển khai / xác thực (Build & Verification Order):**  
`infra-config` $\rightarrow$ `backend-core` $\rightarrow$ `admin-portal` & `ai-service` $\rightarrow$ `customer-app` & `shipper-app` $\rightarrow$ `e2e-testing`

---

## 3. Tech Stack & Commands

### Danh mục công nghệ:
- **Backend**: Node.js v18+, Express 4.19 (ES Modules), Firebase Admin SDK 13.9, Cloudinary 2.5, Bcrypt/JWT.
- **Admin**: React 19, Vite 7, TailwindCSS 3.4, TanStack Query 5, Zustand 5, Mapbox GL 3.16.
- **Customer & Shipper Apps**: Flutter 3.3+ (Dart 3.3+), Provider 6.1, Firebase Core & Auth, Geolocator, Flutter Map / Google Maps.
- **AI Service**: Python 3.9+, PyTorch, Torchvision, Flask, Pillow, MobileNetV2.

### Lệnh thực thi tiêu chuẩn (Standard Commands):

#### 1. Backend (`Backend/`):
```bash
# Cài đặt dependencies:
npm install

# Khởi tạo dữ liệu mẫu (Firestore Seed):
npm run seed

# Chạy server môi trường phát triển (Port 5000):
npm run dev

# Chạy server production:
npm start
```

#### 2. Admin Portal (`Admin/`):
```bash
# Cài đặt dependencies:
npm install

# Chạy dev server (Port 5173):
npm run dev

# Build bundle production:
npm run build

# Kiểm tra linting:
npm run lint
```

#### 3. AI Service (`AI_Service/`):
```bash
# Kích hoạt môi trường ảo Python:
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

# Cài đặt thư viện:
pip install -r requirements.txt

# Chạy Flask inference service (Port 8000):
python app.py

# Huấn luyện lại model (nếu có dataset):
python train.py --epochs 20 --batch_size 16 --lr 0.001
```

#### 4. Mobile Apps (`gugugaga/` & `gugugaga shipper/`):
```bash
# Lấy packages:
flutter pub get

# Kiểm tra thiết bị kết nối:
flutter devices

# Chạy ứng dụng:
flutter run
# Chạy trên trình duyệt Chrome:
flutter run -d chrome
```

---

## 4. Project Structure (Cấu Trúc Thư Mục Thực Tế)

```
GuGuGaGa/
├── .agents/                      # Skills và cấu hình coding agent
├── AI_Service/                   # Dịch vụ nhận diện món ăn bằng AI
│   ├── models/                   # Chứa tệp trọng số food_classifier.pth (cần bổ sung)
│   ├── app.py                    # Flask API nhận diện ảnh (/predict, /health)
│   ├── train.py                  # Script huấn luyện MobileNetV2
│   └── requirements.txt
├── Admin/                        # Trang quản trị Web (React + Vite)
│   ├── src/
│   │   ├── pages/                # Dashboard, Orders, Products, Categories, Drivers, Branches...
│   │   ├── stores/               # Zustand auth store
│   │   ├── components/           # UI components tái sử dụng
│   │   └── lib/axios.js          # Cấu hình gọi API Backend (port 5000)
│   └── package.json
├── Backend/                      # REST API Server (Express ESM)
│   ├── src/
│   │   ├── configs/              # firestore.js, env.js, cloudinary.js, apiResponse.js
│   │   ├── controllers/          # order, product, user, shipper, auth, ai, dashboard...
│   │   ├── routes/               # user.route.js, admin.route.js, shipper.route.js, ai.route.js
│   │   ├── services/             # order.service.js, cart.service.js, product.service.js...
│   │   └── server.js             # File khởi động chính (Port 5000)
│   ├── prisma/                   # ERD diagram và schema tham chiếu
│   ├── seed-firestore.js         # Script tạo dữ liệu mẫu
│   └── package.json
├── gugugaga/                     # Ứng dụng di động khách hàng (Flutter)
│   ├── lib/
│   │   ├── screens/              # home (AI scan), auth, cart, checkout, chat (Gemini), order...
│   │   ├── services/             # api_service.dart
│   │   ├── providers/            # cart_provider.dart
│   │   └── main.dart
│   └── pubspec.yaml
├── gugugaga shipper/             # Ứng dụng di động tài xế (Flutter)
│   ├── lib/
│   │   ├── screens/              # home_screen.dart, login_screen.dart, order_detail_screen.dart
│   │   └── services/             # api_service.dart
│   ├── chickengoo/               # ⚠️ Thư mục thừa cần dọn dẹp hoặc tách riêng
│   └── pubspec.yaml
├── README.md                     # Tài liệu hướng dẫn thiết lập hệ thống
├── WBS_Project_Management.md     # Kế hoạch phân rã 27 gói công việc WBS & MoSCoW
├── chuc_nang_giao_dien.md        # Chi tiết mã nguồn 3 chức năng chính
└── vi_tri_thong_so_ai.md         # Vị trí các tham số AI trong dự án
```

---

## 5. Code Style & Standards

### JavaScript (Backend & Admin):
- Chuẩn ES Modules (`import`/`export`), không dùng `require()` trong mã nguồn mới.
- Xử lý bất đồng bộ bằng `async`/`await` kèm `try...catch` và bọc phản hồi qua helper `ApiResponse.success` / `ApiResponse.error`.
- Đặt tên file theo định dạng: `kebab-case.service.js` hoặc `camelCase.controller.js`.
- Ví dụ controller chuẩn:
```javascript
export const branchController = {
  async getAll(req, res) {
    try {
      const branches = await branchService.getAll();
      return ApiResponse.success(res, branches, "Branches retrieved successfully");
    } catch (err) {
      return ApiResponse.error(res, err, 500);
    }
  }
};
```

### Flutter / Dart:
- Tuân thủ Flutter lints (`flutter_lints`).
- Tách bạch rõ rệt giữa UI Layer (`screens/`, `widgets/`), State Layer (`providers/`), và Network Layer (`services/api_service.dart`).
- Luôn kiểm tra `if (!mounted) return;` trước khi tương tác với `BuildContext` sau các tác vụ `async`.

### Python (AI Service):
- Tuân thủ PEP 8, xử lý ngoại lệ an toàn cho file upload, trả về JSON chuẩn `{ status, predictions: [...] }` với HTTP code thích hợp.

---

## 6. Testing Strategy

1. **Backend Verification**:
   - Kiểm tra API Health Check: `GET http://localhost:5000/`.
   - Kiểm tra luồng Auth: Đăng ký, đăng nhập tài khoản khách, tài xế, admin.
   - Kiểm tra luồng Đơn hàng: Tạo giỏ hàng $\rightarrow$ Tính phí giao hàng $\rightarrow$ Sinh VietQR $\rightarrow$ Giả lập Casso Webhook đối soát $\rightarrow$ Cập nhật trạng thái đơn.
2. **AI Service Verification**:
   - Health check: `GET http://localhost:8000/health`.
   - Dự đoán ảnh: `POST http://localhost:8000/predict` với file ảnh mẫu (Banh mi, Pho...) kiểm tra cấu trúc Top-3 kết quả và thời gian phản hồi ($< 500$ms).
3. **E2E Customer - Shipper - Admin Flow**:
   - Khách tạo đơn trên app `gugugaga`.
   - Admin nhận đơn trên portal `Admin/` và gán tài xế (hoặc tài xế tự nhận).
   - Tài xế trên app `gugugaga shipper` chuyển trạng thái đơn: `Đang lấy món` $\rightarrow$ `Đang giao` $\rightarrow$ `Đã giao` (xác nhận thu COD).

---

## 7. Boundaries (Ranh Giới Quy Tắc)

- **Always (Luôn luôn thực hiện)**:
  - Giữ nguyên các tệp cấu hình bảo mật không push lên git công khai (`.env`, `serviceAccountKey.json`).
  - Kiểm tra trạng thái Firestore transaction / khóa đơn khi tài xế nhận đơn để tránh tranh chấp (Race Condition).
  - Sử dụng định dạng phản hồi chuẩn JSON (`ApiResponse`).
- **Ask First (Hỏi người dùng trước khi làm)**:
  - Xóa hoặc di chuyển thư mục `gugugaga shipper/chickengoo/`.
  - Thay đổi cấu trúc schema trong Firestore hoặc chuyển đổi giữa Prisma/Firestore.
  - Sửa đổi các cổng mạng mặc định (Backend: 5000, AI: 8000, Admin: 5173).
- **Never (Tuyệt đối không làm)**:
  - Không hardcode các khóa bí mật (API Keys, JWT Secrets) trực tiếp vào mã nguồn.
  - Không xóa các tính năng hay luồng nghiệp vụ đã được định nghĩa trong WBS nếu chưa có sự đồng ý.
  - Không triển khai sửa đổi mã nguồn nếu chưa qua bước phê duyệt Spec và Plan.

---

## 8. Success Criteria (Tiêu Chí Nghiệm Thu Dự Án Hiện Tại)

1. [ ] Có đầy đủ các file template `.env.example` và hướng dẫn cấu hình rõ ràng cho từng phân hệ.
2. [ ] Backend khởi động thành công trên cổng `5000`, kết nối trơn tru tới Firebase Firestore và tạo seed dữ liệu mẫu thành công.
3. [ ] Admin Portal biên dịch không lỗi (`npm run build` hoặc `npm run dev`) và kết nối thành công với API Backend.
4. [ ] AI Service phản hồi `200 OK` tại endpoint `/health` và trả về kết quả hợp lệ tại `/predict`.
5. [ ] Cả 2 ứng dụng Flutter (`gugugaga` và `gugugaga shipper`) chạy lệnh `flutter pub get` thành công, không xung đột thư viện.
6. [ ] Thư mục dự án gọn gàng, loại bỏ các file/folder rác hoặc không dùng đến.

---

## 9. Open Questions (Các Câu Hỏi Mở Cần Người Dùng Xác Nhận)

1. **Cấu hình Firebase**: Bạn đã có sẵn file `serviceAccountKey.json` và Firebase Project riêng cho dự án chưa, hay cần hỗ trợ tạo file môi trường mẫu (`.env.example`) để bạn tự điền?
2. **Thư mục `gugugaga shipper/chickengoo`**: Thư mục này dường như là phiên bản cũ hoặc bị copy thừa trong app shipper. Bạn có muốn sao lưu/dọn dẹp thư mục này không?
3. **Mô hình AI**: Bạn hiện có sẵn file trọng số `food_classifier.pth` từ Google Drive chưa, hay chúng ta sẽ ưu tiên sử dụng chế độ Fallback ImageNet Mapper có sẵn trong code để kiểm thử hệ thống trước?
4. **Mục tiêu tiếp theo**: Sau khi bạn duyệt bản Spec này, bạn muốn tập trung vào phần việc nào trước (Ví dụ: Thiết lập môi trường chạy thử Backend/Admin, hoàn thiện kết nối AI, hay kiểm thử luồng giao dịch)?
