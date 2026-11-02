import https from 'https';

const GITHUB_OWNER = 'MinhELY1402';
const GITHUB_REPO = 'GuGuGaGa-';
const token = process.argv[2] || process.env.GITHUB_TOKEN;

if (!token) {
  console.log('\n❌ Vui lòng cung cấp GitHub Personal Access Token:');
  console.log('👉 Cách chạy: node scripts/update_issue_timelines.js <GITHUB_TOKEN>\n');
  process.exit(1);
}

const timelineData = {
  2: { start: '02/11/2026', end: '05/11/2026', hours: '40 giờ', assignee: 'TV1 (Backend Lead - MinhELY1402)' },
  3: { start: '02/11/2026', end: '05/11/2026', hours: '40 giờ', assignee: 'TV1 (Backend Lead - MinhELY1402)' },
  4: { start: '05/11/2026', end: '08/11/2026', hours: '60 giờ', assignee: 'TV1 (Backend Lead - MinhELY1402)' },
  5: { start: '09/11/2026', end: '11/11/2026', hours: '60 giờ', assignee: 'TV1 (Backend Lead - MinhELY1402)' },
  6: { start: '10/11/2026', end: '13/11/2026', hours: '80 giờ', assignee: 'TV1 (Backend Lead - MinhELY1402)' },
  7: { start: '11/11/2026', end: '13/11/2026', hours: '60 giờ', assignee: 'TV1 (Backend Lead - MinhELY1402)' },
  8: { start: '13/11/2026', end: '15/11/2026', hours: '40 giờ', assignee: 'TV1 (Backend Lead - MinhELY1402)' },
  9: { start: '03/11/2026', end: '08/11/2026', hours: '40 giờ', assignee: 'TV2 (Mobile Lead - Tran Thi B)' },
  10: { start: '09/11/2026', end: '11/11/2026', hours: '60 giờ', assignee: 'TV2 (Mobile Lead - Tran Thi B)' },
  11: { start: '10/11/2026', end: '12/11/2026', hours: '60 giờ', assignee: 'TV2 (Mobile Lead - Tran Thi B)' },
  12: { start: '11/11/2026', end: '13/11/2026', hours: '40 giờ', assignee: 'TV2 (Mobile Lead - Tran Thi B)' },
  13: { start: '13/11/2026', end: '15/11/2026', hours: '60 giờ', assignee: 'TV2 (Mobile Lead - Tran Thi B)' },
  14: { start: '13/11/2026', end: '15/11/2026', hours: '80 giờ', assignee: 'TV2 (Mobile Lead - Tran Thi B)' },
  15: { start: '13/11/2026', end: '14/11/2026', hours: '40 giờ', assignee: 'TV2 (Mobile Lead - Tran Thi B)' },
  16: { start: '14/11/2026', end: '15/11/2026', hours: '60 giờ', assignee: 'TV2 (Mobile Lead - Tran Thi B)' },
  17: { start: '14/11/2026', end: '15/11/2026', hours: '60 giờ', assignee: 'TV2 (Mobile Lead - Tran Thi B)' },
  18: { start: '14/11/2026', end: '15/11/2026', hours: '40 giờ', assignee: 'TV2 (Mobile Lead - Tran Thi B)' },
  19: { start: '13/11/2026', end: '15/11/2026', hours: '60 giờ', assignee: 'TV3 (QA & AI Dev - Le Van C)' },
  20: { start: '09/11/2026', end: '12/11/2026', hours: '60 giờ', assignee: 'TV3 (QA & AI Dev - Le Van C)' },
  21: { start: '13/11/2026', end: '15/11/2026', hours: '60 giờ', assignee: 'TV3 (QA & AI Dev - Le Van C)' },
  22: { start: '14/11/2026', end: '15/11/2026', hours: '40 giờ', assignee: 'TV3 (QA & AI Dev - Le Van C)' },
  23: { start: '02/11/2026', end: '06/11/2026', hours: '60 giờ', assignee: 'TV3 (QA & AI Dev - Le Van C)' },
  24: { start: '09/11/2026', end: '13/11/2026', hours: '80 giờ', assignee: 'TV3 (QA & AI Dev - Le Van C)' },
  25: { start: '05/11/2026', end: '08/11/2026', hours: '40 giờ', assignee: 'TV3 (QA & AI Dev - Le Van C)' },
  26: { start: '15/11/2026', end: '16/11/2026', hours: '40 giờ', assignee: 'TV3 (QA & AI Dev - Le Van C)' },
  27: { start: '15/11/2026', end: '16/11/2026', hours: '80 giờ', assignee: 'TV3 (QA Lead - Le Van C)' },
  28: { start: '16/11/2026', end: '16/11/2026', hours: '40 giờ', assignee: 'TV1 (PM Lead - MinhELY1402)' }
};

function getIssue(issueNum) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues/${issueNum}`,
      method: 'GET',
      headers: {
        'User-Agent': 'NodeJS',
        'Authorization': `token ${token}`
      }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          resolve(null);
        }
      });
    });
    req.on('error', () => resolve(null));
    req.end();
  });
}

function updateIssue(issueNum, newBody) {
  return new Promise((resolve) => {
    const postData = JSON.stringify({ body: newBody });
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues/${issueNum}`,
      method: 'PATCH',
      headers: {
        'User-Agent': 'NodeJS',
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log(`✅ [${issueNum}] Đã cập nhật mốc thời gian thành công!`);
          resolve(true);
        } else {
          console.error(`❌ [${issueNum}] Lỗi cập nhật: HTTP ${res.statusCode}`);
          resolve(false);
        }
      });
    });
    req.on('error', (e) => {
      console.error(`❌ Lỗi kết nối: ${e.message}`);
      resolve(false);
    });
    req.write(postData);
    req.end();
  });
}

async function run() {
  console.log(`\n🚀 BẮT ĐẦU CẬP NHẬT KẾ HOẠCH THỜI GIAN VÀO 27 ISSUES TRÊN GITHUB...\n`);

  for (const [num, info] of Object.entries(timelineData)) {
    const issue = await getIssue(num);
    if (!issue) {
      console.log(`⚠️ Không tìm thấy Issue #${num}`);
      continue;
    }

    const timeBlock = `\n### ⏱ Kế Hoạch Thời Gian & Ước Tính (Time & Estimation)\n- **Ngày bắt đầu (Start Date)**: \`${info.start}\`\n- **Hạn hoàn thành (Due Date)**: \`${info.end}\`\n- **Ước tính nỗ lực (Estimate)**: \`${info.hours}\`\n- **Người phụ trách (Assignee)**: \`${info.assignee}\`\n`;

    let currentBody = issue.body || '';
    let newBody;
    if (currentBody.includes('### ⏱ Kế Hoạch Thời Gian')) {
      newBody = currentBody.replace(/### ⏱ Kế Hoạch Thời Gian[\s\S]*?(?=### 📝 1|$)/, timeBlock + '\n');
    } else {
      // Chèn ngay sau thông tin gói WBS
      const target = '### 📝 1. Mô Tả Công Việc';
      if (currentBody.includes(target)) {
        newBody = currentBody.replace(target, timeBlock + '\n' + target);
      } else {
        newBody = currentBody + '\n' + timeBlock;
      }
    }

    await updateIssue(num, newBody);
    await new Promise(r => setTimeout(r, 400));
  }

  console.log(`\n🎉 HOÀN TẤT! Cả 27 issues trên GitHub đã được bổ sung đầy đủ Start Date, Due Date và Giờ ước tính!`);
}

run();
