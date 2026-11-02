import https from 'https';

const GITHUB_OWNER = 'MinhELY1402';
const token = process.argv[2] || process.env.GITHUB_TOKEN;

if (!token) {
  console.log('\n❌ Vui lòng cung cấp token: node scripts/auto_sync_project_roadmap.js <TOKEN>');
  process.exit(1);
}

const taskSchedule = {
  2: { start: '2026-11-02', end: '2026-11-05', wbs: '1.1.1', hours: 40 },
  3: { start: '2026-11-02', end: '2026-11-05', wbs: '1.1.2', hours: 40 },
  4: { start: '2026-11-05', end: '2026-11-08', wbs: '1.2.1', hours: 60 },
  5: { start: '2026-11-09', end: '2026-11-11', wbs: '1.2.2', hours: 60 },
  6: { start: '2026-11-10', end: '2026-11-13', wbs: '1.2.3', hours: 80 },
  7: { start: '2026-11-11', end: '2026-11-13', wbs: '1.2.4', hours: 60 },
  8: { start: '2026-11-13', end: '2026-11-15', wbs: '1.2.5', hours: 40 },
  9: { start: '2026-11-03', end: '2026-11-08', wbs: '1.3.1', hours: 40 },
  10: { start: '2026-11-09', end: '2026-11-11', wbs: '1.3.2', hours: 60 },
  11: { start: '2026-11-10', end: '2026-11-12', wbs: '1.3.3', hours: 60 },
  12: { start: '2026-11-11', end: '2026-11-13', wbs: '1.3.4', hours: 40 },
  13: { start: '2026-11-13', end: '2026-11-15', wbs: '1.3.5', hours: 60 },
  14: { start: '2026-11-13', end: '2026-11-15', wbs: '1.3.6', hours: 80 },
  15: { start: '2026-11-13', end: '2026-11-14', wbs: '1.4.1', hours: 40 },
  16: { start: '2026-11-14', end: '2026-11-15', wbs: '1.4.2', hours: 60 },
  17: { start: '2026-11-14', end: '2026-11-15', wbs: '1.4.3', hours: 60 },
  18: { start: '2026-11-14', end: '2026-11-15', wbs: '1.4.4', hours: 40 },
  19: { start: '2026-11-13', end: '2026-11-15', wbs: '1.5.1', hours: 60 },
  20: { start: '2026-11-09', end: '2026-11-12', wbs: '1.5.2', hours: 60 },
  21: { start: '2026-11-13', end: '2026-11-15', wbs: '1.5.3', hours: 60 },
  22: { start: '2026-11-14', end: '2026-11-15', wbs: '1.5.4', hours: 40 },
  23: { start: '2026-11-02', end: '2026-11-06', wbs: '1.6.1', hours: 60 },
  24: { start: '2026-11-09', end: '2026-11-13', wbs: '1.6.2', hours: 80 },
  25: { start: '2026-11-05', end: '2026-11-08', wbs: '1.6.3', hours: 40 },
  26: { start: '2026-11-15', end: '2026-11-16', wbs: '1.6.4', hours: 40 },
  27: { start: '2026-11-15', end: '2026-11-16', wbs: '1.7.1', hours: 80 },
  28: { start: '2026-11-16', end: '2026-11-16', wbs: '1.7.2', hours: 40 }
};

function graphql(query, variables = {}) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ query, variables });
    const req = https.request({
      hostname: 'api.github.com',
      path: '/graphql',
      method: 'POST',
      headers: {
        'User-Agent': 'NodeJS',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function run() {
  console.log(`\n🔍 Đang quét danh sách Project v2 của user ${GITHUB_OWNER}...`);
  const projectsRes = await graphql(`
    query($login: String!) {
      user(login: $login) {
        projectsV2(first: 5) {
          nodes {
            id
            title
            number
            fields(first: 20) {
              nodes {
                ... on ProjectV2Field {
                  id
                  name
                  dataType
                }
                ... on ProjectV2SingleSelectField {
                  id
                  name
                  dataType
                }
              }
            }
          }
        }
      }
    }
  `, { login: GITHUB_OWNER });

  if (projectsRes.errors) {
    console.error('❌ Lỗi quyền hạn (Scopes):', projectsRes.errors[0].message);
    if (projectsRes.errors[0].message.includes('read:project') || projectsRes.errors[0].message.includes('project')) {
      console.log('\n👉 Vui lòng vào GitHub Settings -> Developer settings -> Personal access tokens:');
      console.log('   Tích chọn thêm quyền: [x] project (Full control of projects)');
    }
    return;
  }

  const projects = projectsRes.data?.user?.projectsV2?.nodes || [];
  if (projects.length === 0) {
    console.log('❌ Không tìm thấy Project nào của user.');
    return;
  }

  console.log(`Tìm thấy ${projects.length} project(s):`);
  for (let p of projects) {
    console.log(`- Project #${p.number}: "${p.title}" (ID: ${p.id})`);
  }

  // Chọn project có title chứa 'untitled' hoặc 'GuGuGaGa'
  const project = projects.find(p => p.title.toLowerCase().includes('untitled') || p.title.toLowerCase().includes('gugugaga')) || projects[projects.length - 1];
  console.log(`✅ Đã kết nối tới Project: "${project.title}" (ID: ${project.id})`);


  let fields = project.fields.nodes;
  let startDateField = fields.find(f => f.name.toLowerCase().includes('start date') || f.name.toLowerCase() === 'start');
  let endDateField = fields.find(f => f.name.toLowerCase().includes('end date') || f.name.toLowerCase().includes('target date') || f.name.toLowerCase() === 'end');

  // Nếu chưa có trường Start date, tạo tự động
  if (!startDateField) {
    console.log('⚡ Đang tự động tạo trường "Start date" trong Project...');
    const createStartRes = await graphql(`
      mutation($projectId: ID!) {
        createProjectV2Field(input: { projectId: $projectId, dataType: DATE, name: "Start date" }) {
          projectV2Field {
            ... on ProjectV2Field {
              id
              name
            }
          }
        }
      }
    `, { projectId: project.id });
    startDateField = createStartRes.data?.createProjectV2Field?.projectV2Field;
    console.log(`✅ Đã tạo trường "Start date" (ID: ${startDateField?.id})`);
  } else {
    console.log(`ℹ️ Trường "Start date" đã tồn tại (ID: ${startDateField.id})`);
  }

  // Nếu chưa có trường End date, tạo tự động
  if (!endDateField) {
    console.log('⚡ Đang tự động tạo trường "End date" trong Project...');
    const createEndRes = await graphql(`
      mutation($projectId: ID!) {
        createProjectV2Field(input: { projectId: $projectId, dataType: DATE, name: "End date" }) {
          projectV2Field {
            ... on ProjectV2Field {
              id
              name
            }
          }
        }
      }
    `, { projectId: project.id });
    endDateField = createEndRes.data?.createProjectV2Field?.projectV2Field;
    console.log(`✅ Đã tạo trường "End date" (ID: ${endDateField?.id})`);
  } else {
    console.log(`ℹ️ Trường "End date" đã tồn tại (ID: ${endDateField.id})`);
  }

  // Lấy danh sách item trong project
  console.log('\n📥 Đang tải danh sách các thẻ trong Project...');
  const itemsRes = await graphql(`
    query($projectId: ID!) {
      node(id: $projectId) {
        ... on ProjectV2 {
          items(first: 50) {
            nodes {
              id
              content {
                ... on Issue {
                  number
                  title
                }
              }
            }
          }
        }
      }
    }
  `, { projectId: project.id });

  const items = itemsRes.data?.node?.items?.nodes || [];
  console.log(`📊 Tìm thấy ${items.length} thẻ công việc trong Project.`);
  if (items.length === 0) {
    console.log('DEBUG itemsRes:', JSON.stringify(itemsRes, null, 2));
  }


  console.log('\n🚀 BẮT ĐẦU CẬP NHẬT START DATE & END DATE CHO TỪNG TASK...');
  for (const item of items) {
    const issueNum = item.content?.number;
    if (!issueNum || !taskSchedule[issueNum]) continue;

    const sched = taskSchedule[issueNum];

    // Cập nhật Start date
    if (startDateField?.id) {
      await graphql(`
        mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!, $date: Date!) {
          updateProjectV2ItemFieldValue(
            input: {
              projectId: $projectId
              itemId: $itemId
              fieldId: $fieldId
              value: { date: $date }
            }
          ) {
            projectV2Item { id }
          }
        }
      `, {
        projectId: project.id,
        itemId: item.id,
        fieldId: startDateField.id,
        date: sched.start
      });
    }

    // Cập nhật End date
    if (endDateField?.id) {
      await graphql(`
        mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!, $date: Date!) {
          updateProjectV2ItemFieldValue(
            input: {
              projectId: $projectId
              itemId: $itemId
              fieldId: $fieldId
              value: { date: $date }
            }
          ) {
            projectV2Item { id }
          }
        }
      `, {
        projectId: project.id,
        itemId: item.id,
        fieldId: endDateField.id,
        date: sched.end
      });
    }

    console.log(`✅ [#${issueNum}] Đã gắn lịch: ${sched.start} ➔ ${sched.end} (WBS ${sched.wbs})`);
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\n🎉 HOÀN TẤT TỰ ĐỘNG! Hãy quay lại trang Project và F5 (Refresh), các thanh Gantt bar sẽ hiển thị 100%!`);
}

run();
