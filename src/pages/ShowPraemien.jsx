// import "./ShowPraemien.css"; --> CSS Datei kann später hinzugefügt werden
import { RewardTile } from "../components/RewardTile/RewardTile";
import { TileRow } from "../components/TileRow/TileRow";

export function ShowPraemien() {
  return (
    <div className="page">
      <h1 className="page__title">Prämien eintauschen</h1>

      <h2 className="section__title">Kategorien</h2>
      <TileRow>
        <RewardTile title="Freizeit" />
        <RewardTile title="Gutscheine" />
        <RewardTile title="Spenden" disabled />
      </TileRow>

      <h2 className="section__title">Unsere Empfehlungen für dich</h2>
      <TileRow>
        <RewardTile title="Kino Gutscheine" imageSrc="https://placehold.co/200x120" />
        <RewardTile title="Theater Gutscheine" imageSrc="https://placehold.co/200x120" />
        <RewardTile title="CBF Spende" />
      </TileRow>

      <h2 className="section__title">Aktuell beliebt</h2>
      <TileRow>
        <RewardTile title={"Schlittschuh-\nlaufen"} />
        <RewardTile title={"Heinerliner\nFreifahrt"} />
        <RewardTile title={"Kino\nGutscheine"} />
      </TileRow>
    </div>
  );
}
