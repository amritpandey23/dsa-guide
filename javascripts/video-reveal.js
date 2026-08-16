function revealVideo(wrapper) {
  var videoId = wrapper.dataset.videoId;
  if (!videoId) return;

  var iframe = document.createElement("iframe");
  iframe.className = "video-reveal__iframe";
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
  iframe.title = "YouTube video player";
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  );
  iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  iframe.setAttribute("allowfullscreen", "");

  wrapper.innerHTML = "";
  wrapper.appendChild(iframe);
  wrapper.classList.add("video-reveal--playing");
}

function setupVideoReveal(wrapper) {
  if (wrapper.dataset.initialized === "true") return;
  wrapper.dataset.initialized = "true";

  var videoId = wrapper.dataset.videoId;
  if (!videoId) return;

  var button = wrapper.querySelector(".video-reveal__trigger");
  if (!button) return;

  var title = button.querySelector(".video-reveal__title");
  var playIcon = button.querySelector(".video-reveal__play-icon");

  var thumbnail = document.createElement("img");
  thumbnail.className = "video-reveal__thumbnail";
  thumbnail.src = "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg";
  thumbnail.alt = "";
  thumbnail.loading = "lazy";

  var overlay = document.createElement("span");
  overlay.className = "video-reveal__overlay";
  if (title) overlay.appendChild(title);
  if (playIcon) overlay.appendChild(playIcon);

  button.innerHTML = "";
  button.appendChild(thumbnail);
  button.appendChild(overlay);

  button.addEventListener("click", function () {
    revealVideo(wrapper);
  });
}

function initVideoReveals(root) {
  (root || document).querySelectorAll(".video-reveal").forEach(setupVideoReveal);
}

function bootVideoReveals() {
  initVideoReveals(document.body);
}

if (typeof document$ !== "undefined") {
  document$.subscribe(bootVideoReveals);
} else if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootVideoReveals);
} else {
  bootVideoReveals();
}
