import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { QrScanner } from '@zxing/library';
import { Camera, QrCode } from 'lucide-react';

const AttendanceLog: React.FC = () => {
  const [attendanceMethod, setAttendanceMethod] = useState<'facial' | 'qr'>('facial');
  const webcamRef = useRef<Webcam>(null);
  const [qrResult, setQrResult] = useState<string | null>(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      // TODO: Send image to backend for facial recognition
      console.log('Image captured:', imageSrc);
    }
  };

  const handleQrCodeScan = () => {
    if (webcamRef.current) {
      const video = webcamRef.current.video;
      if (video) {
        const codeReader = new QrScanner(video, (result) => {
          setQrResult(result.getText());
          codeReader.stop();
        }, {});
        codeReader.start();
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Log Attendance</h1>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${attendanceMethod === 'facial' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setAttendanceMethod('facial')}
        >
          <Camera className="inline-block mr-2" size={18} /> Facial Recognition
        </button>
        <button
          className={`px-4 py-2 rounded ${attendanceMethod === 'qr' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setAttendanceMethod('qr')}
        >
          <QrCode className="inline-block mr-2" size={18} /> QR Code
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-full max-w-md mx-auto mb-4"
        />
        {attendanceMethod === 'facial' ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={captureImage}
          >
            Capture and Log Attendance
          </button>
        ) : (
          <div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleQrCodeScan}
            >
              Scan QR Code
            </button>
            {qrResult && (
              <p className="mt-4">QR Code Result: {qrResult}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceLog;