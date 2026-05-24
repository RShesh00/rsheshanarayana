// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/rsheshanarayana/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/rsheshanarayana/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/rsheshanarayana/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "PhD Researcher in Systems Engineering at Cornell University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/rsheshanarayana/cv/";
          },
        },];
