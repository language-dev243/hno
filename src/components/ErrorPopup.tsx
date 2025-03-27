interface ErrorPopupProps {
  message: string;
  onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, onClose }) => {
  return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-red-500 mb-4">{message}</p>
        <button onClick={onClose} className="text-gray-600">
          Close
        </button>
      </div>
  );
};

export default ErrorPopup;
