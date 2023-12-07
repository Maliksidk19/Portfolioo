import Image from "next/image";
import Link from "next/link";

const Achievements = () => {
    return (
        <main className="w-100 flex flex-col gap-8">
            <h1 className="text-4xl font-semibold">Achievements</h1>
            <section className="grid grid-cols-3 gap-6">
                <Link href="https://www.credly.com/badges/8fc0c632-5324-43b4-a9a7-86ae93fdc90b/public_url" target="_blank" className="flex gap-6">
                    <Image src="/meta-front-end-developer-certificate.png" alt="Full Stack Certificate" width={100} height={100} />
                    <section>
                        <h2 className="text-2xl">Frontend Developer</h2>
                        <h3 className="text-xl text-teal-700">Meta - Specialization</h3>
                    </section>
                </Link>
                <Link href="https://www.credly.com/badges/2f355461-0958-42e9-baec-72a97b7d9b54/public_url" target="_blank" className="flex gap-6">
                    <Image src="/meta-back-end-developer-certificate.png" alt="Full Stack Certificate" width={100} height={100} />
                    <section>
                        <h2 className="text-2xl">Backend Developer</h2>
                        <h3 className="text-xl text-teal-700">Meta - Specialization</h3>
                    </section>
                </Link>
                <Link href="https://www.credly.com/badges/ce76e907-013f-4bf5-a9bd-b762ff8fb466/public_url" target="_blank" className="flex gap-6">
                    <Image src="/meta-full-stack-engineer-certificate.png" alt="Full Stack Certificate" width={100} height={100} />
                    <section>
                        <h2 className="text-2xl">Full Stack Engineer</h2>
                        <h3 className="text-xl text-teal-700">Meta - Specialization</h3>
                    </section>
                </Link>
                <Link href="https://www.credly.com/badges/85a68ccc-bc4b-4ae6-adfb-1abcb08f6508/public_url" target="_blank" className="flex gap-6">
                    <Image src="/google-it-automation-certificate.png" alt="Full Stack Certificate" width={100} height={100} />
                    <section>
                        <h2 className="text-2xl">Google IT Automation with Python</h2>
                        <h3 className="text-xl text-teal-700">Google - Professional Certificate</h3>
                    </section>
                </Link>
                <Link href="https://www.credly.com/badges/5ffa1800-6522-44c2-b414-7940a5e38a19/public_url" target="_blank" className="flex gap-6">
                    <Image src="/python-for-data-science-and-ai.png" alt="Full Stack Certificate" width={100} height={100} />
                    <section>
                        <h2 className="text-2xl">Python for Data Science & AI</h2>
                        <h3 className="text-xl text-teal-700">Coursera - Course</h3>
                    </section>
                </Link>
                <Link href="https://www.credly.com/badges/900b9da9-2803-42e6-94b8-6a7f214896fc/public_url" target="_blank" className="flex gap-6">
                    <Image src="/python-essentials-1.png" alt="Full Stack Certificate" width={100} height={100} />
                    <section>
                        <h2 className="text-2xl">Python Essential 1</h2>
                        <h3 className="text-xl text-teal-700">Cisco - Course</h3>
                    </section>
                </Link>
                <Link href="https://www.credly.com/badges/b4c0ff88-28d1-4631-81b6-e33947916b6e/public_url" target="_blank" className="flex gap-6">
                    <Image src="/python-essentials-2.png" alt="Full Stack Certificate" width={100} height={100} />
                    <section>
                        <h2 className="text-2xl">Python Essential 2</h2>
                        <h3 className="text-xl text-teal-700">Cisco - Course</h3>
                    </section>
                </Link>
            </section>
        </main>
    )
}

export default Achievements;