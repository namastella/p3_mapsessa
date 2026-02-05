import "./SettingRow.css";

export function SettingRow({ label, description, right, onClick }) {
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      className={`setting-row ${onClick ? "is-clickable" : ""}`}
      onClick={onClick}
    >
      <div className="setting-text">
        <div className="setting-label">{label}</div>
        {description ? (
          <div className="setting-desc">{description}</div>
        ) : null}
      </div>

      <div className="setting-right">{right}</div>
    </Wrapper>
  );
}
