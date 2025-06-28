import React from 'react';
import type { ModalId, InfoCardData, TechniqueData, BestPracticeData } from './types';

export const CONFIGURATION_CARDS: InfoCardData[] = [
    { id: 'temperatureModal', icon: '🌡️', title: 'Temperature', description: 'Kiểm soát độ "ngẫu nhiên" hay "sáng tạo" của mô hình. Nhiệt độ càng thấp, kết quả càng xác định; càng cao, kết quả càng đa dạng.' },
    { id: 'topKModal', icon: '🎲', title: 'Top-K', description: 'Giới hạn số lượng từ có khả năng cao nhất mà mô hình xem xét ở mỗi bước tạo văn bản.' },
    { id: 'topPModal', icon: '🎯', title: 'Top-P', description: 'Chọn từ trong một ngưỡng xác suất tích lũy. Linh hoạt hơn Top-K, cho phép danh sách từ ứng viên thay đổi kích thước.' },
];

export const FUNDAMENTAL_TECHNIQUES: TechniqueData[] = [
    { id: 'zeroShotModal', title: 'Zero-shot Prompting', description: 'Bạn chỉ cần đưa ra yêu cầu trực tiếp mà không cần cung cấp bất kỳ ví dụ nào. Mô hình sẽ dựa vào kiến thức đã được huấn luyện để trả lời.' },
    { id: 'fewShotModal', title: 'Few-shot Prompting', description: 'Cung cấp cho mô hình một hoặc vài ví dụ (shots) về cách thực hiện tác vụ. Điều này giúp "dạy" mô hình định dạng đầu ra và phong cách bạn mong muốn.' },
    { id: 'rolePromptModal', title: 'System, Contextual & Role Prompting', description: 'Gán cho AI một vai trò, cung cấp ngữ cảnh hoặc chỉ dẫn hệ thống để định hình phong cách, kiến thức và mục tiêu của phản hồi.', containerClassName: 'md:col-span-2' },
];

export const ADVANCED_TECHNIQUES: TechniqueData[] = [
    { id: 'cotModal', title: 'Chain of Thought (CoT) - Chuỗi Tư Duy', description: 'Yêu cầu mô hình giải thích từng bước suy luận của nó trước khi đưa ra câu trả lời cuối cùng. Điều này đặc biệt hữu ích cho các bài toán logic, toán học, hoặc các vấn đề cần suy luận đa bước.' },
    { id: 'selfConsistencyModal', title: 'Self-Consistency - Tự Nhất Quán', description: 'Tạo ra nhiều chuỗi tư duy khác nhau và chọn câu trả lời xuất hiện thường xuyên nhất. Giúp tăng độ tin cậy và giảm thiểu sai sót do một lộ trình suy luận sai lầm.' },
    { id: 'stepBackModal', title: 'Step-back Prompting', description: 'Yêu cầu AI lùi lại một bước để suy nghĩ về một khái niệm hoặc nguyên tắc chung trước khi giải quyết vấn đề cụ thể, giúp cải thiện khả năng suy luận.', isNew: true },
    { id: 'totModal', title: 'Tree of Thoughts (ToT) - Cây Tư Duy', description: 'Mô phỏng quá trình suy luận toàn diện hơn bằng cách cho phép mô hình khám phá nhiều nhánh suy luận khác nhau như một cái cây, tự đánh giá để quyết định nhánh nào hứa hẹn nhất.' },
    { id: 'reActModal', title: 'ReAct (Reason & Act) - Suy Luận & Hành Động', description: 'Kết hợp sức mạnh suy luận của LLM với khả năng tương tác với các công cụ bên ngoài (ví dụ: tìm kiếm trên web, chạy code). Mô hình lặp đi lặp lại chu trình: Thought -> Act -> Observation.' },
    { id: 'apeModal', title: 'Automatic Prompt Engineering (APE)', description: 'Sử dụng chính mô hình ngôn ngữ lớn để tự động tạo ra và lựa chọn những prompt hiệu quả nhất cho một tác vụ, một phương pháp "dùng AI để dạy AI".', isNew: true },
];

export const CODE_PROMPTING_TECHNIQUES: TechniqueData[] = [
    { id: 'codeWriteModal', title: 'Viết Code (Code Generation)', description: 'Yêu cầu AI tạo ra các đoạn code, hàm, hoặc thậm chí toàn bộ script dựa trên mô tả bằng ngôn ngữ tự nhiên.' },
    { id: 'codeExplainModal', title: 'Giải thích & Gỡ lỗi Code', description: 'Dán một đoạn code và yêu cầu AI giải thích chức năng, tìm lỗi tiềm ẩn hoặc đề xuất cách cải thiện.' },
];

export const BEST_PRACTICES: BestPracticeData[] = [
    {
        title: "Cung cấp ví dụ (Few-shot)",
        description: "Đây là cách hiệu quả nhất để 'dạy' AI. Ví dụ giúp mô hình hiểu chính xác định dạng, phong cách và kết quả bạn mong muốn.",
        doText: "Dùng ví dụ để chỉ định định dạng đầu ra.",
        doCode: "Prompt: Dịch các câu sau sang tiếng Pháp:\n\nTrâu -> Buffle\nBò -> Vache\nMèo ->",
        dontText: "Không có ví dụ.",
        dontCode: "Prompt: Dịch 'Mèo' sang tiếng Pháp.",
    },
    {
        title: "Thiết kế với sự đơn giản",
        description: "Prompt nên súc tích, rõ ràng. Nếu bạn thấy khó hiểu, AI cũng vậy. Tránh ngôn ngữ phức tạp và thông tin không cần thiết.",
        doText: "Rõ ràng, đi thẳng vào vấn đề, sử dụng động từ mạnh.",
        doCode: "Prompt: Đóng vai một hướng dẫn viên du lịch. Liệt kê 3 địa điểm ở Hà Nội cho gia đình có trẻ 5 tuổi.",
        dontText: "Mơ hồ, dài dòng.",
        dontCode: "Prompt: Tôi sắp đi Hà Nội với con tôi, nó 5 tuổi, tôi nên đi đâu chơi nhỉ, cho tôi vài gợi ý với.",
    },
    {
        title: "Cụ thể về đầu ra",
        description: "Hướng dẫn càng chi tiết, kết quả càng chính xác. Nêu rõ độ dài, định dạng, văn phong mong muốn.",
        doText: "Chỉ định rõ cấu trúc và nội dung.",
        doCode: "Prompt: Viết một bài đăng blog 3 đoạn về 5 lợi ích của thiền. Văn phong thân thiện, dễ hiểu.",
        dontText: "Quá chung chung.",
        dontCode: "Prompt: Viết về lợi ích của thiền.",
    },
    {
        title: "Ưu tiên chỉ dẫn hơn ràng buộc",
        description: "Tập trung vào việc yêu cầu AI 'làm gì' thay vì 'không được làm gì'. Chỉ dẫn tích cực giúp AI sáng tạo trong khuôn khổ, trong khi quá nhiều ràng buộc có thể gây nhầm lẫn.",
        doText: "Nói cho AI biết bạn muốn gì.",
        doCode: "Prompt: Tóm tắt văn bản sau thành 3 gạch đầu dòng, chỉ tập trung vào các sự kiện chính.",
        dontText: "Liệt kê những gì không được làm.",
        dontCode: "Prompt: Tóm tắt văn bản sau. Đừng viết dài quá, đừng kể chi tiết phụ, đừng dùng câu phức.",
    }
];


const ModalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <>
        <h3 className="text-xl font-semibold text-primary-main mt-6 mb-3">{title}</h3>
        {children}
    </>
);

const ModalParagraph: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <p className={`mb-4 leading-relaxed text-dark-text ${className || ''}`}>{children}</p>
);

const ModalCode: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <pre className="bg-light-bg p-4 border-l-4 border-secondary rounded-md my-4 font-mono text-sm whitespace-pre-wrap break-all shadow-inner"><code>{children}</code></pre>
);

const ModalList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ul className="list-disc pl-6 space-y-2 text-dark-text">{children}</ul>
);

const CodeBlock: React.FC<{children: React.ReactNode}> = ({children}) => (
    <pre className="block bg-gray-200 p-2 rounded mt-2"><code className="text-sm">{children}</code></pre>
)

export const MODAL_CONTENT: Record<ModalId, { title: string, content: React.ReactNode }> = {
    temperatureModal: {
        title: 'Temperature: Kiểm soát sự "Sáng tạo" của AI',
        content: (
            <>
                <ModalParagraph>Temperature là một tham số quan trọng quyết định mức độ ngẫu nhiên hay "sáng tạo" trong đầu ra của mô hình. Nó ảnh hưởng đến việc mô hình sẽ chọn từ có xác suất cao nhất (nhiệt độ thấp) hay khám phá các từ có xác suất thấp hơn (nhiệt độ cao).</ModalParagraph>
                <ModalParagraph>Khi nhiệt độ được đặt thấp (ví dụ: 0 hoặc rất gần 0), mô hình sẽ có xu hướng chọn những từ có xác suất cao nhất, dẫn đến đầu ra rất xác định và lặp lại. Điều này lý tưởng cho các tác vụ cần độ chính xác cao như tóm tắt, dịch thuật, hoặc trả lời câu hỏi trực tiếp. Ngược lại, khi nhiệt độ cao, mô hình sẽ "mạo hiểm" hơn, chọn các từ ít phổ biến hơn, tạo ra kết quả đa dạng, bất ngờ và sáng tạo hơn, phù hợp cho viết kịch bản, thơ ca hay ý tưởng mới.</ModalParagraph>
                <ModalSection title="Ứng dụng thực tế & Lời khuyên:">
                    <ModalList>
                        <li><strong className="text-primary-main">Temperature = 0 (hoặc rất thấp, ~0.1):</strong> Dùng cho các tác vụ cần tính chính xác, không có chỗ cho sự sáng tạo. Ví dụ: trích xuất thông tin, tóm tắt tài liệu pháp lý/y tế, lập trình, tính toán.</li>
                        <li><strong className="text-primary-main">Temperature = 0.5 - 0.7:</strong> Phù hợp cho các tác vụ cần một chút sáng tạo nhưng vẫn giữ được sự mạch lạc. Ví dụ: viết nội dung blog, tạo ý tưởng quảng cáo cơ bản.</li>
                        <li><strong className="text-primary-main">Temperature = 0.8 - 1.0:</strong> Dùng cho các tác vụ đòi hỏi sự sáng tạo cao, đa dạng ý tưởng. Ví dụ: viết truyện, thơ, kịch bản, brainstorm ý tưởng mới lạ.</li>
                        <li><strong className="text-primary-main">Temperature &gt; 1.0:</strong> Chỉ nên dùng để thử nghiệm, vì kết quả có thể trở nên rất ngẫu nhiên, khó hiểu hoặc không liên quan.</li>
                    </ModalList>
                </ModalSection>
            </>
        ),
    },
    topKModal: {
        title: 'Top-K: Giới hạn lựa chọn từ vựng',
        content: (
            <>
                <ModalParagraph>Top-K là một kỹ thuật lấy mẫu (sampling) mà ở mỗi bước tạo văn bản, mô hình chỉ xem xét K từ có xác suất cao nhất để chọn từ tiếp theo. Điều này giúp kiểm soát sự đa dạng của đầu ra bằng cách giới hạn số lượng các từ tiềm năng mà mô hình có thể lựa chọn.</ModalParagraph>
                <ModalParagraph>Nếu K nhỏ, mô hình sẽ bị hạn chế lựa chọn vào một số ít từ rất phổ biến, làm cho đầu ra an toàn và dễ đoán hơn. Ngược lại, nếu K lớn, mô hình có thể chọn từ một tập hợp từ rộng hơn, tạo ra văn bản đa dạng và sáng tạo hơn.</ModalParagraph>
                <ModalSection title="Ứng dụng thực tế & Lời khuyên:">
                    <ModalList>
                        <li><strong className="text-primary-main">K = 1:</strong> Tương đương với "greedy decoding" (giải mã tham lam), luôn chọn từ có xác suất cao nhất. Kết quả rất xác định nhưng có thể thiếu tự nhiên.</li>
                        <li><strong className="text-primary-main">K thấp (~5-20):</strong> Phù hợp cho các tác vụ cần sự chính xác và nhất quán, nhưng vẫn muốn một chút tự nhiên hơn so với K=1. Ví dụ: sinh tiêu đề ngắn gọn, tóm tắt.</li>
                        <li><strong className="text-primary-main">K vừa phải (~30-50):</strong> Cân bằng giữa tính đa dạng và tính phù hợp. Đây thường là điểm khởi đầu tốt cho nhiều tác vụ viết lách thông thường.</li>
                        <li><strong className="text-primary-main">K cao (&gt;50):</strong> Dành cho các trường hợp cần sự sáng tạo tối đa, brainstorm, hoặc khi bạn muốn mô hình khám phá các cách diễn đạt độc đáo.</li>
                        <li><strong className="text-primary-main">Kết hợp với Temperature:</strong> Top-K và Temperature thường được sử dụng cùng nhau. Top-K giới hạn tập hợp các từ, còn Temperature điều chỉnh phân phối xác suất trong tập hợp đó.</li>
                    </ModalList>
                </ModalSection>
            </>
        ),
    },
    topPModal: {
        title: 'Top-P (Nucleus Sampling): Lựa chọn linh hoạt',
        content: (
            <>
                <ModalParagraph>Top-P, còn được gọi là Nucleus Sampling, là một kỹ thuật lấy mẫu linh hoạt hơn Top-K. Thay vì giới hạn số lượng từ K, Top-P chọn một tập hợp các từ có xác suất cao nhất sao cho tổng xác suất tích lũy của chúng không vượt quá một giá trị P (thường từ 0 đến 1).</ModalParagraph>
                <ModalParagraph>Điều này có nghĩa là kích thước của tập hợp từ vựng tiềm năng có thể thay đổi tùy thuộc vào ngữ cảnh. Trong các tình huống mà một vài từ chiếm phần lớn xác suất, tập hợp từ vựng sẽ nhỏ. Trong khi đó, nếu xác suất được phân bổ đều hơn, tập hợp sẽ lớn hơn, cho phép mô hình đa dạng hóa đầu ra một cách tự nhiên hơn.</ModalParagraph>
                <ModalSection title="Ứng dụng thực tế & Lời khuyên:">
                    <ModalList>
                         <li><strong className="text-primary-main">P = 0 (hoặc rất nhỏ):</strong> Tương tự với việc chỉ chọn từ có xác suất cao nhất, giảm đáng kể sự đa dạng.</li>
                         <li><strong className="text-primary-main">P = 0.9 - 0.95:</strong> Là giá trị khởi đầu tốt cho hầu hết các tác vụ. Nó giúp tạo ra văn bản mạch lạc, có ý nghĩa, đồng thời vẫn cho phép một mức độ đa dạng hợp lý.</li>
                         <li><strong className="text-primary-main">P = 1:</strong> Bao gồm tất cả các từ trong từ vựng, có thể dẫn đến kết quả rất ngẫu nhiên, tương tự như Temperature cực cao.</li>
                         <li><strong className="text-primary-main">Ưu điểm so với Top-K:</strong> Top-P thường được ưa chuộng hơn vì nó tự động điều chỉnh số lượng từ được xem xét dựa trên phân phối xác suất, giúp tránh các từ lạ khi phân phối xác suất rất tập trung và vẫn giữ được sự đa dạng khi cần thiết.</li>
                         <li><strong className="text-primary-main">Khuyến nghị:</strong> Thường bắt đầu với Temperature khoảng 0.7-0.9 và Top-P 0.9-0.95 để có được sự cân bằng tốt giữa tính sáng tạo và tính hợp lý.</li>
                    </ModalList>
                </ModalSection>
            </>
        ),
    },
    zeroShotModal: {
        title: 'Zero-shot Prompting: Yêu cầu trực tiếp',
        content: (
            <>
                <ModalParagraph>Zero-shot prompting là kỹ thuật đơn giản nhất, nơi bạn đưa ra một câu lệnh hoặc câu hỏi cho mô hình mà không cần cung cấp bất kỳ ví dụ nào. Mô hình sẽ dựa vào kiến thức tổng quát và khả năng hiểu ngôn ngữ đã được học trong quá trình huấn luyện để tạo ra phản hồi.</ModalParagraph>
                <ModalSection title="Khi nào sử dụng:">
                    <ModalParagraph>Phù hợp cho các câu hỏi dựa trên sự kiện, tóm tắt đơn giản, dịch thuật cơ bản, hoặc tạo nội dung chung chung không yêu cầu định dạng đặc biệt.</ModalParagraph>
                </ModalSection>
                <ModalSection title="Hạn chế:">
                     <ModalParagraph>Kém hiệu quả với các tác vụ phức tạp, yêu cầu suy luận nhiều bước, hoặc khi bạn muốn một định dạng/phong cách đầu ra rất cụ thể. Trong những trường hợp này, cần cân nhắc các kỹ thuật khác như Few-shot hoặc Chain of Thought.</ModalParagraph>
                </ModalSection>
            </>
        ),
    },
    fewShotModal: {
        title: 'Few-shot Prompting: Học từ ví dụ',
        content: (
            <>
                <ModalParagraph>Few-shot prompting là kỹ thuật mà bạn cung cấp cho mô hình một hoặc một vài cặp ví dụ (đầu vào - đầu ra mong muốn) trước khi đưa ra yêu cầu chính. Các ví dụ này giúp mô hình "học" được định dạng, phong cách, và thậm chí là logic suy luận mà bạn muốn nó tuân theo.</ModalParagraph>
                <ModalSection title="Ví dụ: Dạy AI định dạng JSON">
                    <ModalCode>
                        {`Prompt:
Chuyển đổi thông tin sau thành JSON: Tên: An, Tuổi: 25, Thành phố: Hà Nội.
Output: { "name": "An", "age": 25, "city": "Hà Nội" }

Chuyển đổi thông tin sau thành JSON: Tên: Bình, Tuổi: 30, Thành phố: Đà Nẵng.
Output:`}
                    </ModalCode>
                </ModalSection>
                <ModalSection title="Ứng dụng thực tế & Lời khuyên:">
                    <ModalList>
                        <li><strong className="text-primary-main">Định dạng đầu ra:</strong> Rất hiệu quả khi bạn muốn mô hình trả về dữ liệu theo một cấu trúc cụ thể như JSON, bảng biểu...</li>
                        <li><strong className="text-primary-main">Phong cách & giọng điệu:</strong> "Dạy" mô hình viết theo một phong cách cụ thể (ví dụ: hài hước, trang trọng).</li>
                        <li><strong className="text-primary-main">Chất lượng ví dụ:</strong> Các ví dụ phải chính xác và không có lỗi. Một lỗi nhỏ trong ví dụ có thể khiến mô hình hiểu sai.</li>
                    </ModalList>
                </ModalSection>
            </>
        ),
    },
    rolePromptModal: {
        title: 'System, Contextual & Role Prompting',
        content: (
            <>
                <ModalParagraph>Đây là ba cách để cung cấp thông tin nền cho AI, giúp nó hiểu rõ hơn về nhiệm vụ. Chúng có thể được sử dụng riêng lẻ hoặc kết hợp với nhau.</ModalParagraph>
                <ModalSection title="1. System Prompting (Chỉ dẫn Hệ thống)">
                    <ModalParagraph>Đặt ra mục tiêu bao quát, quy tắc chung cho toàn bộ cuộc trò chuyện. Nó giống như việc bạn giao một "sứ mệnh" cho AI.</ModalParagraph>
                    <ModalCode><strong>Prompt:</strong> Bạn là một trợ lý AI chuyên về lịch sử Việt Nam. Luôn trả lời một cách chi tiết và trích dẫn nguồn (nếu có).</ModalCode>
                </ModalSection>
                 <ModalSection title="2. Role Prompting (Đóng vai)">
                    <ModalParagraph>Gán cho AI một "nhân cách" hoặc vai trò cụ thể. Điều này ảnh hưởng đến giọng điệu, phong cách và kiến thức chuyên môn mà AI sử dụng.</ModalParagraph>
                    <ModalCode><strong>Prompt:</strong> Hãy đóng vai một đầu bếp chuyên nghiệp. Đưa ra 3 lời khuyên để làm món phở bò ngon tại nhà.</ModalCode>
                </ModalSection>
                 <ModalSection title="3. Contextual Prompting (Cung cấp Ngữ cảnh)">
                    <ModalParagraph>Cung cấp thông tin nền cụ thể cho một yêu cầu nhất định. Nó giúp AI hiểu rõ tình huống hiện tại.</ModalParagraph>
                    <ModalCode><strong>Prompt:</strong> Ngữ cảnh: Tôi đang viết một bài blog cho người mới bắt đầu học lập trình. Hãy giải thích khái niệm "biến" một cách đơn giản nhất.</ModalCode>
                </ModalSection>
            </>
        ),
    },
    cotModal: {
        title: 'Chain of Thought (CoT): Dẫn dắt tư duy của AI',
        content: (
            <>
                <ModalParagraph>Chain of Thought (CoT) prompting là một kỹ thuật mạnh mẽ yêu cầu mô hình không chỉ đưa ra câu trả lời cuối cùng mà còn phải giải thích từng bước suy luận của nó để đạt được kết quả đó. Điều này giúp "mở hộp đen" của AI, làm cho quá trình suy nghĩ của nó minh bạch hơn và cải thiện đáng kể khả năng giải quyết các vấn đề phức tạp.</ModalParagraph>
                <ModalParagraph>Bằng cách buộc mô hình phải "suy nghĩ thành lời", CoT giúp nó tự điều chỉnh, khắc phục lỗi suy luận trong các bước trung gian, từ đó giảm thiểu sai sót trong câu trả lời cuối cùng.</ModalParagraph>
                <ModalSection title="Ví dụ (Giải toán):">
                    <ModalCode>
{`Prompt Yếu: Khi tôi 3 tuổi, chị tôi gấp 3 lần tuổi tôi. Bây giờ tôi 20 tuổi. Hỏi chị tôi bao nhiêu tuổi?
→ AI có thể trả lời sai: 60 tuổi.

Prompt CoT: Khi tôi 3 tuổi, chị tôi gấp 3 lần tuổi tôi. Bây giờ tôi 20 tuổi. Hỏi chị tôi bao nhiêu tuổi? Hãy suy nghĩ từng bước.

Output mong đợi:
1. Khi tôi 3 tuổi, chị tôi 3 * 3 = 9 tuổi.
2. Chị hơn tôi 9 - 3 = 6 tuổi.
3. Bây giờ tôi 20 tuổi, vậy chị tôi là 20 + 6 = 26 tuổi.
Đáp án: 26 tuổi.`}
                    </ModalCode>
                </ModalSection>
                <ModalSection title="Lời khuyên:">
                     <ModalParagraph>Luôn thêm cụm từ như "Hãy suy nghĩ từng bước", "Giải thích logic của bạn", hoặc "Phân tích kỹ lưỡng" vào cuối prompt để kích hoạt CoT.</ModalParagraph>
                </ModalSection>
            </>
        ),
    },
    selfConsistencyModal: {
        title: 'Self-Consistency: Tăng cường độ tin cậy của AI',
        content: (
             <>
                <ModalParagraph>Self-Consistency là một kỹ thuật nâng cao dựa trên Chain of Thought. Thay vì chỉ tạo ra một chuỗi tư duy duy nhất, nó yêu cầu mô hình tạo ra <strong>nhiều chuỗi tư duy độc lập</strong> cho cùng một câu hỏi (thường bằng cách tăng tham số Temperature để khuyến khích sự đa dạng). Sau đó, nó sẽ tổng hợp và chọn câu trả lời cuối cùng dựa trên <strong>sự đồng thuận đa số</strong> của các chuỗi tư duy đó.</ModalParagraph>
                <ModalParagraph>Kỹ thuật này hoạt động như một hệ thống "bỏ phiếu", giúp cải thiện đáng kể độ chính xác cho các bài toán phức tạp, có nhiều cách tiếp cận.</ModalParagraph>
                <ModalSection title="Ví dụ:">
                    <ModalParagraph>Khi được hỏi một câu hỏi logic phức tạp, bạn chạy prompt 5 lần với Temperature cao:</ModalParagraph>
                    <ModalList>
                        <li>Lần 1: AI suy luận và đưa ra đáp án A.</li>
                        <li>Lần 2: AI suy luận theo một hướng khác và đưa ra đáp án B.</li>
                        <li>Lần 3: AI suy luận và đưa ra đáp án A.</li>
                        <li>Lần 4: AI mắc lỗi nhỏ trong suy luận và đưa ra đáp án C.</li>
                        <li>Lần 5: AI tìm ra một cách tiếp cận khác nhưng vẫn ra đáp án A.</li>
                    </ModalList>
                    <ModalParagraph className="mt-4"><strong>Kết luận:</strong> Đáp án A xuất hiện 3/5 lần (nhiều nhất), nên được chọn làm câu trả lời cuối cùng, đáng tin cậy nhất.</ModalParagraph>
                </ModalSection>
            </>
        ),
    },
    totModal: {
        title: 'Tree of Thoughts (ToT): Khám phá các Giải pháp như một cái Cây',
        content: (
            <>
                <ModalParagraph>Tree of Thoughts (ToT) là một kỹ thuật tổng quát hóa Chain of Thought, cho phép mô hình khám phá nhiều nhánh suy luận khác nhau đồng thời. Thay vì chỉ theo một chuỗi tuyến tính, ToT cho phép mô hình tạo ra nhiều "ý tưởng" hoặc "bước trung gian" tiềm năng tại mỗi điểm, tự đánh giá và chọn nhánh hứa hẹn nhất để đi tiếp.</ModalParagraph>
                <ModalParagraph>Điều này làm cho ToT cực kỳ phù hợp cho các bài toán phức tạp không có lộ trình giải quyết rõ ràng, yêu cầu lập kế hoạch sâu rộng hoặc sáng tạo ý tưởng mới.</ModalParagraph>
            </>
        ),
    },
    reActModal: {
        title: 'ReAct (Reason & Act): Suy luận và Hành động',
        content: (
            <>
                <ModalParagraph>ReAct là một khuôn khổ mạnh mẽ cho phép LLM không chỉ suy luận mà còn có khả năng <strong>thực hiện các hành động</strong> bằng công cụ bên ngoài (ví dụ: tìm kiếm trên web, chạy mã, tương tác với API). Điều này tạo ra một vòng lặp <strong>Thought (Suy nghĩ) → Act (Hành động) → Observation (Quan sát)</strong>, cho phép LLM thu thập thông tin mới để giải quyết vấn đề.</ModalParagraph>
                <ModalSection title="Ví dụ về vòng lặp ReAct:">
                    <ModalCode>
{`Prompt: Thủ đô của Pháp là gì và thời tiết hiện tại ở đó ra sao?

Vòng lặp ReAct (trong suy nghĩ của AI):
- Thought: Câu hỏi có hai phần. Đầu tiên tôi cần xác định thủ đô của Pháp.
- Act: search("Thủ đô của Pháp").
- Observation: Kết quả tìm kiếm là "Paris".
- Thought: Tôi đã có thủ đô là Paris. Bây giờ tôi cần tìm thời tiết hiện tại ở đó.
- Act: search("Thời tiết hiện tại ở Paris").
- Observation: Kết quả tìm kiếm là "18°C, trời có mây".
- Thought: Tôi đã có đủ thông tin để trả lời.
- Final Answer: Thủ đô của Pháp là Paris, và thời tiết hiện tại ở đó là 18°C, trời có mây.`}
                    </ModalCode>
                </ModalSection>
            </>
        ),
    },
    stepBackModal: {
        title: 'Step-back Prompting: Lùi một bước để nghĩ lớn hơn',
        content: (
            <>
                <ModalParagraph>Step-back prompting là một kỹ thuật giúp AI cải thiện khả năng suy luận bằng cách yêu cầu nó lùi lại một bước để xem xét các nguyên tắc hoặc khái niệm chung trước khi trả lời một câu hỏi cụ thể. Việc trừu tượng hóa này giúp AI kích hoạt kiến thức nền tảng và đưa ra câu trả lời chính xác, sâu sắc hơn.</ModalParagraph>
                <ModalSection title="Ví dụ: Giải quyết vấn đề cụ thể">
                     <ModalCode>
{`Prompt thông thường: Làm thế nào để giải thích cơ chế của kỹ thuật Self-Consistency cho một người không chuyên về AI?

Prompt Step-back:
1. Lùi một bước: Hãy nêu ra các nguyên tắc cốt lõi của việc giải thích một khái niệm kỹ thuật phức tạp cho người không chuyên.

2. Giải quyết: Dựa trên những nguyên tắc đó, hãy giải thích cơ chế của kỹ thuật Self-Consistency.`}
                    </ModalCode>
                </ModalSection>
                <ModalParagraph>Bằng cách buộc AI phải suy nghĩ về "cách giải thích tốt" trước, câu trả lời ở bước 2 sẽ trở nên rõ ràng, dễ hiểu và có cấu trúc tốt hơn nhiều.</ModalParagraph>
            </>
        )
    },
    apeModal: {
        title: 'Automatic Prompt Engineering (APE): Dùng AI để tạo Prompt',
        content: (
            <>
                <ModalParagraph>Automatic Prompt Engineering (APE) là một phương pháp tiên tiến, trong đó chúng ta sử dụng chính một Mô hình Ngôn ngữ Lớn (LLM) để tự động tạo ra và chọn lọc các prompt hiệu quả nhất cho một tác vụ cụ thể. Thay vì con người phải vất vả thử và sai, chúng ta "ra lệnh" cho AI tìm ra cách ra lệnh tốt nhất.</ModalParagraph>
                <ModalSection title="Quy trình hoạt động của APE">
                     <ModalList>
                        <li><strong>1. Định nghĩa vấn đề:</strong> Bạn cung cấp cho AI một vài ví dụ về cặp (đầu vào, đầu ra mong muốn) của bài toán.</li>
                        <li><strong>2. Tạo Prompt ứng viên:</strong> Bạn yêu cầu AI "Hãy tạo ra 10 câu lệnh (prompt) có thể giải quyết được bài toán này". AI sẽ tạo ra nhiều biến thể prompt khác nhau.</li>
                        <li><strong>3. Đánh giá Prompt:</strong> Bạn sử dụng các prompt ứng viên này để chạy trên bộ dữ liệu thử nghiệm và chấm điểm hiệu quả của chúng (ví dụ: prompt nào cho ra kết quả chính xác nhất).</li>
                        <li><strong>4. Lựa chọn:</strong> Chọn ra prompt có điểm số cao nhất để sử dụng.</li>
                    </ModalList>
                </ModalSection>
                 <ModalSection title="Lợi ích">
                    <ModalParagraph>Kỹ thuật này giúp tiết kiệm thời gian, công sức và có thể khám phá ra những cấu trúc prompt hiệu quả mà con người không nghĩ tới.</ModalParagraph>
                </ModalSection>
            </>
        )
    },
    codeWriteModal: {
        title: 'Viết Code (Code Generation)',
        content: (
            <>
                <ModalParagraph>Đây là ứng dụng phổ biến nhất của AI trong lập trình. Bạn có thể yêu cầu AI tạo ra code từ một mô tả đơn giản, giúp bạn tiết kiệm thời gian gõ và suy nghĩ về cú pháp.</ModalParagraph>
                <ModalSection title="Ví dụ: Tạo script Bash">
                    <ModalCode>
                        <strong>Prompt:</strong> Viết một script bash để đổi tên tất cả các file có đuôi ".txt" trong thư mục hiện tại thành ".md".
                    </ModalCode>
                </ModalSection>
                 <ModalSection title="Ví dụ: Tạo hàm Python">
                    <ModalCode>
                        <strong>Prompt:</strong> Viết một hàm Python tên `is_palindrome` nhận đầu vào là một chuỗi và trả về True nếu chuỗi đó là palindrome, ngược lại trả về False.
                    </ModalCode>
                </ModalSection>
                <ModalSection title="Lời khuyên">
                    <ModalParagraph>Càng mô tả chi tiết yêu cầu, ngôn ngữ lập trình, và các ràng buộc, kết quả trả về sẽ càng chính xác.</ModalParagraph>
                </ModalSection>
            </>
        )
    },
    codeExplainModal: {
        title: 'Giải thích & Gỡ lỗi Code',
        content: (
            <>
                <ModalParagraph>Khi bạn gặp một đoạn code lạ hoặc một lỗi khó hiểu, AI có thể trở thành người đồng nghiệp kiên nhẫn nhất, giúp bạn phân tích và tìm ra giải pháp.</ModalParagraph>
                 <ModalSection title="Ví dụ: Giải thích Code">
                    <ModalCode>
                        {`Prompt: Giải thích từng dòng của đoạn code Python sau đây:

prices = {'apple': 1.5, 'banana': 0.5, 'orange': 1.0}
discounted = {key: value * 0.9 for (key, value) in prices.items()}`}
                    </ModalCode>
                </ModalSection>
                <ModalSection title="Ví dụ: Gỡ lỗi (Debug)">
                    <ModalCode>
                        {`Prompt: Tôi có đoạn code Python sau và nó báo lỗi "TypeError: can only concatenate str (not "int") to str". Hãy tìm lỗi và sửa nó.

age = 25
message = "My age is " + age
print(message)`}
                    </ModalCode>
                </ModalSection>
            </>
        )
    }
};