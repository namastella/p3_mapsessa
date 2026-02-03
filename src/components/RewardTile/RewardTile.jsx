import "./RewardTile.css";

export function RewardTile({
  title,
  imageSrc,
  imageAlt = "",
  onClick,
  disabled = false,
}) {
  const isClickable = typeof onClick === "function" && !disabled;

  return (
    <button
      type="button"
      className={`reward-tile ${imageSrc ? "has-image" : "text-only"} ${
        disabled ? "is-disabled" : ""
      }`}
      onClick={isClickable ? onClick : undefined}
      disabled={disabled}
    >
      {imageSrc ? (
        <img className="reward-tile__img" src={imageSrc} alt={imageAlt} />
      ) : null}

      <span className="reward-tile__label">{title}</span>
    </button>
  );
}
