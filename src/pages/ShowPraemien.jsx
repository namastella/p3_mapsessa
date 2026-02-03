// import "./ShowPraemien.css"; --> CSS Datei kann später hinzugefügt werden
import { useNavigate } from "react-router-dom";
import { REWARDS } from "../data/rewards";
import { RewardTile } from "../components/RewardTile/RewardTile";
import { TileRow } from "../components/TileRow/TileRow";

export function ShowPraemien() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 className="page__title">Prämien eintauschen</h1>

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
            title={r.title}
            imageSrc={r.image}
            onClick={() => navigate(`/praemien/${r.id}`)}
          />
        ))}
        <RewardTile title="Kino Gutscheine" imageSrc="https://placehold.co/200x120" />
        <RewardTile title="Theater Gutscheine" imageSrc="https://placehold.co/200x120" />
        <RewardTile title="CBF Spende" />
        <RewardTile title="Eintritt Hessisches Landesmuseum" imageSrc="https://placehold.co/200x120" />
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
