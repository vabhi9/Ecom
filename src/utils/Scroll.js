const scrollFix = () => {
  window.addEventListener("scroll", function () {
    const sect3 = document.getElementById("Sect-3");
    const sect1Height = document.getElementById("Sect-1").offsetHeight;
    const sect2Height = document.getElementById("Sect-2").offsetHeight;
    const categoryLayout = document.getElementById("Category");
    const triggerHeight = sect1Height + sect2Height;

    if (window.scrollY > triggerHeight) {
      sect3.classList.add(
        "fixed",
        "top-0",
        "z-50",
        // "shadow-md",
        // "shadow-slate-500",
        // "shadow-md",
        // "transition-transform",
        // "ease-in-out",
        // "duration-1000"
      );
      categoryLayout.style.position = "absolute"; // Make sure it's positioned
      categoryLayout.style.top = `${sect3.offsetHeight}px`;
      categoryLayout.style.zIndex = "80";
      categoryLayout.style.display = "grid";
    } else {
      sect3.classList.remove(
        "fixed",
        "top-0",
        "z-50",
        // "shadow-md",
        // "shadow-slate-500",
        // "shadow-xl"
      );
      categoryLayout.style.position = "";
      categoryLayout.style.top = "";
      categoryLayout.style.zIndex = "";
      categoryLayout.style.display = "";
    }
    // categoryLayout.style.top = "16rem"
    // categoryLayout.style.position = "absolute";
  });
};

export { scrollFix };

// const scrollFix = () => {
//   window.addEventListener("scroll", function () {
//     const sect3 = document.getElementById("Sect-3");
//     const sect1Height = document.getElementById("Sect-1").offsetHeight;
//     const sect2Height = document.getElementById("Sect-2").offsetHeight;
//     const categoryLayout = document.getElementById("Category");
//     const triggerHeight = sect1Height + sect2Height;

//     // Add a placeholder for Sect-3 height
//     let placeholder = document.getElementById("sect3-placeholder");
//     if (!placeholder) {
//       placeholder = document.createElement("div");
//       placeholder.id = "sect3-placeholder";
//       sect3.parentNode.insertBefore(placeholder, sect3);
//     }
//     placeholder.style.height = `${sect3.offsetHeight}px`;

//     if (window.scrollY > triggerHeight) {
//       sect3.classList.add(
//         "fixed",
//         "top-0",
//         "z-50",
//         // "shadow-md",
//         // "shadow-slate-500",
//         "transition-transform",
//         "duration-[2000ms]"
//       );
//       categoryLayout.style.position = "absolute";
//       categoryLayout.style.top = `${sect3.offsetHeight}px`;
//       categoryLayout.style.zIndex = "80";
//       categoryLayout.style.display = "grid";
//     } else {
//       sect3.classList.remove(
//         "fixed",
//         "top-0",
//         "z-50",
//         // "shadow-md",
//         // "shadow-slate-500",
//         // "transition-transform",
//         "duration-[2000ms]"
//       );
//       categoryLayout.style.position = "";
//       categoryLayout.style.top = "";
//       categoryLayout.style.zIndex = "";
//       categoryLayout.style.display = "";
//       placeholder.style.height = "0px"; // Remove placeholder when Sect-3 is normal
//     }
//   });
// };

// export { scrollFix };

// const scrollFix = () => {
//   let timeoutId = null;

//   window.addEventListener("scroll", function () {
//     const sect3 = document.getElementById("Sect-3");
//     const sect1Height = document.getElementById("Sect-1").offsetHeight;
//     const sect2Height = document.getElementById("Sect-2").offsetHeight;
//     const categoryLayout = document.getElementById("Category");
//     const triggerHeight = sect1Height + sect2Height;

//     let placeholder = document.getElementById("sect3-placeholder");
//     if (!placeholder) {
//       placeholder = document.createElement("div");
//       placeholder.id = "sect3-placeholder";
//       sect3.parentNode.insertBefore(placeholder, sect3);
//     }
//     placeholder.style.height = `${sect3.offsetHeight}px`;

//     if (window.scrollY > triggerHeight) {
//       // Move navbar up first
//       sect3.style.transform = "translateY(-100%)";
//       sect3.style.transition = "transform 0.6s ease-in-out";

//       // Clear previous timeout if user keeps scrolling
//       if (timeoutId) clearTimeout(timeoutId);

//       // After 1.5 seconds, bring navbar back smoothly
//       timeoutId = setTimeout(() => {
//         sect3.classList.add(
//           "fixed",
//           "top-0",
//           "z-50",
//           "transition-transform",
//           "duration-500"
//         );
//         sect3.style.transform = "translateY(0)";
//       }, 600);

//       categoryLayout.style.position = "fixed";
//       categoryLayout.style.top = `${sect3.offsetHeight}px`;
//       categoryLayout.style.zIndex = "50";
//       categoryLayout.style.display = "grid";
//     } else {
//       // Reset navbar when scrolling back up
//       sect3.classList.remove(
//         "fixed",
//         "top-0",
//         "z-50",
//         "transition-transform",
//         "duration-500"
//       );
//       sect3.style.transform = "translateY(0)";
//       sect3.style.transition = "transform 0.6s ease-in-out";

//       placeholder.style.height = "0px";
//       categoryLayout.style.position = "";
//       categoryLayout.style.top = "";
//       categoryLayout.style.zIndex = "";
//       categoryLayout.style.display = "";

//       if (timeoutId) clearTimeout(timeoutId); // Cancel any pending timeout
//     }
//   });
// };

// export { scrollFix };
