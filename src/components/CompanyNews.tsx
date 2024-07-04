import React from 'react';

interface NewsItem {
    id: number;
    title: string;
    date: string;
    content: string;
}

const newsData: NewsItem[] = [
    // { id: 1, title: "Goshの法人登録完了", date: "2024-06-26", content: "株式会社Goshの法人登録を完了しました。" },
    { id: 1, title: "MVP検証", date: "2024-08", content: "イベントまとめアプリのMVPのβ公開を目標としています。" },
    { id: 2, title: "Goshの法人登録完了", date: "2024-06-26", content: "株式会社Goshの法人登録を完了しました。" },
];

const CompanyNews: React.FC = () => {
    return (
        <section id='company-news' className='md:py-32 py-20 border-y border-gray-700'>
            <div className="text-center">
                <h3 className="text-4xl font-semibold text-highlight">
                    Company <span className='text-highlight'>News</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">最新の会社ニュースをチェック</p>
            </div>
            <div className="mt-10 px-5 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 justify-items-center">
                    {newsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700 hover:border-highlight transition duration-300"
                        >
                            <h4 className="text-xl font-semibold mb-2 text-highlight">{item.title}</h4>
                            <p className="text-sm text-gray-300 mb-4">{item.date}</p>
                            <p className="text-white leading-relaxed">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyNews;