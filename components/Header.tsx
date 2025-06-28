import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center pt-12 pb-8 md:pt-16 md:pb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-deep mb-4">
                Chinh Phục Kỹ Thuật Prompt
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Một infographic toàn diện dựa trên tài liệu của Google, giúp bạn tạo ra những câu lệnh AI hiệu quả nhất.
            </p>
            <div className="mt-8 max-w-3xl mx-auto p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
                <p className="text-blue-800 font-medium">
                    🎁 Đọc đến cuối trang để nhận miễn phí tài liệu "Prompt Engineering Guide" đầy đủ 68 trang từ Google!
                </p>
            </div>
        </header>
    );
};

export default Header;