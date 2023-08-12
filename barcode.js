var bwipjs = require("bwip-js");

function createBarcode(data) {
    bwipjs.toBuffer({ bcid: "code39", text: data }, function (err, png) {
        if (err) {
            document.getElementById("output").textContent = err;
        } else {
            document.getElementById("myimg").src =
                "data:image/png;base64," + png.toString("base64");
        }
    });
}
