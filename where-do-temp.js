export { explore };

import { places } from "./where-do-we-go.data.js";

function explore() {
  const sorted = sortPlacesByLatitude();
  sorted.forEach((place) => {
    const section = document.createElement("section");
    section.style.background = `url(./where-do-we-go_images/${place.name
      .split(",")[0]
      .toLowerCase()
      .replaceAll(" ", "-")}.jpg) no-repeat center`;
    section.style.backgroundSize = "cover";
    document.body.appendChild(section);
  });

  const compass = document.createElement("div");
  compass.classList.add("direction");
  document.body.appendChild(compass);
  compass.textContent = "N";

  const a = document.createElement("a");
  a.target = "_blank";
  a.classList.add("location");
  a.textContent = `${sorted[0].name}\n${sorted[0].coordinates}`;
  a.style.color = `${sorted[0].color}`;
  a.href = `https://www.google.com/maps/search/?api=1&query=${encode(
    sorted[0].coordinates
  )}`;
  document.body.appendChild(a);

  let lastPosition = window.scrollY;
  let currentIndex = 0;
  document.addEventListener("scroll", () => {
    const currentPosition = window.scrollY;
    const nextIndex = Math.round(currentPosition / window.innerHeight);
    if (currentPosition > lastPosition) {
      compass.textContent = "S";
    } else {
      compass.textContent = "N";
    }

    if (
      nextIndex !== currentIndex &&
      nextIndex >= 0 &&
      nextIndex < places.length
    ) {
      a.textContent = `${sorted[nextIndex].name}\n${sorted[nextIndex].coordinates}`;
      a.style.color = `${sorted[nextIndex].color}`;
      a.href = `https://www.google.com/maps/place/${encode(
        sorted[nextIndex].coordinates
      )}`;
    }
    lastPosition = currentPosition;
  });
}

function encode(coordinates) {
  return coordinates
    .replaceAll(" ", "%20")
    .replaceAll("°", "%C2%B0")
    .replaceAll('"', "%22");
}

function sortPlacesByLatitude() {
  let north_places = places.filter((place) => place.coordinates.includes("N"));
  let south_places = places.filter((place) => place.coordinates.includes("S"));

  north_places.sort((a, b) => {
    const latA =
      parseInt(a.coordinates.split("°")[0]) +
      parseInt(a.coordinates.split("°")[1]) / 100;
    const latB =
      parseInt(b.coordinates.split("°")[0]) +
      parseInt(b.coordinates.split("°")[1]) / 100;
    return latB - latA;
  });
  south_places.sort((a, b) => {
    const latA =
      parseInt(a.coordinates.split("°")[0]) +
      parseInt(a.coordinates.split("°")[1]) / 100;
    const latB =
      parseInt(b.coordinates.split("°")[0]) +
      parseInt(b.coordinates.split("°")[1]) / 100;
    return latA - latB;
  });

  return [north_places, south_places].flat(1);
}