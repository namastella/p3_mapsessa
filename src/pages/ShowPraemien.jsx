import "./ShowPraemien.css"; 
import { useNavigate } from "react-router-dom";
import { REWARDS } from "../data/rewards";
import { RewardTile } from "../components/RewardTile/RewardTile";
import { TileRow } from "../components/TileRow/TileRow";

export function ShowPraemien() {
  const navigate = useNavigate();

  return (
    <div className="page">
        <button
        type="button"
        className="page-back"
        onClick={() => navigate(-1)}
        aria-label="Zurück"
      >
        ←
      </button>
      <h1 className="page__title">Hier kannst du deine Punkte gegen Prämien eintauschen</h1>

      <h2 className="section__title">Kategorien</h2>
      <TileRow>
        <RewardTile title="Freizeit" />
        <RewardTile title="Gutscheine" />
        <RewardTile title="Spenden"  />
        <RewardTile title="Auszahlen"  />
      </TileRow>

      <h2 className="section__title">Unsere Empfehlungen für dich</h2>
      <TileRow>
        {REWARDS.map((r) => (
          <RewardTile
            key={r.id}
            title={r.shortTitle}
            imageSrc={r.image}
            onClick={() => navigate(`/praemien/${r.id}`)}
          />
        ))}
        
      </TileRow>

      <h2 className="section__title">Aktuell beliebt</h2>
      <TileRow>
        <RewardTile title={"Schlittschuh-\nlaufen"} />
        <RewardTile title={"Heinerliner\nFreifahrt"} />
        <RewardTile title={"Kino\nGutscheine"} />
        <RewardTile title={"Theater\nGutscheine"} />
      </TileRow>
    </div>
  );
}
