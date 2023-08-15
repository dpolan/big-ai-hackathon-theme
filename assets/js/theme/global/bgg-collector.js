export default function () {
  const form = document.querySelector('[data-form="collector-widget"]');

  if (form !== null) {
    // Find form submission to catch BGG user and store it on the application storage
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();

      const input = form.querySelector("input");
      const username = input.value;

      if (username.length > 0) {
        // Store it
        localStorage.setItem("bgg-user", username);

        // Redirect to custom page template
        // TODO: Make it dynamic
        window.location =
          "https://bigcommerce-x-google-bigai-hackathon.mybigcommerce.com/bgg-collector/";
      }
    });
  }
}
