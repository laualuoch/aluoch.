
const Footer = ({currentYear}) => {
    return (
        <footer className="row footer-item fixed-bottom padding-bottom">
            <div className="col-md-12 text-center">
                <span clasName="footer-text">© {currentYear}. Designed and Developed by Aluoch Laurine.</span>
            </div>
        </footer>
    )
}

export default Footer;