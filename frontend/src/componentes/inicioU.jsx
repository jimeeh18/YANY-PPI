import React from "react";

function Iniciou() {
  return (
    <div className="container">
      <section className="mx-auto my-5" style={{ maxWidth: "23rem;" }}>
        <div className="card map-card">
          <div
            id="map-container-google-1"
            class="z-depth-1-half map-container"
            style={{ height: "500px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15863.55516843332!2d-75.6088832!3d6.2783488!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1727211507015!5m2!1ses-419!2sco"
              width="600"
              height="450"
              style={{border:"0;" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="card-body closed px-0">
            <div class="button px-2 mt-3">
              <a
                data-mdb-ripple-init
                class="btn btn-floating btn-lg living-coral text-white float-end"
                style={{ marginRight: "75rem;" }}
              >
                <i class="fas fa-bicycle"></i>
              </a>
            </div>
            <div class="bg-white px-4 pb-4 pt-3-5">
              <h5 class="card-title h5 living-coral-text">Central Park Zoo</h5>
              <div class="d-flex justify-content-between living-coral-text">
                <h6 class="card-subtitle font-weight-light">
                  A place to relax
                </h6>
                <h6 class="font-small font-weight-light mt-n1">25 min</h6>
              </div>
              <hr />
              <div class="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text">
                <div>
                  <i class="fas fa-phone fa-lg mb-3"></i>
                  <p class="mb-0">Call</p>
                </div>
                <div>
                  <i class="fas fa-cat fa-lg mb-3"></i>
                  <p class="mb-0">Love</p>
                </div>
                <div>
                  <i class="far fa-grin-beam-sweat fa-lg mb-3"></i>
                  <p class="mb-0">Smile</p>
                </div>
              </div>
              <hr />
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row" class="px-0 pb-3 pt-2">
                      <i class="fas fa-map-marker-alt living-coral-text"></i>
                    </th>
                    <td class="pb-3 pt-2">
                      East 64th Street, New York, NY 10021, US
                    </td>
                  </tr>
                  <tr class="mt-2">
                    <th scope="row" class="px-0 pb-3 pt-2">
                      <i class="far fa-clock living-coral-text"></i>
                    </th>
                    <td class="pb-3 pt-2">
                      <span class="deep-purple-text me-2"> Closed</span> Opens
                      10 AM
                    </td>
                  </tr>
                  <tr class="mt-2">
                    <th scope="row" class="px-0 pb-3 pt-2">
                      <i class="fas fa-cloud-moon living-coral-text"></i>
                    </th>
                    <td class="pb-3 pt-2">Sunny weather tomorrow</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Iniciou;
