/**
 *
 * @returns the footer component
 */
function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <a href="#">
          <img
            src="../public/white-logo.png"
            alt="logo gomycode"
            width={140}
            height={16}
          />
        </a>
        <p>Immeuble Elh Omar Dia, Bd de St Louis, Dakar, Sénégal</p>
        <p>+221 33 825 62 92</p>
        <p>+221 77 526 38 59</p>
        <p>hello@gomycode.com</p>
      </div>
      <div className="info">
        <a href="#">Nos formations</a>
        <a href="#">Hackerspaces</a>
        <a href="#">GOMYTECH</a>
      </div>
      <div className="discover">
        <a href="#">Découvrir GOMYCODE</a>
        <a href="#">Carrières</a>
        <a href="#">Politiques GOMYCODE</a>
      </div>
    </div>
  );
}

export default Footer;
