import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import InfoCard from "./InfoCard";

function FileDownload({ fileName, fileURL }) {
  return (
    <div className="c-file-download">
      <div className="c-file-download__image">
        <Image
          src="icon-pdf.svg"
          width={45}
          height={45}
          alt="PDF file Download"
        />
      </div>

      <div className="c-file-download__content">
        <h5>{fileName}</h5>
        <Button title="Download" direction={fileURL} />
      </div>
    </div>
  );
}

export default FileDownload;
