import React from "react";

export default function Home() {
  return (
    <div className="slider-container">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade slideshow"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/View/home_page/DSC06604.jpg"
              class="d-block mx-auto w-75"
              alt="..."
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/View/home_page/DSC07408.jpg"
              class="d-block mx-auto w-75"
              alt="..."
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/View/home_page/DSC06317.jpg"
              class="d-block mx-auto w-75"
              alt="..."
              loading="lazy"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/View/home_page/DSC07310.jpg"
              class="d-block mx-auto w-75"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div></div>
    </div>
  );
}
