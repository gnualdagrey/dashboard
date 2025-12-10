import json
import os

files = [
    'package.json',
    'vite.config.js',
    'index.html',
    'src/main.jsx',
    'src/App.jsx',
    'src/index.css',
    'src/components/Sidebar.jsx',
    'src/components/Sidebar.module.css',
    'src/components/Topbar.jsx',
    'src/components/Topbar.module.css',
    'src/components/MainLayout.jsx',
    'src/components/MainLayout.module.css',
    'src/components/StatsCards.jsx',
    'src/components/StatsCards.module.css',
    'src/components/RecentActivityTable.jsx',
    'src/components/RecentActivityTable.module.css'
]

project_data = {}

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r') as f:
            project_data[file_path] = f.read()

with open('project_files.json', 'w') as f:
    json.dump(project_data, f, indent=2)

print("JSON generated successfully.")
