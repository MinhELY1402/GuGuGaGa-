import https from 'https';

const GITHUB_OWNER = 'MinhELY1402';
const GITHUB_REPO = 'GuGuGaGa-';
const token = process.argv[2] || process.env.GITHUB_TOKEN;

if (!token) {
  console.log('\n❌ Vui lòng cung cấp GitHub Personal Access Token:');
  console.log('👉 Cách chạy: node scripts/create_github_issues.js <GITHUB_TOKEN>\n');
  console.log('📌 Cách tạo token: GitHub -> Settings -> Developer settings -> Personal access tokens (classic) -> Chọn quyền "repo"');
  process.exit(1);
}

const issues = [
  {
    title: '[WBS-1.1.1] Khởi tạo repo, quy chuẩn code & CI/CD pipeline',
    labels: ['wbs', 'infra', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.1.1\`\n- **Phân hệ**: \`QA & Infra\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 1\`\n- **Nhánh dự kiến**: \`chore/wbs-1.1.1-repo-infra\`\n\n### 📝 1. Mô Tả Công Việc\n- Cấu hình Git branching, Conventional Commits, PR Template và Issue Template.\n- Tạo các file .env.example mẫu cho 5 phân hệ.\n- Cấu hình .gitignore bảo mật.\n\n### 🎯 2. Tiêu Chí Nghiệm Thu\n- [ ] Đủ .env.example ở các phân hệ.\n- [ ] Mở PR tự động tải form mẫu PR template.\n- [ ] Không có file secret bị theo dõi.`
  },
  {
    title: '[WBS-1.1.2] Thiết lập Database PostgreSQL (Supabase) & Storage Bucket',
    labels: ['wbs', 'infra', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.1.2\`\n- **Phân hệ**: \`QA & Infra\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 1\`\n- **Nhánh dự kiến**: \`chore/wbs-1.1.1-repo-infra\`\n\n### 📝 1. Mô Tả Công Việc\n- Cấu hình DATABASE_URL kết nối Supabase PostgreSQL trong schema.prisma.\n- Tạo bucket food-images công khai trên Storage.\n- Chạy npx prisma db push khởi tạo bảng.\n\n### 🎯 2. Tiêu Chí Nghiệm Thu\n- [ ] Bảng xuất hiện trên database.\n- [ ] Bucket sẵn sàng nhận ảnh upload.\n- [ ] Prisma generate thành công.`
  },
  {
    title: '[WBS-1.2.1] Phân hệ Backend: Authentication & Authorization',
    labels: ['wbs', 'backend', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.2.1\`\n- **Phân hệ**: \`Backend API\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 1\`\n- **Nhánh dự kiến**: \`feat/wbs-1.2.1-auth-jwt\`\n\n### 📝 1. Mô Tả Công Việc\n- Lập trình API Đăng ký, Đăng nhập với mật khẩu mã hóa bcrypt.\n- Phát hành JWT token thời hạn 7 ngày kèm role (CUSTOMER, SHIPPER, ADMIN).\n- Middleware xác thực và phân quyền.\n\n### 🎯 2. Tiêu Chí Nghiệm Thu\n- [ ] Mật khẩu băm bcrypt an toàn.\n- [ ] Đăng nhập trả về token HTTP 200.\n- [ ] Chặn token sai/hết hạn HTTP 401.`
  },
  {
    title: '[WBS-1.2.2] Phân hệ Backend: Quản lý Menu, Danh mục & Chi nhánh',
    labels: ['wbs', 'backend', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.2.2\`\n- **Phân hệ**: \`Backend API\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 2\`\n- **Nhánh dự kiến**: \`feat/wbs-1.2.2-menu-seed\`\n\n### 📝 1. Mô Tả Công Việc\n- API CRUD Danh mục, Món ăn, Topping và Chi nhánh.\n- Nâng cấp script seed nạp 30 món ăn Việt Nam có link ảnh sắc nét.\n- Hỗ trợ phân trang và tìm kiếm theo từ khóa.\n\n### 🎯 2. Tiêu Chí Nghiệm Thu\n- [ ] Nạp đủ 30 món ăn có ảnh.\n- [ ] GET /api/products trả về 30 món.\n- [ ] GET /api/categories trả về các nhóm món.`
  },
  {
    title: '[WBS-1.2.3] Phân hệ Backend: Quản trị Giỏ hàng & Luồng Đơn hàng',
    labels: ['wbs', 'backend', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.2.3\`\n- **Phân hệ**: \`Backend API\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 2\`\n- **Nhánh dự kiến**: \`feat/wbs-1.2.4-vietqr-casso\`\n\n### 📝 1. Mô Tả Công Việc\n- Dịch vụ giỏ hàng và tính phí giao hàng theo khoảng cách.\n- Máy trạng thái đơn hàng: PENDING -> PROCESSING -> DELIVERING -> DELIVERED.\n- Lưu trữ quan hệ orders và order_items.\n\n### 🎯 2. Tiêu Chí Nghiệm Thu\n- [ ] Tạo đơn mới lưu đủ món và tính đúng tiền.\n- [ ] Trạng thái đơn chuyển đổi đúng logic.\n- [ ] Huỷ đơn cập nhật CANCELLED.`
  },
  {
    title: '[WBS-1.2.4] Phân hệ Backend: Cổng VietQR & Webhook đối soát Casso',
    labels: ['wbs', 'backend', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.2.4\`\n- **Phân hệ**: \`Backend API\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 2\`\n- **Nhánh dự kiến**: \`feat/wbs-1.2.4-vietqr-casso\`\n\n### 📝 1. Mô Tả Công Việc\n- Sinh mã VietQR Napas247 theo cú pháp GUGUGAGA <orderId>.\n- Webhook nhận biến động số dư Casso (/webhook-casso).\n- Khớp tiền đối soát tự động cập nhật đơn sang PAID.\n\n### 🎯 2. Tiêu Chí Nghiệm Thu\n- [ ] Mã QR quét đúng số tiền và nội dung.\n- [ ] Webhook đối soát xử lý trong <= 1.5s.\n- [ ] Xử lý trùng lặp giao dịch (Idempotency) an toàn.`
  },
  {
    title: '[WBS-1.2.5] Phân hệ Backend: Hệ thống Thông báo & Đánh giá Review',
    labels: ['wbs', 'backend', 'should-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.2.5\`\n- **Phân hệ**: \`Backend API\`\n- **MoSCoW**: \`🟡 Should-Have\`\n- **Sprint**: \`Sprint 3\`\n\n### 📝 1. Mô Tả Công Việc\n- API thông báo đơn hàng theo tài khoản.\n- API đánh giá sao và phản hồi món ăn sau khi giao hoàn tất.`
  },
  {
    title: '[WBS-1.3.1] Flutter Customer: Auth & Quản lý thông tin tài khoản',
    labels: ['wbs', 'mobile', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.3.1\`\n- **Phân hệ**: \`Customer App\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 1\`\n- **Nhánh dự kiến**: \`feat/wbs-1.3.1-customer-auth\`\n\n### 📝 1. Mô Tả Công Việc\n- Màn hình Đăng ký, Đăng nhập, Quên mật khẩu.\n- Lưu trữ token tự động đăng nhập.\n- Màn hình thông tin hồ sơ và địa chỉ giao hàng.`
  },
  {
    title: '[WBS-1.3.2] Flutter Customer: Trang chủ, Khám phá món & Tìm kiếm',
    labels: ['wbs', 'mobile', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.3.2\`\n- **Phân hệ**: \`Customer App\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 2\`\n- **Nhánh dự kiến**: \`feat/wbs-1.3.2-customer-home-menu\`\n\n### 📝 1. Mô Tả Công Việc\n- Tích hợp Shimmer Loading và CustomFoodImage.\n- Trang chủ cuộn ngang danh mục, danh sách món hot, món bán chạy.\n- Tìm kiếm món ăn theo từ khóa.`
  },
  {
    title: '[WBS-1.3.3] Flutter Customer: Chi tiết món, Giỏ hàng & Checkout',
    labels: ['wbs', 'mobile', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.3.3\`\n- **Phân hệ**: \`Customer App\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 2\`\n- **Nhánh dự kiến**: \`feat/wbs-1.3.4-customer-checkout-vietqr\`\n\n### 📝 1. Mô Tả Công Việc\n- Màn hình chi tiết món: chọn topping, số lượng, ghi chú.\n- Màn hình giỏ hàng và màn hình thanh toán checkout.`
  },
  {
    title: '[WBS-1.3.4] Flutter Customer: Thanh toán VietQR & Tiền mặt (COD)',
    labels: ['wbs', 'mobile', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.3.4\`\n- **Phân hệ**: \`Customer App\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 2\`\n- **Nhánh dự kiến**: \`feat/wbs-1.3.4-customer-checkout-vietqr\`\n\n### 📝 1. Mô Tả Công Việc\n- Dialog hiển thị VietQR tải từ server.\n- Nút 1-chạm sao chép số tài khoản, đồng hồ đếm ngược, polling trạng thái.\n- Lựa chọn thanh toán tiền mặt COD.`
  },
  {
    title: '[WBS-1.3.5] Flutter Customer: Theo dõi đơn hàng & Bản đồ vị trí',
    labels: ['wbs', 'mobile', 'should-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.3.5\`\n- **Phân hệ**: \`Customer App\`\n- **MoSCoW**: \`🟡 Should-Have\`\n- **Sprint**: \`Sprint 3\`\n\n### 📝 1. Mô Tả Công Việc\n- Chi tiết lộ trình đơn hàng.\n- Hiển thị bản đồ vị trí chi nhánh và điểm nhận.`
  },
  {
    title: '[WBS-1.3.6] Flutter Customer: Camera AI Scan món & Chatbot AI',
    labels: ['wbs', 'mobile', 'could-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.3.6\`\n- **Phân hệ**: \`Customer App\`\n- **MoSCoW**: \`🔵 Could-Have\`\n- **Sprint**: \`Sprint 3\`\n- **Nhánh dự kiến**: \`feat/wbs-1.3.6-camera-ai-scan\`\n\n### 📝 1. Mô Tả Công Việc\n- Khung ngắm Viewfinder quét món ăn qua camera.\n- Gửi ảnh sang Flask AI API và hiển thị BottomSheet kết quả Top-3 gợi ý.`
  },
  {
    title: '[WBS-1.4.1] Flutter Shipper: Đăng nhập & Bật/Tắt trạng thái nhận đơn',
    labels: ['wbs', 'shipper', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.4.1\`\n- **Phân hệ**: \`Shipper App\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 3\`\n- **Nhánh dự kiến**: \`feat/wbs-1.4.2-shipper-app-flow\`\n\n### 📝 1. Mô Tả Công Việc\n- Màn hình đăng nhập tài xế với tài khoản mẫu.\n- Nút gạt chuyển trạng thái Online/Offline nhận đơn.`
  },
  {
    title: '[WBS-1.4.2] Flutter Shipper: Tiếp nhận & Quản lý danh sách đơn hàng',
    labels: ['wbs', 'shipper', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.4.2\`\n- **Phân hệ**: \`Shipper App\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 3\`\n- **Nhánh dự kiến**: \`feat/wbs-1.4.2-shipper-app-flow\`\n\n### 📝 1. Mô Tả Công Việc\n- Danh sách đơn hàng khả dụng trong bán kính.\n- Khóa đơn an toàn tránh 2 tài xế nhận cùng 1 đơn.\n- Nút gọi điện nhanh cho khách hàng.`
  },
  {
    title: '[WBS-1.4.3] Flutter Shipper: Tích hợp Mapbox dẫn đường (Routing)',
    labels: ['wbs', 'shipper', 'should-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.4.3\`\n- **Phân hệ**: \`Shipper App\`\n- **MoSCoW**: \`🟡 Should-Have\`\n- **Sprint**: \`Sprint 3\`\n\n### 📝 1. Mô Tả Công Việc\n- Bản đồ dẫn đường từ quán ăn đến địa chỉ khách hàng.`
  },
  {
    title: '[WBS-1.4.4] Flutter Shipper: Xác nhận giao hàng & Thu tiền COD',
    labels: ['wbs', 'shipper', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.4.4\`\n- **Phân hệ**: \`Shipper App\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 3\`\n- **Nhánh dự kiến**: \`feat/wbs-1.4.2-shipper-app-flow\`\n\n### 📝 1. Mô Tả Công Việc\n- Chuyển trạng thái: Đã lấy món -> Đang giao -> Đã giao.\n- Thanh trượt "Vuốt để xác nhận thu tiền COD" an toàn.`
  },
  {
    title: '[WBS-1.5.1] Admin Portal: Trang Dashboard tổng quan & Biểu đồ KPI',
    labels: ['wbs', 'admin', 'should-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.5.1\`\n- **Phân hệ**: \`Admin Web\`\n- **MoSCoW**: \`🟡 Should-Have\`\n- **Sprint**: \`Sprint 3\`\n- **Nhánh dự kiến**: \`feat/wbs-1.5.1-admin-dashboard-orders\`\n\n### 📝 1. Mô Tả Công Việc\n- Thống kê doanh thu, số đơn mới, tài xế online.\n- Biểu đồ doanh thu Recharts theo ngày/tuần.`
  },
  {
    title: '[WBS-1.5.2] Admin Portal: Quản lý Thực đơn, Danh mục & Chi nhánh',
    labels: ['wbs', 'admin', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.5.2\`\n- **Phân hệ**: \`Admin Web\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 2\`\n- **Nhánh dự kiến**: \`feat/wbs-1.5.2-admin-products-storage\`\n\n### 📝 1. Mô Tả Công Việc\n- Bảng sản phẩm hiển thị ảnh thumbnail, giá, danh mục.\n- Modal thêm/sửa món tải ảnh trực tiếp lên Supabase Storage.`
  },
  {
    title: '[WBS-1.5.3] Admin Portal: Quản lý Đơn hàng & Điều phối Shipper',
    labels: ['wbs', 'admin', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.5.3\`\n- **Phân hệ**: \`Admin Web\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 3\`\n- **Nhánh dự kiến**: \`feat/wbs-1.5.1-admin-dashboard-orders\`\n\n### 📝 1. Mô Tả Công Việc\n- Danh sách đơn hàng toàn hệ thống có tabs lọc trạng thái.\n- Modal gán tài xế online thủ công khi cần điều phối.`
  },
  {
    title: '[WBS-1.5.4] Admin Portal: Quản lý Tài khoản & Phân quyền Shipper',
    labels: ['wbs', 'admin', 'should-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.5.4\`\n- **Phân hệ**: \`Admin Web\`\n- **MoSCoW**: \`🟡 Should-Have\`\n- **Sprint**: \`Sprint 3\`\n\n### 📝 1. Mô Tả Công Việc\n- Quản lý danh sách khách hàng và duyệt tài xế mới.`
  },
  {
    title: '[WBS-1.6.1] AI Service: Thu thập & Tiền xử lý Dataset 30 món ăn',
    labels: ['wbs', 'ai', 'could-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.6.1\`\n- **Phân hệ**: \`AI Service\`\n- **MoSCoW**: \`🔵 Could-Have\`\n- **Sprint**: \`Sprint 1\`\n\n### 📝 1. Mô Tả Công Việc\n- Chuẩn bị tập dữ liệu 30 món ăn Việt Nam từ Kaggle.\n- Phân chia tập Train/Val/Test và tăng cường ảnh Data Augmentation.`
  },
  {
    title: '[WBS-1.6.2] AI Service: Huấn luyện & Đánh giá MobileNetV2',
    labels: ['wbs', 'ai', 'could-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.6.2\`\n- **Phân hệ**: \`AI Service\`\n- **MoSCoW**: \`🔵 Could-Have\`\n- **Sprint**: \`Sprint 2\`\n\n### 📝 1. Mô Tả Công Việc\n- Huấn luyện Transfer Learning MobileNetV2 trên PyTorch.\n- Xuất tệp trọng số food_classifier.pth nhẹ dưới 15MB.`
  },
  {
    title: '[WBS-1.6.3] AI Service: Triển khai Flask REST API & Image Fallback',
    labels: ['wbs', 'ai', 'could-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.6.3\`\n- **Phân hệ**: \`AI Service\`\n- **MoSCoW**: \`🔵 Could-Have\`\n- **Sprint**: \`Sprint 1\`\n- **Nhánh dự kiến**: \`feat/wbs-1.6.3-ai-flask-service\`\n\n### 📝 1. Mô Tả Công Việc\n- Flask API endpoint /health và /predict.\n- Chế độ Fallback ImageNet Mapper tự động.`
  },
  {
    title: '[WBS-1.6.4] AI Service: Tích hợp Gemini API tư vấn món ăn',
    labels: ['wbs', 'ai', 'wont-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.6.4\`\n- **Phân hệ**: \`AI Service\`\n- **MoSCoW**: \`⚪ Won't-Have (v2)\`\n- **Sprint**: \`Sprint 4\`\n\n### 📝 1. Mô Tả Công Việc\n- Thiết lập System Prompt tư vấn món ăn qua Gemini API.`
  },
  {
    title: '[WBS-1.7.1] Kiểm thử tích hợp hệ thống (Integration & E2E Testing)',
    labels: ['wbs', 'test', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.7.1\`\n- **Phân hệ**: \`QA & Infra\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 4\`\n- **Nhánh dự kiến**: \`test/wbs-1.7.1-smoke-test-e2e\`\n\n### 📝 1. Mô Tả Công Việc\n- Script smoke_test_e2e.js kiểm tra liên thông 5 phân hệ.\n- Mô phỏng toàn bộ chu trình từ đặt món đến nhận tiền COD.`
  },
  {
    title: '[WBS-1.7.2] Triển khai môi trường Production & Tối ưu bảo mật',
    labels: ['wbs', 'infra', 'must-have'],
    body: `### 📌 Thông Tin Gói WBS\n- **Mã WBS (WBS Code)**: \`1.7.2\`\n- **Phân hệ**: \`QA & Infra\`\n- **MoSCoW**: \`🔴 Must-Have (MVP)\`\n- **Sprint**: \`Sprint 4\`\n- **Nhánh dự kiến**: \`docs/wbs-1.7.2-release-v1\`\n\n### 📝 1. Mô Tả Công Việc\n- Hoàn thiện hồ sơ đồ án WBS, PERT/CPM.\n- Gắn Git Tag phát hành v1.0.0-mvp trên main.`
  }
];

async function createIssue(issue, index) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      title: issue.title,
      body: issue.body,
      labels: issue.labels
    });

    const options = {
      hostname: 'api.github.com',
      path: `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues`,
      method: 'POST',
      headers: {
        'User-Agent': 'NodeJS-WBS-Creator',
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 201) {
          const json = JSON.parse(data);
          console.log(`✅ [${index + 1}/27] Đã tạo thành công: #${json.number} - ${issue.title}`);
          resolve(json);
        } else {
          console.error(`❌ [${index + 1}/27] Lỗi tạo issue: ${issue.title} (HTTP ${res.statusCode})`);
          resolve(null);
        }
      });
    });

    req.on('error', (e) => {
      console.error(`❌ Lỗi kết nối: ${e.message}`);
      resolve(null);
    });

    req.write(postData);
    req.end();
  });
}

async function run() {
  console.log(`\n🚀 BẮT ĐẦU TỰ ĐỘNG TẠO 27 WBS ISSUES LÊN REPO ${GITHUB_OWNER}/${GITHUB_REPO}...\n`);
  for (let i = 0; i < issues.length; i++) {
    await createIssue(issues[i], i);
    // Tránh bị rate-limit của GitHub API
    await new Promise(r => setTimeout(r, 600));
  }
  console.log(`\n🎉 HOÀN TẤT! Toàn bộ 27 issues đã được tạo trên GitHub của bạn.`);
  console.log(`👉 Xem issues tại: https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/issues\n`);
}

run();
