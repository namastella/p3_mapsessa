import kino from "../assets/pictures/kino.jpg"
import heiner from "../assets/pictures/Heinerliner.jpg"
import theater from "../assets/pictures/staatstheater.jpg"
import cbf from "../assets/pictures/cbf.webp"
import museum from "../assets/pictures/hessischeslandesmuseum.jpg"
import sehenswert from "../assets/pictures/mathildenhoehe.jpg"

export const REWARDS = [
  {
    id: "kino",
    shortTitle: "Kino Gutschein",
    title: "Gutschein für einen Film für eine Person im Citydome, Kinopolis oder Rex*",
    points: 110,
    image: kino,
    description:
      "Einfach mal wieder ins Kino gehen. Und das ganz entspannt in einem der Kinos in Darmstadt.",
    details:
      "Such dir noch schnell einen Film raus und ab geht's!",
    footnote: "*Nur gültig in allen Kinopolis Einrichtungen Darmstadt.",
    categories: ["Gutscheine", "Freizeit"],
  },
  {
    id: "heinerliner",
    shortTitle: "Heinerliner Freifahrt",
    title: "Heinerliner Freifahrt",
    points: 50,
    image: heiner,
    description: "Eine Freifahrt mit dem Heinerliner in Darmstadt.",
    details: "Gültig im Stadtgebiet Darmstadt.",
    footnote: "",
    categories: ["Mobilität", "Gutscheine"],
  },
  {
    id: "theater",
    shortTitle: "Theater Gutschein",
    title: "Gutschein für eine Aufführung im Staatstheater Darmstadt für eine Person",
    points: 150,
    image: theater,
    description: "Was ist das denn für ein Theater hier? Und wann warst du eigentlich das letzte Mal im Theater? Dann wird es mal wieder Zeit. Mit diesem Gutschein erhälst du freien Eintritt für ein Stück deiner Wahl.",
    details: "Gültig nur im Staatstheater Darmstadt.",
    footnote: "",
    categories: ["Gutscheine", "Freizeit"],
  },
  {
    id: "cbf",
    shortTitle: "CBF Spende",
    title: "Spende deine Punkte an den CBF Darmstadt e.V.",
    points: 100,
    image: cbf,
    description: "Pro 100 Punkten werden 10€ an den Club Behinderter und ihrer Freunde in Darmstadt und Umgebung e.V. gespendet. Der CBF setzt sich seit 1971 für die Belange von Menschen mit Behinderung ein.",
    details: "Weitere Informationen zur Nutzung der Spendengelder findest du auf der Website des CBF.",
    footnote: "",
    categories: ["Spende"],
  },
  {
    id: "museum",
    shortTitle: "Eintritt Hessisches Landesmuseum",
    title: "Eintritt Hessisches Landesmuseum",
    points: 110,
    image: museum,
    description: "Erhalte freien Eintritt im Hessischen Landesmuseum für eine Person. ",
    details: "Es handelt sich um einen einmaligen Eintritt. Sonntage sind von der Aktion ausgeschlossen.",
    footnote: "",
    categories: ["Gutscheine", "Freizeit"],
  },
  {
    id: "sehenswert",
    shortTitle: "Erlebnis Hochzeitsturm",
    title: "Besuche kostenfrei die Aussichtsplattform des Hochzeitturms",
    points: 150,
    image: sehenswert,
    description: "Erhalte freien Eintritt in den berühmten Hochzeitsturm der Mathildenhöhe. Genieße einen unfassbaren Ausblick über die Stadt Darmstadt. ",
    details: "Es handelt sich um einen einmaligen Eintritt. Sonntage sind von der Aktion ausgeschlossen.",
    footnote: "",
    categories: ["Gutscheine", "Freizeit"],
  },
];

/* Reihenfolge = Anzeige-Reihenfolge */
export const REWARD_COLLECTIONS = {
  recommended: ["kino", "heinerliner", "theater", "cbf", "museum" ],
  popular: ["heinerliner", "cbf", "museum", "kino"],
  culture: ["sehenswert", "theater", "museum"],
  mobility: ["heinerliner"],
};
