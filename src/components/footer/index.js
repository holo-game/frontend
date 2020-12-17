export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <ul className="footer-nav">
            <li>
              <a href="#">Haqqımızda</a>
            </li>
            <li>
              <a href="#">Əlaqə</a>
            </li>
            <li>
              <a href="#">Ödəniş Metodları</a>
            </li>
            <li className="d-none d-sm-block">
              <a href="#">Üzvlük Müqaviləsi</a>
            </li>
          </ul>
          <ul className="footer-nav my-4">
            <li>
              <a href="#" className="btn btn-default">
                <i className="fab fa-facebook-f mr-3"></i>
                <span>facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-default">
                <i className="fab fa-instagram mr-3"></i>
                <span>instagram</span>
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            <p className="my-0">
              Copyright 2020 Hologame | Bütün hüquqlar qorunur.
            </p>
            <p className="mb-0 mt-2">
              Developed by{" "}
              <a href="https://devob.az" target="_blank" className="text-one">
                Devob Creative
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
