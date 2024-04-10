import React from 'react';

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
                    <div className="absolute inset-0" />
                    <div className="bg-white p-4 rounded-lg shadow-lg z-10">{children}</div>
                </div>
            )}
        </>
    );
}
