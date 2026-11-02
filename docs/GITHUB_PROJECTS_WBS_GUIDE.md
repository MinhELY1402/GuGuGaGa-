# 📊 HƯỚNG DẪN THIẾT LẬP GITHUB PROJECTS QUẢN TRỊ TIẾN ĐỘ THEO WBS

> **Dự án**: Hệ sinh thái GuGuGaGa  
> **Repository**: [https://github.com/MinhELY1402/GuGuGaGa-](https://github.com/MinhELY1402/GuGuGaGa-)  
> **Công cụ**: **GitHub Projects (Projects v2)** tích hợp **Milestones**, **Issues**, và **Automations**.

---

## 🚀 TẠI SAO DÙNG GITHUB PROJECTS CHO WBS?

GitHub Projects biến repository của bạn thành một hệ thống quản trị chuyên nghiệp (tương tự Jira / Trello / Asana), giúp:
1. **Theo dõi trực quan**: Biết chính xác TV1, TV2, TV3 đang làm task nào, task nào đang đợi review, task nào đã merge.
2. **Quản trị MoSCoW & WBS**: Lọc riêng nhóm **Must-Have (~60% MVP)** để đảm bảo tiến độ bảo vệ đồ án.
3. **Tự động hóa 100%**: Khi thành viên tạo nhánh hoặc mở PR có gắn mã Issue, thẻ công việc tự động nhảy từ `Todo` sang `In Progress` $\rightarrow$ `In Review` $\rightarrow$ `Done` mà không cần kéo thả thủ công!

---

## 📌 BƯỚC 1: TẠO PROJECT MỚI TRÊN GITHUB

1. Truy cập vào repository: **[https://github.com/MinhELY1402/GuGuGaGa-](https://github.com/MinhELY1402/GuGuGaGa-)**
2. Bấm vào tab **Projects** (ở thanh menu phía trên).
3. Bấm nút màu xanh **New project** (hoặc **Link a project** $\rightarrow$ **New project**).
4. Chọn giao diện mẫu: **Board** (hoặc **Team backlog**).
5. Đặt tên Project: `GuGuGaGa - WBS Project Management`.
6. Bấm **Create**.

---

## 📌 BƯỚC 2: CẤU HÌNH CÁC CỘT TRẠNG THÁI (KANBAN STATUS)

Mặc định GitHub sẽ có một số cột. Bạn hãy chỉnh sửa lại các cột theo đúng chu trình Git Flow:

| Cột Trạng Thái | Ý nghĩa | Khi nào thẻ nằm ở đây? |
| :--- | :--- | :--- |
| **📋 Backlog** | Kho công việc tổng thể | Toàn bộ 27 gói WBS chưa tới lịch Sprint. |
| **🟡 Ready (Todo)** | Sẵn sàng làm trong Sprint | Các task của Sprint hiện tại sẵn sàng tạo nhánh. |
| **🔵 In Progress** | Đang lập trình | Thành viên đã tạo nhánh `feat/wbs-...` và đang code. |
| **🟣 In Review** | Chờ Review PR | Thành viên đã đẩy code và mở Pull Request. |
| **✅ Done** | Đã hoàn thành | Trưởng nhóm đã Merge PR vào nhánh `main`. |

*(Cách sửa: Bấm vào dấu 3 chấm `...` ở tiêu đề cột $\rightarrow$ chọn Rename hoặc Add column).*

---

## 📌 BƯỚC 3: TẠO CÁC TRƯỜNG THÔNG TIN WBS (CUSTOM FIELDS)

Để bảng Projects hiển thị chuẩn WBS và báo cáo môn học, bạn thêm các trường thông tin tùy chỉnh:

1. Bấm vào dấu **`+`** ở góc trên bên phải thanh bảng (cạnh tiêu đề cột) $\rightarrow$ chọn **`+ New field`**.
2. Thêm lần lượt 4 trường sau:

### 1. Trường `WBS Code`
* **Field name**: `WBS Code`
* **Field type**: `Text`
* *Tác dụng*: Lưu mã phân rã WBS như `1.1.1`, `1.2.1`, `1.2.4`, `1.3.2`...

### 2. Trường `Module` (Phân hệ)
* **Field name**: `Module`
* **Field type**: `Single select`
* **Options**:
  - `Backend API` (Màu xanh dương)
  - `Customer App` (Màu cam)
  - `Shipper App` (Màu xanh lá)
  - `Admin Web` (Màu tím)
  - `AI Service` (Màu hồng)
  - `QA & Infra` (Màu xám)

### 3. Trường `MoSCoW` (Phân cấp MVP)
* **Field name**: `MoSCoW`
* **Field type**: `Single select`
* **Options**:
  - `🔴 Must-Have (MVP)` (Màu đỏ)
  - `🟡 Should-Have` (Màu vàng)
  - `🔵 Could-Have` (Màu xanh)

### 4. Trường `Estimate` (Thời gian)
* **Field name**: `Estimate`
* **Field type**: `Number`
* *Tác dụng*: Điền số giờ ước tính (40h, 60h, 80h theo WBS Dictionary).

---

## 📌 BƯỚC 4: TẠO 4 MILESTONES (4 SPRINT) TRÊN REPO

Milestone giúp nhóm theo dõi deadline theo từng Sprint:

1. Vào tab **Issues** của repo $\rightarrow$ chọn mục **Milestones** (cạnh thanh tìm kiếm) $\rightarrow$ bấm **New milestone**:
2. Tạo 4 Milestone:
   * **Milestone 1**: `Sprint 1 - Nền tảng & Database` | Due date: `08/11/2026`
   * **Milestone 2**: `Sprint 2 - Core Đặt Món & VietQR` | Due date: `13/11/2026`
   * **Milestone 3**: `Sprint 3 - Giao Vận Shipper & Điều Phối` | Due date: `15/11/2026`
   * **Milestone 4**: `Sprint 4 - Kiểm Thử E2E & Release v1.0` | Due date: `16/11/2026`

---

## 📌 BƯỚC 5: TẠO CÁC CHẾ ĐỘ XEM (VIEWS) CHUYÊN NGHIỆP

Trong GitHub Projects, bạn có thể tạo nhiều View khác nhau từ cùng một tập dữ liệu:

### View 1: Kanban Board theo Trạng thái (Mặc định)
* Chọn hiển thị dạng: **Board**
* Group by: **Status**
* *Dùng cho*: Họp Daily Scrum hàng ngày để xem tiến độ làm việc của 3 bạn.

### View 2: Bảng Cây WBS (WBS Tree View)
* Bấm vào tab **`+ New view`** $\rightarrow$ chọn **Table**.
* Đổi tên View thành: `Bảng WBS Tổng Thể`.
* Group by: **Module** (hoặc **MoSCoW**).
* Sort by: **WBS Code** (Ascending).
* *Dùng cho*: Trình chiếu cho Giảng viên xem cấu trúc phân rã công việc 100% WBS.

### View 3: Roadmap (Tiến độ thời gian)
* Bấm vào tab **`+ New view`** $\rightarrow$ chọn **Roadmap**.
* Group by: **Milestone** (hoặc **Assignee**).
* *Dùng cho*: Theo dõi sơ đồ Gantt tiến độ từ 02/11 đến 16/11/2026.

---

## 📌 BƯỚC 6: BẬT TỰ ĐỘNG HÓA (BUILT-IN AUTOMATION)

Giúp thẻ tự động chuyển trạng thái khi lập trình viên thao tác với Git:

1. Trong giao diện Project, bấm vào dấu **`...`** ở góc trên cùng bên phải $\rightarrow$ chọn **Workflows**.
2. Kích hoạt (Turn on) các luồng tự động:
   * **Item added to project**: Tự động set Status thành `Backlog`.
   * **Item closed**: Tự động chuyển Status sang `Done`.
   * **Pull request opened**: Tự động chuyển Issue liên quan sang `In Review`.
   * **Pull request merged**: Tự động đóng Issue và chuyển sang `Done`!

---

## 📌 BƯỚC 7: CÁCH LIÊN KẾT PULL REQUEST VỚI ISSUE (TỰ ĐỘNG CLOSE)

Khi thành viên mở Pull Request, chỉ cần chèn cú pháp sau vào phần mô tả PR:

```markdown
Closes #1
# Hoặc: Fixes #1, Resolves #1 (với 1 là số thứ tự Issue)
```

👉 **Khi Trưởng nhóm bấm "Squash and merge" PR**:
* Issue `#1` trên GitHub sẽ tự động được đóng lại.
* Thẻ trên bảng GitHub Projects sẽ tự động bay sang cột **`✅ Done`**.
* Không một thành viên nào phải mất công vào chuyển trạng thái thủ công!
