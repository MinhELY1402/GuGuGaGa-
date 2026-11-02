## 📌 Thông Tin Pull Request (PR)

- **Mã WBS (WBS Work Package)**: `[Ví dụ: 1.2.1]`
- **Tên Gói Công Việc**: `[Ví dụ: Backend Auth & Phân quyền JWT]`
- **Nhánh Feature (Source Branch)**: `feat/wbs-[id]-[feature-name]`
- **Nhánh Đích (Target Branch)**: `main` (hoặc `develop`)
- **Người Thực Hiện (Assignee)**: `@[Thành viên thực hiện]`
- **Người Review (Reviewers)**: `@[Thành viên Review theo RACI]`

---

### 📝 1. Mô Tả Thay Đổi (Description)
<!-- Tóm tắt ngắn gọn những gì bạn đã làm, lý do thay đổi và giải pháp kỹ thuật -->
- 

---

### 🛠 2. Danh Sách Tệp Đã Thay Đổi (Files Touched)
<!-- Liệt kê các file chính được tạo mới hoặc chỉnh sửa -->
- `path/to/file`

---

### 🎯 3. Tiêu Chí Nghiệm Thu Đã Đạt (Acceptance Criteria)
<!-- Đánh dấu [x] vào các tiêu chí đã hoàn thành theo WBS Dictionary -->
- [ ] Tiêu chí 1: ...
- [ ] Tiêu chí 2: ...

---

### 🧪 4. Bằng Chứng Kiểm Thử (Verification & Test Evidence)
<!-- Ghi lại lệnh đã chạy và kết quả kiểm tra thực tế (hoặc chèn ảnh/log) -->
- **Lệnh kiểm thử đã chạy**:
  ```bash
  npm test
  # hoặc curl / postman / flutter test
  ```
- **Kết quả thực tế**:
  <!-- Dán log kết quả hoặc mô tả ngắn gọn -->

---

### 📋 5. Checklist Định Nghĩa Hoàn Thành (Definition of Done)
- [ ] Mã nguồn tuân thủ linter & code style của dự án (`npm run lint` / `flutter analyze`).
- [ ] Không có file rác, file nhạy cảm (`.env`, `serviceAccountKey.json`, token/key) bị commit.
- [ ] Đã chạy kiểm tra và không phát sinh lỗi build (`npm run build` / `npm run dev`).
- [ ] Đã rebase / merge nhánh mới nhất từ `main` trước khi mở PR.
- [ ] Đã cập nhật trạng thái trong `tasks/todo.md` và `WBS_Project_Management.md`.
