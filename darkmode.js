// 切换主题函数
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            
            // 保存用户偏好
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
        }

        // 初始化时检查保存的偏好
        window.onload = function() {
            const savedMode = localStorage.getItem('darkMode');
            if (savedMode === 'true') {
                document.body.classList.add('dark-mode');
            }
        }