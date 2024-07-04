import React, { useState, useEffect, useCallback } from 'react';
import Swal from 'sweetalert2';
import { IoMail, IoLocation } from 'react-icons/io5';

interface ContactInfo {
    icon: JSX.Element;
    text: string;
}

interface FormData {
    name: string;
    email: string;
    message: string;
}

const INITIAL_FORM_STATE: FormData = {
    name: '',
    email: '',
    message: ''
};

const RATE_LIMIT = {
    MAX_REQUESTS: 5,
    TIME_WINDOW: 3600000,
    COOLDOWN: 10000
};

const contactInfo: ContactInfo[] = [
    { icon: <IoMail />, text: 'contact@gosh-hiphop.com' },
    { icon: <IoLocation />, text: '〒305-0031 茨城県つくば市吾妻２丁目５番地１' },
];

const ContactInfoComponent: React.FC<ContactInfo> = ({ icon, text }) => (
    <div className='flex gap-3 w-fit items-center'>
        <div className='p-2 flex items-center justify-center text-highlight rounded-full text-lg'>
            {icon}
        </div>
        <p className="text-base">{text}</p>
    </div>
);

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
    const [lastSubmitTime, setLastSubmitTime] = useState(0);
    const [submitCount, setSubmitCount] = useState(0);

    useEffect(() => {
        const resetCount = () => setSubmitCount(0);
        const timer = setInterval(resetCount, RATE_LIMIT.TIME_WINDOW);
        return () => clearInterval(timer);
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const canSubmit = useCallback(() => {
        const now = Date.now();
        if (now - lastSubmitTime < RATE_LIMIT.COOLDOWN) {
            Swal.fire({
                title: "Please wait",
                text: "You cannot submit consecutively in a short period.",
                icon: "warning",
                timer: 3000,
                timerProgressBar: true,
            });
            return false;
        }

        if (submitCount >= RATE_LIMIT.MAX_REQUESTS) {
            Swal.fire({
                title: "Submission limit reached",
                text: "Please try again later.",
                icon: "error",
                timer: 3000,
                timerProgressBar: true,
            });
            return false;
        }

        return true;
    }, [lastSubmitTime, submitCount]);

    const resetForm = () => {
        setFormData(INITIAL_FORM_STATE);
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!canSubmit()) return;

        setLastSubmitTime(Date.now());
        setSubmitCount(prevCount => prevCount + 1);

        const submissionData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            submissionData.append(key, value);
        });
        submissionData.append("access_key", "5ad84b40-2574-4caf-96e7-79adf655e618");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: submissionData,
            });
            const data = await response.json();

            if (data.success) {
                resetForm();
                Swal.fire({
                    title: "Thank You!",
                    text: "I'll get back to you soon.",
                    icon: "success",
                    timer: 3000,
                    timerProgressBar: true,
                });
            } else {
                throw new Error(data.message || "Failed, Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire({
                title: "Error!",
                text: "An unexpected error occurred. Please try again later.",
                icon: "error",
                timer: 3000,
                timerProgressBar: true,
            });
        }
    };

    return (
        <section id='contact' className='md:py-32 py-20 border-y border-gray-700'>
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold text-highlight">
                    <span className='text-highlight'>Contact Us</span>
                </h3>
                <p className="text-gray-400 my-1 text-lg">Get in touch</p>
                <div className='mt-10 flex flex-col gap-6 max-w-lg bg-opacity-30 backdrop-filter backdrop-blur-sm p-6 rounded-lg mx-auto'>
                    <div className='flex flex-col gap-1'>
                        {contactInfo.map((info, i) => <ContactInfoComponent key={i} {...info} />)}
                    </div>
                    <form onSubmit={onSubmit} className='flex flex-col flex-1 items-center gap-5'>
                        <input
                            required
                            type="text"
                            className='bg-gray-700 w-full text-md'
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder='Enter Full Name...'
                        />
                        <input
                            required
                            type="email"
                            className='bg-gray-700 w-full text-md'
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Enter Email Address...'
                        />
                        <textarea
                            required
                            className='bg-gray-700 w-full text-md'
                            rows={5}
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Enter Your Message..."
                        ></textarea>
                        <button className='btn-primary w-fit' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;