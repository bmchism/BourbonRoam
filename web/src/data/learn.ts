import type { LearnArticle } from "../types";

export type BourbonStyle = "Straight" | "Single Barrel" | "Small Batch" | "Bottled-in-Bond" | "Wheated" | "High Rye" | "Barrel Proof" | "Rye";

export const articles: LearnArticle[] = [
  {
    slug: "what-is-bourbon",
    title: "What Is Bourbon?",
    subtitle: "America's native spirit — corn, oak, and time.",
    kicker: "Bourbon 101",
    sections: [
      { heading: "The legal definition", body: "Bourbon must be made in the USA from at least 51% corn, distilled to no more than 160 proof, entered into new charred oak barrels at no more than 125 proof, and bottled at 80+ proof. No coloring or flavoring may be added." },
      { heading: "Why Kentucky?", body: "While bourbon can be made anywhere in the US, 95% comes from Kentucky. The limestone-filtered water, temperature swings for barrel aging, and generations of distilling expertise make it the spiritual home." },
      { heading: "Mash bill matters", body: "The grain recipe defines the style. Traditional bourbon is corn-forward with rye for spice. Wheated bourbons swap rye for wheat (softer, sweeter). High-rye bourbons amp up the spice. The remaining grain is malted barley for enzymes." },
    ],
  },
  {
    slug: "bourbon-styles",
    title: "Bourbon Styles",
    subtitle: "From Bottled-in-Bond to Barrel Proof — know what you're pouring.",
    kicker: "Bourbon 101",
    sections: [
      { heading: "Straight Bourbon", body: "Aged at least 2 years (4 if no age statement), no additives. The baseline for quality bourbon." },
      { heading: "Bottled-in-Bond", body: "The gold standard: 100 proof, single distillery, single distilling season, aged 4+ years in a government-bonded warehouse. A guarantee of authenticity." },
      { heading: "Single Barrel", body: "Bottled from one individual barrel — each is unique. More variation, often higher quality, selected by the master distiller." },
      { heading: "Small Batch", body: "A blend of select barrels (no legal definition for quantity). Generally premium but the term is loosely used." },
      { heading: "Barrel Proof / Cask Strength", body: "Bottled straight from the barrel with no water added. Usually 110-140 proof. Intense, full-flavored, and you add your own water to taste." },
      { heading: "Wheated Bourbon", body: "Uses wheat instead of rye as the secondary grain. Softer, sweeter, rounder — think Maker's Mark, Weller, Pappy." },
      { heading: "High Rye Bourbon", body: "Higher percentage of rye in the mash bill (18-35%+). Spicier, bolder — think Four Roses, Bulleit, Wild Turkey." },
    ],
  },
  {
    slug: "how-to-taste-bourbon",
    title: "How to Taste Bourbon",
    subtitle: "Neat, a drop of water, and paying attention.",
    kicker: "Do a tasting",
    sections: [
      { heading: "Set up", body: "Pour 1-1.5 oz neat in a Glencairn or tulip glass at room temperature. Have water nearby. Taste lighter proofs first, barrel proof last." },
      { heading: "Look", body: "Hold to light. Color tells you about age and barrel: pale gold = younger, deep amber/mahogany = older or more barrel interaction. Legs/tears on the glass hint at viscosity and proof." },
      { heading: "Nose", body: "Don't shove your nose in — hold the glass below your chin first, then slowly raise. Mouth slightly open. Look for: caramel, vanilla, oak, corn sweetness, baking spice, fruit, leather, tobacco." },
      { heading: "Taste", body: "Small sip, coat your whole mouth. Notice sweetness on the tip, spice on the sides, oak and tannin at the back. Let it sit 3-5 seconds before swallowing. A second sip always reveals more." },
      { heading: "Finish", body: "How long does flavor linger? Short and clean, or long and warming? Does it evolve — maybe starts sweet and ends spicy? The best bourbons have a finish that goes on for minutes." },
      { heading: "Add water", body: "A few drops of water (especially on barrel proof) opens up aromatics and softens heat. There's no shame in it — master distillers do it. Find the sweet spot where flavor peaks without burn." },
    ],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);

export interface StyleGuide { wineType: string; description: string; profile: string; accent: string; }
export const wineTypeGuides: StyleGuide[] = [
  { wineType: "Straight", description: "Aged 2+ years in new charred oak, no additives", profile: "Classic bourbon — caramel, vanilla, oak, corn sweetness.", accent: "#B5651D" },
  { wineType: "Single Barrel", description: "One barrel, hand-selected, unique character", profile: "Individual and bold — no two are exactly alike.", accent: "#8C4A2F" },
  { wineType: "Small Batch", description: "Select barrels blended for a premium profile", profile: "Balanced and refined — the distiller's art of blending.", accent: "#A66A33" },
  { wineType: "Bottled-in-Bond", description: "100 proof, single distillery, single season, 4+ years", profile: "The gold standard — guaranteed quality and provenance.", accent: "#C28A3D" },
  { wineType: "Wheated", description: "Wheat replaces rye — softer, sweeter mash bill", profile: "Round and approachable — honey, toffee, soft spice.", accent: "#D4A574" },
  { wineType: "High Rye", description: "Extra rye grain for bold spice and complexity", profile: "Spicy and assertive — pepper, cinnamon, dried fruit.", accent: "#9E5A2A" },
  { wineType: "Barrel Proof", description: "No water added — straight from cask at full strength", profile: "Intense and concentrated — dilute to your preference.", accent: "#6B3A1F" },
  { wineType: "Rye", description: "At least 51% rye grain — bourbon's spicier sibling", profile: "Peppery, herbal, drier — the cocktail king.", accent: "#5E4B3B" },
];
