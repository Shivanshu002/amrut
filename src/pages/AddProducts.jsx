import React, { useState, useRef, useEffect } from "react";
import Stepper from "../component/addProducts/Stepper";
import ImageUpload from "../component/addProducts/ImageUpload";
import QuantityRows from "../component/addProducts/QuantityRows";

export default function AddProducts() {
  /* ---------------- STEP ---------------- */
  const [currentStep, setCurrentStep] = useState(1);

  /* ---------------- IMAGE STATE ---------------- */
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const fileInputRef = useRef(null);

  /* ---------------- QUANTITY ROWS ---------------- */
  const [rows, setRows] = useState([
    {
      id: Date.now(),
      pillQty: "170 GM",
      pillMonth: "1 Month / 1 Jar",
      pillPrice: "₹ 329",
    },
  ]);

  /* ---------------- IMAGE ACTIONS ---------------- */

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    addImages(files);
    e.target.value = null;
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || []);
    addImages(files);
  };

  const addImages = (files) => {
    const valid = files.filter((file) => file.type.startsWith("image/"));
    if (!valid.length) return;

    const mapped = valid.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setImages((prev) => [...prev, ...mapped]);

    setTimeout(() => {
      setIndex((prev) => Math.max(0, prev));
    }, 0);
  };

  const removeImageAt = (i) => {
    setImages((prev) => {
      const next = prev.filter((_, idx) => idx !== i);
      if (index >= next.length) setIndex(Math.max(0, next.length - 1));
      return next;
    });
  };

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(images.length - 1, i + 1));

  /* clean up object URLs */
  useEffect(() => {
    return () => images.forEach((img) => URL.revokeObjectURL(img.url));
  }, [images]);

  /* ---------------- QUANTITY ROWS ---------------- */

  const removeRow = (id) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-[#F5F6F7] px-6 py-8 flex justify-center">
      <div className="w-full max-w-5xl">

        {/* stepper takes state */}
        <Stepper
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        <div className="bg-white rounded-lg border p-6">

          {/* image upload */}
          <ImageUpload
            images={images}
            index={index}
            prev={prev}
            next={next}
            removeImageAt={removeImageAt}
            handleBrowse={handleBrowse}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            fileInputRef={fileInputRef}
            handleFileChange={handleFileChange}
          />

          {/* quantity pills */}
          <QuantityRows
            rows={rows}
            removeRow={removeRow}
          />

        </div>

      </div>
    </div>
  );
}
