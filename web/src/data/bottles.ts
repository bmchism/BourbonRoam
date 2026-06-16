import type { Bottle } from "../types";

type BourbonStyle = "Straight" | "Single Barrel" | "Small Batch" | "Bottled-in-Bond" | "Wheated" | "High Rye" | "Barrel Proof" | "Rye";

const A: Record<BourbonStyle, string> = {
  Straight: "#B5651D",
  "Single Barrel": "#8C4A2F",
  "Small Batch": "#A66A33",
  "Bottled-in-Bond": "#C28A3D",
  Wheated: "#D4A574",
  "High Rye": "#9E5A2A",
  "Barrel Proof": "#6B3A1F",
  Rye: "#5E4B3B",
};

type Seed = Partial<Bottle> & { id: string; producer: string; name: string; distilleryId: string; style: BourbonStyle; region: string; aromas: string[]; flavors: string[]; };
const mk = (s: Seed): Bottle => {
  const base = { abv: 45, accent: A[s.style], ...s };
  return {
    ...base,
    brand: base.producer,
    distillery: base.producer,
    expression: base.style,
    proof: Math.round(base.abv * 2),
  };
};

export const bottles: Bottle[] = [
  mk({ id: "buffalo-trace", producer: "Buffalo Trace", name: "Buffalo Trace Bourbon", distilleryId: "buffalo-trace-distillery", style: "Straight", abv: 45, region: "Frankfort, Kentucky", aromas: ["Caramel", "Vanilla", "Mint", "Toffee"], flavors: ["Brown Sugar", "Oak", "Spice", "Orange Peel"], tastingNotes: "The benchmark everyday bourbon — balanced sweetness, gentle spice, clean finish.", story: "One of the oldest continuously operating distilleries in America, surviving Prohibition as a 'medicinal whiskey' producer." }),
  mk({ id: "makers-mark", producer: "Maker's Mark", name: "Maker's Mark Bourbon", distilleryId: "makers-mark-distillery", style: "Wheated", abv: 45, region: "Loretto, Kentucky", aromas: ["Wheat", "Caramel", "Vanilla", "Red Fruit"], flavors: ["Honey", "Butterscotch", "Soft Spice", "Cream"], tastingNotes: "The quintessential wheated bourbon — soft, sweet, and approachable with no harsh edges.", story: "Bill Samuels Sr. burned his family's sour mash recipe and started fresh with winter wheat." }),
  mk({ id: "woodford-reserve", producer: "Woodford Reserve", name: "Woodford Reserve Bourbon", distilleryId: "woodford-reserve-distillery", style: "Small Batch", abv: 45.2, region: "Versailles, Kentucky", aromas: ["Dried Fruit", "Vanilla", "Toasted Oak", "Spice"], flavors: ["Chocolate", "Caramel", "Cinnamon", "Cherry"], tastingNotes: "Rich and complex with a chocolatey core — the bourbon lover's daily pour.", story: "The smallest and oldest distillery in Kentucky, using copper pot stills and triple distillation." }),
  mk({ id: "wild-turkey-101", producer: "Wild Turkey", name: "Wild Turkey 101", distilleryId: "wild-turkey-distillery", style: "High Rye", abv: 50.5, region: "Lawrenceburg, Kentucky", aromas: ["Caramel", "Vanilla", "Rye Spice", "Tobacco"], flavors: ["Bold Spice", "Honey", "Charred Oak", "Leather"], tastingNotes: "Bold, spicy, and full-bodied at 101 proof — a bartender's favorite for its backbone.", story: "Jimmy and Eddie Russell: father and son with over 100 combined years of distilling experience." }),
  mk({ id: "elijah-craig-small-batch", producer: "Elijah Craig", name: "Elijah Craig Small Batch", distilleryId: "heaven-hill-distillery", style: "Small Batch", abv: 47, region: "Bardstown, Kentucky", aromas: ["Vanilla", "Caramel", "Nutmeg", "Smoke"], flavors: ["Oak", "Maple", "Spice", "Dried Fruit"], tastingNotes: "Named for the Baptist minister credited with aging whiskey in charred barrels. Excellent value.", story: "Heaven Hill — the largest family-owned distillery in America — crafts this crowd-pleaser." }),
  mk({ id: "four-roses-single-barrel", producer: "Four Roses", name: "Four Roses Single Barrel", distilleryId: "four-roses-distillery", style: "Single Barrel", abv: 50, region: "Lawrenceburg, Kentucky", aromas: ["Ripe Plum", "Cherry", "Cocoa", "Spice"], flavors: ["Rich Fruit", "Creamy Vanilla", "Mellow Spice", "Long Finish"], tastingNotes: "One of 10 unique recipes — complex, fruity, and incredibly smooth for single barrel.", story: "Four Roses uses 2 mash bills and 5 proprietary yeast strains to create 10 distinct bourbon recipes." }),
  mk({ id: "blantons-single-barrel", producer: "Blanton's", name: "Blanton's Single Barrel", distilleryId: "buffalo-trace-distillery", style: "Single Barrel", abv: 46.5, region: "Frankfort, Kentucky", aromas: ["Citrus", "Caramel", "Vanilla", "Nutmeg"], flavors: ["Orange", "Honey", "Oak", "Spice"], tastingNotes: "The world's first commercially released single barrel bourbon — silky and refined.", story: "Named for Colonel Albert Blanton who ran the distillery for decades. The horse-and-jockey stopper is collectible." }),
  mk({ id: "knob-creek-9yr", producer: "Knob Creek", name: "Knob Creek 9 Year", distilleryId: "jim-beam-distillery", style: "Straight", abv: 50, region: "Clermont, Kentucky", aromas: ["Toasted Nuts", "Caramel", "Maple", "Oak"], flavors: ["Rich Oak", "Dark Honey", "Charred Wood", "Vanilla"], tastingNotes: "Pre-Prohibition style — big, bold, full-flavored with a satisfying 100-proof punch.", story: "Part of Jim Beam's small batch collection, named for Abraham Lincoln's childhood home." }),
  mk({ id: "eagle-rare-10", producer: "Eagle Rare", name: "Eagle Rare 10 Year", distilleryId: "buffalo-trace-distillery", style: "Straight", abv: 45, region: "Frankfort, Kentucky", aromas: ["Toffee", "Orange Peel", "Herbs", "Oak"], flavors: ["Honey", "Leather", "Dark Chocolate", "Cherries"], tastingNotes: "Ten years of aging deliver remarkable complexity at an accessible price.", story: "From the same distillery as Buffalo Trace and Pappy — one of the best value aged bourbons on the market." }),
  mk({ id: "weller-special-reserve", producer: "W.L. Weller", name: "Weller Special Reserve", distilleryId: "buffalo-trace-distillery", style: "Wheated", abv: 45, region: "Frankfort, Kentucky", aromas: ["Honey", "Vanilla", "Caramel", "Wheat"], flavors: ["Butterscotch", "Soft Spice", "Cream", "Citrus"], tastingNotes: "The affordable wheated bourbon from the same distillery and mash bill family as Pappy Van Winkle.", story: "William Larue Weller pioneered wheated bourbon in the 1800s. Same DNA as Pappy, fraction of the price." }),
  mk({ id: "old-forester-1920", producer: "Old Forester", name: "Old Forester 1920 Prohibition Style", distilleryId: "brown-forman-distillery", style: "Barrel Proof", abv: 57.5, region: "Louisville, Kentucky", aromas: ["Dark Caramel", "Chocolate", "Banana", "Cherry"], flavors: ["Rich Toffee", "Baking Spice", "Green Apple", "Oak"], tastingNotes: "A beast at 115 proof — dense, chewy, and rewarding. One of the best barrel-proof values.", story: "The Whiskey Row Collection honors Old Forester's history. This one celebrates the bourbon sold 'for medicinal purposes' during Prohibition." }),
  mk({ id: "michters-us1", producer: "Michter's", name: "Michter's US★1 Bourbon", distilleryId: "michters-distillery", style: "Small Batch", abv: 45.7, region: "Louisville, Kentucky", aromas: ["Caramel", "Vanilla", "Stone Fruit", "Toasted Grain"], flavors: ["Rich Caramel", "Dried Fruit", "Ginger", "Balanced Oak"], tastingNotes: "Small batch excellence — toasty barrels at lower entry proof for maximum flavor extraction.", story: "Michter's enters barrels at 103 proof (industry norm is 125), sacrificing efficiency for flavor." }),
  mk({ id: "angels-envy", producer: "Angel's Envy", name: "Angel's Envy Bourbon Finished in Port Barrels", distilleryId: "angels-envy-distillery", style: "Straight", abv: 43.3, region: "Louisville, Kentucky", aromas: ["Maple", "Raisin", "Port Wine", "Vanilla"], flavors: ["Dark Fruit", "Toffee", "Chocolate", "Port Sweetness"], tastingNotes: "A port barrel finish adds layers of dark fruit and sweetness to a classic bourbon base.", story: "Master distiller Lincoln Henderson (who created Woodford Reserve) created this as his passion project." }),
  mk({ id: "bulleit-bourbon", producer: "Bulleit", name: "Bulleit Bourbon", distilleryId: "bulleit-distillery", style: "High Rye", abv: 45, region: "Shelbyville, Kentucky", aromas: ["Maple", "Oak", "Nutmeg", "Light Spice"], flavors: ["Caramel", "Rye Spice", "Dried Fruit", "Toasted Oak"], tastingNotes: "High-rye recipe (28%) gives it a dry, spicy character that shines in cocktails.", story: "Based on a 150-year-old family recipe. The frontier-style bottle has become iconic." }),
  mk({ id: "russells-reserve-10", producer: "Russell's Reserve", name: "Russell's Reserve 10 Year", distilleryId: "wild-turkey-distillery", style: "Straight", abv: 45, region: "Lawrenceburg, Kentucky", aromas: ["Caramel", "Vanilla", "Cherry", "Leather"], flavors: ["Butterscotch", "Spice", "Oak", "Cocoa"], tastingNotes: "Eddie Russell's personal expression — 10 years of aging, non-chill filtered. A sipper's bourbon.", story: "Eddie Russell — Jimmy's son and Wild Turkey's current master distiller — crafted this as his signature." }),
  mk({ id: "1792-small-batch", producer: "1792", name: "1792 Small Batch", distilleryId: "barton-1792-distillery", style: "Small Batch", abv: 46.85, region: "Bardstown, Kentucky", aromas: ["Spice", "Caramel", "Vanilla", "Orange"], flavors: ["Cinnamon", "Vanilla", "Oak", "Dark Fruit"], tastingNotes: "Named for the year Kentucky became a state. Bold spice balanced by caramel sweetness.", story: "Barton 1792 Distillery has been making whiskey on the same spot in Bardstown since 1879." }),
];

export const bottleById = (id: string): Bottle | undefined => bottles.find((b) => b.id === id);
export const bottlesByType = (type: string): Bottle[] => bottles.filter((b) => (b.style || b.expression) === type);
