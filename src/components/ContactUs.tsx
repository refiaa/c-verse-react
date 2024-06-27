import React from 'react';
import Swal from 'sweetalert2';
import { IoMail, IoLocation } from 'react-icons/io5';

const ContactInfo = ({ icon, text }: { icon: JSX.Element, text: string }) => (
    <div className='flex gap-3 w-fit items-center'>
        <div className='p-2 flex items-center justify-center text-highlight rounded-full text-lg'>
            {icon}
        </div>
        <p className="text-base">{text}</p>
    </div>
);

const contactInfo = [
    { icon: <IoMail />, text: 'contact@gosh-hiphop.com' },
    { icon: <IoLocation />, text: '〒305-0031 茨城県つくば市吾妻２丁目５番地１' },
];

const ContactUs = () => {
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("access_key", "5ad84b40-2574-4caf-96e7-79adf655e618");

        let timerInterval: NodeJS.Timeout;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();

            if (data.success) {
                (event.target as HTMLFormElement).reset();
                Swal.fire({
                    title: "Thank You!",
                    html: "I'll get back to you soon.",
                    timer: 5000,
                    timerProgressBar: true,
                    icon: "success",
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                });
            } else {
                console.log("Error", data);
                Swal.fire({
                    title: "Error!",
                    html: data.message || "Failed, Please try again.",
                    timer: 5000,
                    timerProgressBar: true,
                    icon: "error",
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                html: "An unexpected error occurred. Please try again later.",
                timer: 5000,
                timerProgressBar: true,
                icon: "error",
                willClose: () => {
                    clearInterval(timerInterval);
                }
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
                <div className='mt-10 flex flex-col gap-6 max-w-lg bg-background p-6 rounded-lg mx-auto'>
                    <div className='flex flex-col gap-1'>
                        {contactInfo.map((info, i) => <ContactInfo key={i} {...info} />)}
                    </div>
                    <form onSubmit={onSubmit} className='flex flex-col flex-1 items-center gap-5'>
                        <input required type="text" className='bg-gray-700 w-full text-md' name="name" id="name" placeholder='Enter Full Name...' />
                        <input required type="email" className='bg-gray-700 w-full text-md' name="email" id="email" placeholder='Enter Email Address...' />
                        <textarea required placeholder="Enter Your Message..." className='bg-gray-700 w-full text-md' rows={5} name='message'></textarea>
                        <button className='btn-primary w-fit' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
