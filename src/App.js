import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const GenerateQrCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383ff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQrCode(url);
      }
    );
  };

  return (
    <div>
      <h1>QR CODE GEN</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
      />
      <button onClick={GenerateQrCode}>Generate</button>
      {qrCode && (
        <>
          <img src={qrCode} />
          <a href={qrCode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
