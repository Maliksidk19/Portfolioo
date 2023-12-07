import { FiExternalLink, FiSend } from "react-icons/fi"
import Link from "next/link";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl text-center">Let's Connect</h1>
      <p className="text-xl text-center">I am always open to work on your project, improve your online presence or help with your business to grow online</p>
      <button><Link href="mailto:malik.sid1980@gmail.com" className="flex my-5 items-center gap-2 bg-teal-700 text-white px-5 py-3 rounded-lg">Contact Now <FiSend /></Link></button>
      <section className="flex gap-6">
        <Link href="https://www.fiverr.com/maliksidk19" className="text-2xl text-teal-600 flex items-center gap-2" target="_blank">Fiverr<FiExternalLink /></Link>
        <Link href="https://www.upwork.com/freelancers/~01008acf6a30a583bb" className="text-2xl text-teal-600 flex items-center gap-2" target="_blank">Upwork<FiExternalLink /></Link>
        <Link href="https://www.linkedin.com/in/maliksidk19" className="text-2xl text-teal-600 flex items-center gap-2" target="_blank">Linkedin<FiExternalLink /></Link>
        <Link href="https://github.com/maliksidk19" className="text-2xl text-teal-600 flex items-center gap-2" target="_blank">Github<FiExternalLink /></Link>
      </section>
    </section>
  )
}

export default Contact;