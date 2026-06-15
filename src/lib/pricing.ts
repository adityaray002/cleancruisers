// ─── Single source of truth for all car wash pricing ─────────────────────────
// Every component (plan selection, summary, WhatsApp message) must import from here.
// Change prices in ONE place and they update everywhere automatically.

export type CarType = "Hatchback" | "Sedan" | "SUV" | "Luxury";

interface CarBase {
  base: number;    // exterior wash only & interior wash only base
  premium: number; // exterior + interior combined
}

const CAR_BASE: Record<CarType, CarBase> = {
  Hatchback: { base: 349, premium: 449 },
  Sedan:     { base: 349, premium: 499 },
  SUV:       { base: 399, premium: 549 },
  Luxury:    { base: 399, premium: 549 },
};

// Plan name → price for a given car type
export const getPlanPrice = (car: string, plan: string): number => {
  const b = CAR_BASE[car as CarType] ?? CAR_BASE.Sedan;
  const p = plan.toLowerCase().trim();
  if (p === "exterior wash + interior wash") return b.premium;
  if (p === "exterior wash only")            return b.base;
  if (p === "interior wash only")            return b.base;
  if (p === "waterless")                     return b.base;
  return 0;
};

// Full lookup table for components that need Record<car, Record<plan, price>>
export const PLAN_PRICING: Record<string, Record<string, number>> = Object.fromEntries(
  (Object.keys(CAR_BASE) as CarType[]).map((car) => [
    car,
    {
      "exterior wash + interior wash": CAR_BASE[car].premium,
      "exterior wash only":            CAR_BASE[car].base,
      "interior wash only":            CAR_BASE[car].base,
      "waterless":                     CAR_BASE[car].base,
    },
  ])
);

// Complete Care pricing
export const COMPLETE_CARE_PRICING: Record<string, number> = {
  Hatchback: 1399,
  Sedan:     1499,
  SUV:       1599,
  Luxury:    1599,
};

// Add-on pricing
export const ADDON_PRICING: Record<string, number> = {
  "rubbing-foam-hatchback":   1599, "rubbing-foam-sedan":   1599, "rubbing-foam-suv":   1799, "rubbing-foam-luxury":   1899,
  "3m-wax-foam-hatchback":     649, "3m-wax-foam-sedan":     649, "3m-wax-foam-suv":     749, "3m-wax-foam-luxury":     949,
  "rubbing-wax-foam-hatchback": 1699, "rubbing-wax-foam-sedan": 1699, "rubbing-wax-foam-suv": 1899, "rubbing-wax-foam-luxury": 1999,
  "full-package-hatchback":   2499, "full-package-sedan":   2499, "full-package-suv":   2699, "full-package-luxury":   2799,
  "rubbing-dry-foam-hatchback": 2199, "rubbing-dry-foam-sedan": 2199, "rubbing-dry-foam-suv": 2399, "rubbing-dry-foam-luxury": 2499,
  "dry-wax-foam-hatchback":   1499, "dry-wax-foam-sedan":   1499, "dry-wax-foam-suv":   1699, "dry-wax-foam-luxury":   1799,
  "dry-cleaning-hatchback":    999, "dry-cleaning-sedan":    999, "dry-cleaning-suv":   1099, "dry-cleaning-luxury":   1099,
  "air-freshener-hatchback":   149, "air-freshener-sedan":   149, "air-freshener-suv":   149, "air-freshener-luxury":   149,
};

export const getAddonPrice = (serviceId: string): number => ADDON_PRICING[serviceId] ?? 0;
