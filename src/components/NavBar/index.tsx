import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='fixed top-1 left-1/2 -translate-x-1/2 text-center flex gap-10 justify-around w-fit-content mx-auto navbar px-10 py-4 bg-[#E8D8B0]/[0.25] drop-shadow-md rounded-3xl'>
            <Link href="/#main-section">Main</Link>
            <Link href="/#experience-section">Experience</Link>
            <Link href="/#projects-section">Projects</Link>
            <Link href="/#contact-section">Contact</Link>
      </div>
    );
};

export default NavBar;