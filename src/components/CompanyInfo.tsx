import React from 'react';
import { useLocation } from 'react-router-dom';
import Vision from './Vision';

const companyInfo = [
    { label: '商号', value: '株式会社Gosh' },
    { label: '法人番号', value: '0000000000000' },
    { label: '代表者', value: '金侑輝' },
    { label: '本店所在地', value: '〒305-0031茨城県つくば市吾妻2-5-1 つくば市産業振興センター（つくば駅より徒歩５分）' },
    { label: '設立', value: '2024' },
    { label: '資本金', value: '00000円' },
    { label: '公告', value: '2024年00月00日' },
    { label: '役員', value: '○○○' },
    { label: 'メールアドレス', value: 'gosh.cverse@gmail.com' },
];

const CompanyInfo = () => {
    const location = useLocation();

    return (
        <>
            <section id='about' className='md:py-32 py-20 border-y border-gray-700'>
                <div className="text-center">
                    <h3 className="text-4xl mb-10 font-bold text-highlight">About <span className='text-highlight'>Us</span></h3>
                    <div className='flex md:flex-row flex-col-reverse md:gap-6 gap-10 px-16 max-w-6xl mx-auto'>
                        <div className='w-full'>
                            <table className="table-auto w-full mx-auto border-collapse border-spacing-0">
                                <tbody>
                                    {companyInfo.map(({ label, value }) => (
                                        <tr key={label} className="border-none">
                                            <td className="px-4 py-2 font-semibold text-left border-none text-highlight">{label}</td>
                                            <td className="px-4 py-2 text-left border-none">{value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {location.pathname === '/' && <Vision />}
        </>
    );
};

export default CompanyInfo;
