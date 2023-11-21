/**
 *
 * @returns the header (menu) component
 */
function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <a href="#">
            <img
              src="../public/Gomycode-SN.svg"
              alt="logo gomycode"
              width={183}
              height={23}
            />
          </a>
          <a href="#">
            <li>Nos formations</li>
          </a>
          <a href="#">
            <li>Découvrir GOMYCODE</li>
          </a>
          <a href="#">
            <li>Hackerspaces</li>
          </a>
          <a href="#">
            <li>En ligne</li>
          </a>
          <a href="#">
            <li>GOMYTECH</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
