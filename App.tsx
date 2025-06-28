import React, { useState, useCallback } from 'react';
import { CONFIGURATION_CARDS, FUNDAMENTAL_TECHNIQUES, ADVANCED_TECHNIQUES, CODE_PROMPTING_TECHNIQUES, BEST_PRACTICES, MODAL_CONTENT } from './constants';
import type { ModalId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import InfoCard from './components/InfoCard';
import TechniqueCard from './components/TechniqueCard';
import BestPracticeCard from './components/BestPracticeCard';
import Modal from './components/Modal';
import SelfConsistencyChart from './components/SelfConsistencyChart';
import TreeOfThoughtsDiagram from './components/TreeOfThoughtsDiagram';

const App: React.FC = () => {
    const [activeModal, setActiveModal] = useState<ModalId | null>(null);

    const handleOpenModal = useCallback((modalId: ModalId) => {
        setActiveModal(modalId);
    }, []);

    const handleCloseModal = useCallback(() => {
        setActiveModal(null);
    }, []);

    const currentModalData = activeModal ? MODAL_CONTENT[activeModal] : null;

    return (
        <div className="bg-gray-100">
            <Header />

            <div className="container mx-auto p-4 md:p-8 max-w-7xl">
                <main>
                    <Section 
                        id="introduction"
                        title="Prompt Engineering là gì?"
                        titleClassName="text-3xl font-bold text-primary-deep mb-4"
                        containerClassName="bg-white rounded-lg shadow-lg p-8 border-l-4 border-secondary mb-16"
                    >
                        <p className="text-lg text-dark-text">Đây là nghệ thuật và khoa học của việc thiết kế các câu lệnh (prompt) đầu vào để mô hình ngôn ngữ lớn (LLM) tạo ra kết quả mong muốn. Một prompt tốt không chỉ là một câu hỏi, mà là một bộ chỉ dẫn chi tiết, cung cấp ngữ cảnh, định dạng và vai trò để AI có thể "suy nghĩ" và phản hồi một cách chính xác, sáng tạo và an toàn.</p>
                    </Section>

                    <Section
                        id="configuration"
                        title="Hiệu Chỉnh Đầu Ra Của AI"
                        description="Trước khi đi sâu vào các kỹ thuật viết prompt, hãy tìm hiểu cách kiểm soát 'tính cách' của AI thông qua các tham số quan trọng. Việc điều chỉnh chúng sẽ ảnh hưởng trực tiếp đến độ sáng tạo, tính nhất quán và sự đa dạng của câu trả lời."
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {CONFIGURATION_CARDS.map(card => (
                                <InfoCard key={card.id} {...card} onOpenModal={() => handleOpenModal(card.id)} />
                            ))}
                        </div>
                    </Section>
                    
                    <Section
                        id="techniques-fundamental"
                        title="Các Kỹ Thuật Prompt Nền Tảng"
                        description="Đây là những khối xây dựng cơ bản cho mọi prompt. Nắm vững chúng là bước đầu tiên để giao tiếp hiệu quả với AI."
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {FUNDAMENTAL_TECHNIQUES.map(tech => (
                               <TechniqueCard key={tech.id} {...tech} onOpenModal={() => handleOpenModal(tech.id)} containerClassName={tech.id === 'rolePromptModal' ? 'md:col-span-2' : ''}/>
                            ))}
                        </div>
                    </Section>
                    
                    <Section
                        id="techniques-advanced"
                        title="Các Kỹ Thuật Prompt Nâng Cao"
                        description="Khi các bài toán trở nên phức tạp, chúng ta cần các kỹ thuật tinh vi hơn để dẫn dắt quá trình 'suy luận' của AI. Những phương pháp này giúp AI chia nhỏ vấn đề, đánh giá các lựa chọn và đưa ra câu trả lời logic hơn."
                    >
                        <div className="space-y-12">
                             {ADVANCED_TECHNIQUES.map(tech => (
                               <TechniqueCard key={tech.id} {...tech} onOpenModal={() => handleOpenModal(tech.id)}>
                                    {tech.id === 'selfConsistencyModal' && (
                                        <>
                                            <div className="relative w-full max-w-xl mx-auto h-80 md:h-96 my-6">
                                                <SelfConsistencyChart />
                                            </div>
                                            <div className="text-center mt-2">
                                                <p className="font-semibold text-primary-deep">Các câu trả lời được tạo ra</p>
                                                <p className="text-sm text-gray-500 mt-1">Biểu đồ minh họa cách Self-Consistency chọn câu trả lời phổ biến nhất từ nhiều chuỗi tư duy khác nhau.</p>
                                            </div>
                                        </>
                                    )}
                                    {tech.id === 'totModal' && <TreeOfThoughtsDiagram />}
                               </TechniqueCard>
                            ))}
                        </div>
                    </Section>

                    <Section
                        id="techniques-code"
                        title="Code Prompting: AI cho Lập Trình Viên"
                        description="Gemini có thể là một trợ lý đắc lực cho lập trình viên, giúp tăng tốc độ viết code, giải thích các đoạn mã phức tạp, dịch giữa các ngôn ngữ và thậm chí là gỡ lỗi."
                    >
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {CODE_PROMPTING_TECHNIQUES.map(tech => (
                               <TechniqueCard key={tech.id} {...tech} onOpenModal={() => handleOpenModal(tech.id)} />
                            ))}
                        </div>
                    </Section>

                    <Section
                        id="best-practices"
                        title="Thực Hành Tốt Nhất (Best Practices)"
                        description="Để trở thành một chuyên gia prompt, hãy tuân thủ những nguyên tắc vàng sau đây. Chúng sẽ giúp bạn tạo ra các prompt rõ ràng, hiệu quả và dễ đoán hơn."
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {BEST_PRACTICES.map(practice => (
                                <BestPracticeCard key={practice.title} {...practice} />
                            ))}
                        </div>
                    </Section>

                </main>

                <section id="download" className="text-center mt-24 mb-16 p-8 bg-white rounded-lg shadow-xl border-t-4 border-primary-main">
                    <h2 className="text-3xl font-bold text-primary-deep mb-4">
                        Tải Về Toàn Bộ Hướng Dẫn
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Nhận ngay tài liệu gốc "Prompt Engineering Guide" đầy đủ 68 trang từ Google để tìm hiểu sâu hơn và làm chủ mọi kỹ thuật.
                    </p>
                    <a
                        href="https://www.innopreneur.io/wp-content/uploads/2025/04/22365_3_Prompt-Engineering_v7-1.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary-main text-white font-bold rounded-lg shadow-lg hover:bg-primary-deep transition-all duration-300 transform hover:scale-105"
                    >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        Tải xuống PDF Miễn Phí
                    </a>
                    <p className="text-gray-700 mt-8 font-semibold text-lg">
                        Infographic được biên soạn và thiết kế bởi{' '}
                        <a
                            href="https://www.ductuenam.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 hover:text-red-800 underline"
                        >
                            Đức Tuệ Nam
                        </a>
                    </p>
                </section>

                <Footer />

                <Modal isOpen={!!activeModal} onClose={handleCloseModal}>
                    {currentModalData && (
                        <>
                            <h2 className="text-3xl font-bold text-primary-deep mb-4">{currentModalData.title}</h2>
                            {currentModalData.content}
                        </>
                    )}
                </Modal>
            </div>
        </div>
    );
};

export default App;