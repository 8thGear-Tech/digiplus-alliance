export const Footer = () => {
  return (
    <>
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a
                href="mailto:info@digiplus.africa"
                class="nav-link px-2 text-body-secondary"
              >
                info@digiplus.africa
              </a>
            </li>
            <li class="nav-item">
              <a
                href="tel:+2348094818884"
                class="nav-link px-2 text-body-secondary"
              >
                +2348094818884
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
                class="nav-link px-2 text-body-secondary"
                target="_blank"
              >
                41 CMD Road, Lagos
              </a>
            </li>
          </ul>
          <p
            class="text-center text-body-secondary"
            style={{ fontSize: "0.8rem" }}
          >
            &copy; 2024 DigiPlus Alliance
          </p>
        </footer>
      </div>
    </>
  );
};
