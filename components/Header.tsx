import Image from "next/image";

const Header = () => {
  return (
    <div className="flex gap-10 w-100 items-center">
      <Image src="/logo.svg" width={250} height={100} alt="logo" className="flex-none border rounded-full object-cover" />
      <div className="flex flex-col gap-5 flex-1">
        <span className="text-6xl">Muhammad Saad</span>
        <span className="text-4xl text-[--textSoft]">Full Stack Engineer - Data Scientist</span>
        <span className="text-3xl">Developing end-to-end web applications to help people grow there businesses online.</span>
      </div>
    </div>
  )
}

export default Header;