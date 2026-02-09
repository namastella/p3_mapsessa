import "./ShowPraemien.css";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { REWARDS, REWARD_COLLECTIONS } from "../data/rewards";
import { RewardTile } from "../components/RewardTile/RewardTile";
import { TileRow } from "../components/TileRow/TileRow";

export function ShowPraemien() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null); // null = alle

  const categories = useMemo(() => {
  const all = REWARDS.flatMap((r) => r.categories); 
  return Array.from(new Set(all));                 // Duplikate entfernen
}, []);


  const filteredRewards = useMemo(() => {
    if (!activeCategory) return REWARDS;
    return REWARDS.filter((r) => r.categories.includes(activeCategory));
  }, [activeCategory]);

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
      <h1 className="page__title">
        Hier kannst du deine Punkte gegen Prämien eintauschen
      </h1>

      <h2 className="section__title">Kategorien</h2>
      <TileRow>
        <RewardTile
          title="Alle"
          onClick={() => setActiveCategory(null)}
          disabled={activeCategory === null}
        />

        {categories.map((cat) => (
          <RewardTile
            key={cat}
            title={cat}
            onClick={() => setActiveCategory(cat)}
            disabled={activeCategory === cat}
          />
        ))}
      </TileRow>

      <h2 className="section__title">Unsere Empfehlungen für dich</h2>
      <TileRow>
        {REWARD_COLLECTIONS.recommended.map((id) => {
          const reward = filteredRewards.find((r) => r.id === id);
          if (!reward) return null;

          return (
            <RewardTile
              key={reward.id}
              title={reward.shortTitle}
              imageSrc={reward.image}
              onClick={() => navigate(`/praemien/${reward.id}`)}
            />
          );
        })}
      </TileRow>

      <h2 className="section__title">Aktuell beliebt</h2>
      <TileRow>
        {REWARD_COLLECTIONS.popular.map((id) => {
          const reward = filteredRewards.find((r) => r.id === id);
          if (!reward) return null;

          return (
            <RewardTile
              key={reward.id}
              title={reward.shortTitle}
              imageSrc={reward.image}
              onClick={() => navigate(`/praemien/${reward.id}`)}
            />
          );
        })}
      </TileRow>

      <h2 className="section__title">Kunst und Kultur</h2>
      <TileRow>
        {REWARD_COLLECTIONS.culture.map((id) => {
          const reward = filteredRewards.find((r) => r.id === id);
          if (!reward) return null;

          return (
            <RewardTile
              key={reward.id}
              title={reward.shortTitle}
              imageSrc={reward.image}
              onClick={() => navigate(`/praemien/${reward.id}`)}
            />
          );
        })}
      </TileRow>
    </div>
  );
}
