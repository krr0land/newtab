interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal(props: ModalProps) {
  return (
    <>
      {props.open && (
        <div
          id="overlay"
          className="fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center bg-black/60"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              props.onClose();
            }
          }}
        >
          <div id="window" className="flex flex-col bg-gray-700 min-w-80 min-h-80 p-4 rounded-xl">
            <div id="titlebar" className="flex  justify-between pb-4">
              <p className="text-2xl">{props.title}</p>
              <button onClick={props.onClose} className="hover:bg-gray-800 hover:bg-opacity-20 rounded w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>Close</title>
                  <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" fill="#ffffff" />
                </svg>
              </button>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
