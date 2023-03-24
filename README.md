# socketIO
https://www.youtube.com/playlist?list=PLzrVYRai0riSoyiPtqrtyKE82IJNRFJit


# app chat
3 chức năng: 
- 3 chức năng:
    - Đăng ký người dùng
        - Client nhập họ tên→ emit lên server
            - Nếu tên ng dùng chưa có → Gửi thông báo cho tất cả những ng đang online có ng dùng mới tên xxx
            - Nếu tên ng dùng tồn tại → gửi thông báo về client báo tên người dùng đã tồn tại
    - Chat
        - Có 2 màn:
            - Ds những ng đang chat
            - Nội dung chat
        - Khi 1 client mất mạng hoặc thoát → Gửi cho tất cả các client khác thông để cập nhật danh sách người đang on
        - Khi gửi nd chat → tất cả mọi người đều thấy nd chat
    - Bắt sự kiện
        - Hiện dấu “…” khi ng dùng đang nhập. Nhập xong thì không hiện nữa
