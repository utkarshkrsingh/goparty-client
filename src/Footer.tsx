import './App.css';

function Footer() {
    const currentYear: number = new Date().getFullYear();
    return (
        <>
            <footer className='footer-container'>
                <p className='copyright'>&#169; {currentYear} <a target='_blank' href='https://github.com/utkarshkrsingh'>github.com/utkarshkrsingh</a></p>
                <p className='poweredBy'>Powered By <a target='_blank' href='https://go.dev/'>Go</a> and <a target='_blank' href='https://gorilla.github.io/'>Gorilla</a> web toolkit</p>
            </footer>
        </>
    )
}

export default Footer;
