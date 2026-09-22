// ==========================================
// ELEMENT
// ==========================================

const productName =
    document.getElementById("productName");

const price =
    document.getElementById("price");

const processor =
    document.getElementById("processor");

const ram =
    document.getElementById("ram");

const storage =
    document.getElementById("storage");

const display =
    document.getElementById("display");

const condition =
    document.getElementById("condition");

const status =
    document.getElementById("status");

const imageInput =
    document.getElementById("imageInput");


const posterName =
    document.getElementById("posterName");

const posterPrice =
    document.getElementById("posterPrice");

const posterProcessor =
    document.getElementById("posterProcessor");

const posterRam =
    document.getElementById("posterRam");

const posterStorage =
    document.getElementById("posterStorage");

const posterDisplay =
    document.getElementById("posterDisplay");

const posterCondition =
    document.getElementById("posterCondition");

const posterStatus =
    document.getElementById("posterStatus");

const posterImage =
    document.getElementById("posterImage");


// ==========================================
// GENERATE
// ==========================================

document
    .getElementById("generateBtn")
    .addEventListener("click", function () {

        posterName.textContent =
            productName.value;

        posterPrice.textContent =
            price.value;

        posterProcessor.textContent =
            processor.value;

        posterRam.textContent =
            ram.value;

        posterStorage.textContent =
            storage.value;

        posterDisplay.textContent =
            display.value;

        posterCondition.textContent =
            condition.value;

        posterStatus.textContent =
            status.value;

    });


// ==========================================
// UPLOAD FOTO
// ==========================================

imageInput.addEventListener(
    "change",
    function (event) {

        const file =
            event.target.files[0];

        if (!file) {
            return;
        }

        const reader =
            new FileReader();

        reader.onload =
            function (e) {

                posterImage.src =
                    e.target.result;

            };

        reader.readAsDataURL(file);

    }
);


// ==========================================
// DOWNLOAD PNG
// ==========================================

document
    .getElementById("downloadBtn")
    .addEventListener("click", async function () {

        const poster =
            document.getElementById("poster");

        try {

            const canvas =
                await html2canvas(poster, {

                    scale: 3,

                    backgroundColor: "#030509"

                });


            const link =
                document.createElement("a");


            link.download =
                "Brian2Gear-" +
                productName.value
                    .replace(/\s+/g, "-") +
                ".png";


            link.href =
                canvas.toDataURL(
                    "image/png"
                );


            link.click();

        }

        catch (error) {

            alert(
                "Gagal membuat pamflet."
            );

            console.error(error);

        }

    });