import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='z-50 fixed top-1 left-1/2 -translate-x-1/2 text-center flex gap-10 justify-around w-fit-content mx-auto navbar px-10 py-4 bg-secondary/[0.75] drop-shadow-md rounded-3xl'>
            <Link href="/#main-section" className='navlink'>Main</Link>
            <Link href="/#experience-section" className='navlink'>Experience</Link>
            <Link href="/#projects-section" className='navlink'>Projects</Link>
            <Link href="/#contact-section" className='navlink'>Contact</Link>
      </div>
    );
};

export default NavBar;