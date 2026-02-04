import { useEffect } from "react";
import "./ConfirmModal.css";

export function ConfirmModal({
  open,
  title,
  children,
  confirmText = "Eintauschen",
  cancelText = "Abbrechen",
  variant = "confirm", // "confirm" | "success"
  onConfirm,
  onClose,
}) {
  

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-sheet ${variant === "success" ? "is-success" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Dialog"}
        onClick={(e) => e.stopPropagation()}
      >
        {/* title nur wenn vorhanden */}
        {title ? <h3 className="modal-title">{title}</h3> : null}

        <div className="modal-body">{children}</div>

        <div className="modal-actions">
          {variant === "confirm" ? (
            <>
              <button type="button" className="modal-btn cancel" onClick={onClose}>
                {cancelText}
              </button>
              <button type="button" className="modal-btn confirm" onClick={onConfirm}>
                {confirmText}
              </button>
            </>
          ) : (
            <button type="button" className="modal-btn ok" onClick={onClose}>
              Ok
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
