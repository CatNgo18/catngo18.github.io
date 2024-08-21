import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='z-50 fixed top-3 left-1/2 gap-4 -translate-x-1/2 text-center flex min-w-fit max-w-[90vw] justify-around navbar px-8 py-4 bg-secondary/[0.75] drop-shadow-md rounded-3xl'>
            <Link href="/#main-section" className='navlink'>Main</Link>
            <Link href="/#about-section" className='navlink'>About</Link>
            <Link href="/#experience-section" className='navlink'>Experience</Link>
            <Link href="/#projects-section" className='navlink'>Projects</Link>
            <Link href="/#contact-section" className='navlink'>Contact</Link>
      </div>
    );
};

export default NavBar;