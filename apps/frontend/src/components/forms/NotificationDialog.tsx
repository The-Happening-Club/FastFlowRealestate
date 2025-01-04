import React from 'react';

interface NotificationDialogProps {
  isErrorOrSucces: boolean;
  errorMessage: string;
  error: string;
}
const NotificationDialog: React.FC<NotificationDialogProps> = ({
  isErrorOrSucces,
  errorMessage,
  error,
}) => {
  return (
    <div className="absolute top-1/2 min-w-96 min-h-48  p-4 flex flex-col gap-2 justify-center items-center bg-slate-50 rounded-md shadow-lg">
      <header>{isErrorOrSucces ? 'ERROR' : 'SUCCESS'}</header>
      <span>{errorMessage}.</span>
      <span>{error}</span>
      <button
        type="button"
        className="bg-blue-500 text-white rounded-md px-4 py-2"
      >
        close
      </button>
    </div>
  );
};

export default NotificationDialog;

// ERROR und SUCCESS Austauschen zu Icons
