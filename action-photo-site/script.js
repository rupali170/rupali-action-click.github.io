document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("fileInput");
  const previewBtn = document.getElementById("previewBtn");
  const gallery = document.getElementById("gallery");

  // जर एलिमेंट्स सापडले नाहीत तर कोड क्रॅश होऊ नये म्हणून ही चेकलिस्ट
  if (!fileInput || !previewBtn || !gallery) return;

  previewBtn.addEventListener("click", function () {
    const files = fileInput.files;
    
    // युजरने फोटो निवडला नसेल तर अलर्ट
    if (!files || files.length === 0) {
      alert("कृपया किमान एक फोटो निवडा.");
      return;
    }

    // नवीन फोटो दाखवण्याआधी जुने preview clear करणे
    gallery.innerHTML = "";

    Array.from(files).forEach(file => {
      // फक्त इमेज फाईल्सच स्वीकारणे
      if (!file.type.startsWith("image/")) {
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        gallery.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  });
});
