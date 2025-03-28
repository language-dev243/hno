interface ErrorPopupProps {
  message: string;
  onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-red-500 mb-4">{message}</p>
        <button onClick={onClose} className="text-gray-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
